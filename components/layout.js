import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/layout.module.css';

export default function Layout({ title, description, home, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header className={styles.container}>
        <h1 className={styles.heading}>{title}</h1>

        <p className={styles.description}>{description}</p>

        {home !== true && (
          <p>
            <Link href="/">
              <a>&larr; back to home</a>
            </Link>
          </p>
        )}
      </header>

      {children}

      <footer className={styles.footer}>
        <a href="https://www.netlify.com/?utm_source=github&utm_medium=feature-tour-repo&utm_campaign=devex-jl">
          created with{' '}
          <span className={styles.heart} role="img" aria-label="love">
            <Image
              src="https://res.cloudinary.com/jlengstorf/image/upload/f_auto,q_auto,w_50/v1596146333/netlify/netliheart.png"
              alt="a heart with the Netlify logo pattern in it"
              height={17}
              width={17}
            />
          </span>{' '}
          by the Netlify team
        </a>
      </footer>
    </>
  );
}
