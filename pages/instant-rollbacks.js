import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/instant-rollbacks.module.css';

export default function FunctionsPage() {
  return (
    <Layout
      title="Instant Rollbacks"
      description="Make changes without fear of pager duty! Roll back to a previous deploy instantly with one click."
    >
      <main>
        <div className={styles.wrapper}>
          <Image
            src="/images/corgi.jpg"
            alt="a corgi at a laptop looking scared. caption says “when you realize you made that change in production”"
            height={400}
            width={400}
          />

          <p>
            <a href="https://docs.netlify.com/site-deploys/manage-deploys/#rollbacks">
              Learn about rollbacks in the Netlify docs.
            </a>
          </p>
        </div>
      </main>
    </Layout>
  );
}
