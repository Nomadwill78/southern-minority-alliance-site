import Head from 'next/head';

const SITE_URL = 'https://www.southernminorityalliance.org';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Reusable SEO component.
 * Usage:
 *   <Seo
 *     title="For Businesses"
 *     description="Business growth support for Black and Brown entrepreneurs in Memphis."
 *     path="/businesses"
 *   />
 */
export default function Seo({
  title,
  description = 'Southern Minority Alliance reduces poverty and closes the racial wealth gap for Black and Brown communities in Memphis and the Mid-South through workforce development, entrepreneurship support, and civic data tools.',
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
}) {
  const fullTitle = title
    ? `${title} | Southern Minority Alliance`
    : 'Southern Minority Alliance — Memphis, TN';
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Head>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Southern Minority Alliance" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NonprofitOrganization',
            name: 'Southern Minority Alliance',
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            description:
              'Reducing poverty and closing the racial wealth gap for Black and Brown communities in Memphis, TN.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Memphis',
              addressRegion: 'TN',
              addressCountry: 'US',
            },
            sameAs: [
              'https://www.facebook.com/southernminorityalliance',
              'https://www.linkedin.com/company/southern-minority-alliance',
              'https://twitter.com/sma_memphis',
            ],
          }),
        }}
      />
    </Head>
  );
}
