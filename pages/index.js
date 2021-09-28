import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <Layout
      title="Netlify Feature Tour"
      description="This is a small site to show the most powerful features of Netlify quickly!"
      home
    >
      <main className={styles.steps}>
        <section className={styles.step}>
          <h2 className={styles.stepHeading}>Deploy Previews</h2>
          <p>
            Every pull request is automatically built in an
            identical-to-production environment for{' '}
            <strong>painless QA, feedback, and review.</strong>
          </p>
          <Link href="/deploy-previews">
            <a className={styles.button}>
              Learn more <span className="sr-only">about Deploy Previews</span>
            </a>
          </Link>
        </section>

        <section className={styles.step}>
          <h2 className={styles.stepHeading}>Instant Rollbacks</h2>
          <p>
            Confidently ship to production with the knowledge that it’s a
            one-click operation to roll back to a previous version of the site.{' '}
            <strong>Instant disaster recovery!</strong>
          </p>
          <Link href="/instant-rollbacks">
            <a className={styles.button}>
              Learn more{' '}
              <span className="sr-only">about Instant Rollbacks</span>
            </a>
          </Link>
        </section>

        <section className={styles.step}>
          <h2 className={styles.stepHeading}>Netlify Functions</h2>
          <p>
            <strong>
              Serverless functions are superpowers for web developers!
            </strong>{' '}
            Securely handle server-like requirements at any scale with no
            provisioning, scaling, or ops overhead.
          </p>
          <Link href="/functions">
            <a className={styles.button}>
              Learn more{' '}
              <span className="sr-only">about Netlify Functions</span>
            </a>
          </Link>
        </section>

        <section className={styles.step}>
          <h2 className={styles.stepHeading}>Netlify Forms</h2>
          <p>
            Handle user input with a single line of code. Netlify Forms allow
            any HTML form to{' '}
            <strong>
              accept submissions, send notification emails, and trigger custom
              events.
            </strong>
          </p>
          <Link href="/netlify-forms">
            <a className={styles.button}>
              Learn more <span className="sr-only">about Netlify Forms</span>
            </a>
          </Link>
        </section>
      </main>
    </Layout>
  );
}
