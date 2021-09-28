import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/functions.module.css';

const FIRST_FUNCTION_CONTENT = `
exports.handler = () => {
  return {
    statusCode: 200,
    body: 'hello world!',
  };
};
`;

function ExerciseStart({ handleClick, output }) {
  return (
    <>
      <h2>Create Your First Serverless Function</h2>
      <p>
        Create a new file at <code>/netlify/functions/hello-world.js</code> and
        put the following inside:
      </p>
      <pre>{FIRST_FUNCTION_CONTENT}</pre>

      <p>
        Save it, then run <code>netlify dev</code> to test locally. Check your
        work by clicking the button below!
      </p>

      {output && (
        <div className={styles.error}>
          <p>
            There was a problem checking your function. The error message is:
          </p>
          <pre>{output}</pre>
          <p>
            Please check that the file exists in the right place and that the
            code matches the sample above.
          </p>
        </div>
      )}

      <button onClick={handleClick} className={styles.button}>
        Test Your Function
      </button>
    </>
  );
}

function ExerciseFinish() {
  return (
    <>
      <h2>You did it!</h2>
      <p>
        You’ve successfully created your first Netlify Function! Great work!
      </p>
    </>
  );
}

export default function FunctionsPage() {
  const [output, setOutput] = useState();

  function handleClick() {
    fetch('/.netlify/functions/hello-world')
      .then((res) => res.text())
      .then((result) => setOutput(result))
      .catch((err) => {
        console.log(err);
        setOutput(
          `Please create your function and
run \`netlify dev\` in your CLI.`,
        );
      });
  }

  return (
    <Layout
      title="Netlify Functions"
      description="Serverless functions are superpowers for web developers! Securely handle server-like requirements at any scale with no provisioning, scaling, or ops overhead."
    >
      <main className={styles.container}>
        {output === 'hello world!' ? (
          <ExerciseFinish />
        ) : (
          <ExerciseStart handleClick={handleClick} output={output} />
        )}
        <p>
          <a href="https://docs.netlify.com/functions/configure-and-deploy/">
            Learn about serverless functions in the Netlify docs.
          </a>
        </p>
      </main>
    </Layout>
  );
}
