import Layout from '../components/layout';
import styles from '../styles/netlify-forms.module.css';

export default function FunctionsPage() {
  return (
    <Layout
      title="Netlify Forms"
      description="Turn any HTML form into a functional form that can receive submissions with a single line of code."
    >
      <main>
        <h2 className={styles.heading}>Make this form functional</h2>

        <form
          className={styles.form}
          method="POST"
          name="contact"
          data-netlify="true"
          action="/success"
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message</label>
          <textarea name="message"></textarea>

          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
        <p className={styles.docs}>
          <a href="https://docs.netlify.com/forms/setup/">
            Learn about Netlify Forms in the docs.
          </a>
        </p>
      </main>
    </Layout>
  );
}
