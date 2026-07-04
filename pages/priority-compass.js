import Head from 'next/head';
import styles from '../styles/PriorityCompass.module.css';

export default function PriorityCompass() {
  return (
    <>
      <Head>
        <title>Priority Compass | Southern Minority Alliance</title>
        <meta name="description" content="Explore neighborhood-level economic data for Memphis and help set the community agenda for closing the racial wealth gap." />
      </Head>

      <main className={styles.page}>
        {/* Hero Banner */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.label}>Southern Minority Alliance &middot; Memphis, TN</p>
            <h1 className={styles.title}>Priority Compass</h1>
            <p className={styles.subtitle}>
              One city. Two economies. Explore the evidence &mdash; block by block &mdash;
              and help set the agenda to close the racial wealth gap in Memphis.
            </p>
            <a
              href="#dashboard"
              className={styles.ctaBtn}
            >
              Launch the Dashboard &darr;
            </a>
          </div>
        </section>

        {/* Context Strip */}
        <section className={styles.contextStrip}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>13</span>
            <span className={styles.statLabel}>fewer years of life &mdash; Orange Mound vs. Germantown</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>$42K</span>
            <span className={styles.statLabel}>wider racial wealth gap since 2015 (+34%)</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>41%</span>
            <span className={styles.statLabel}>of Orange Mound residents live below the poverty line</span>
          </div>
        </section>

        {/* Dashboard Embed */}
        <section id="dashboard" className={styles.dashboardSection}>
          <div className={styles.dashboardHeader}>
            <h2>Explore the Data. Build Your Agenda.</h2>
            <p>
              Walk the evidence, weigh what your community values, and build a ranked agenda
              the people can take to City Hall.
            </p>
          </div>
          <div className={styles.iframeWrapper}>
            <iframe
              src="https://sma-priori-dc68a4df-damonwill78.wix-site-host.com/"
              title="Priority Compass &mdash; Southern Minority Alliance Community Data Dashboard"
              allowFullScreen
              className={styles.iframe}
            />
          </div>
          <p className={styles.iframeNote}>
            Having trouble viewing?{' '}
            <a
              href="https://sma-priori-dc68a4df-damonwill78.wix-site-host.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Priority Compass in a new tab &rarr;
            </a>
          </p>
        </section>

        {/* CTA Footer */}
        <section className={styles.ctaFooter}>
          <h2>Ready to take action?</h2>
          <p>
            Southern Minority Alliance connects Memphis residents, entrepreneurs, and workers
            to programs that close the wealth gap for good.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/businesses" className={styles.primaryBtn}>Support for Businesses</a>
            <a href="/learners" className={styles.secondaryBtn}>Tech Bootcamp for Learners</a>
            <a href="/contact" className={styles.secondaryBtn}>Partner With Us</a>
          </div>
        </section>
      </main>
    </>
  );
}
