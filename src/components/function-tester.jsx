import { useState } from "preact/hooks";

function ExerciseStart({ handleClick, output, children }) {
  return (
    <>
      <h2>Create Your First Serverless Function</h2>
      <p>
        Create a new file at <code>/netlify/functions/hello-world.js</code> and
        put the following inside:
      </p>
      {children}

      <p>
        Save it, then run <code>netlify dev</code> to test locally. Check your
        work by clicking the button below!
      </p>

      {output && (
        <div class="error">
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

      <button onClick={handleClick} class="button">
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

export default function FunctionTester({ children }) {
  const [output, setOutput] = useState();

  function handleClick() {
    fetch("/.netlify/functions/hello-world")
      .then((res) => res.text())
      .then((result) => setOutput(result))
      .catch((err) => {
        console.log(err);
        setOutput(
          `Please create your function and
run \`netlify dev\` in your CLI.`
        );
      });
  }

  return output === "hello world!" ? (
    <ExerciseFinish />
  ) : (
    <ExerciseStart handleClick={handleClick} output={output}>
      {children}
    </ExerciseStart>
  );
}
