import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'
import Link from 'next/link'

export default function Document() {
  const meta = {
    title: 'Xeraphinite\'s Study Record',
    description: '日拱一卒，两卒也行',
    site_name: 'Xeraphinite\'s Study Record',
    // image: ''
  } 

  return (
    <Html>
      <Head>
        {/* meta-tags */}
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* Heti Configurations */}
        <Link rel="stylesheet" href="//unpkg.com/heti/umd/heti.min.css"></Link>      
        <Script src="//unpkg.com/heti/umd/heti-addon.min.js"></Script>
        <Script src="../script/heti.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
