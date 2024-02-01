import { useEffect } from 'react';
import { init } from '@waline/client';

import 'nextra-theme-blog/style.css';
import '../styles/main.css';

export default function Nextra({ Component, pageProps }) {
  // Add heti class to all articles
  useEffect(() => {
    const hetiScript = document.createElement('script');
    hetiScript.src = '//unpkg.com/heti/umd/heti-addon.min.js';
    document.head.appendChild(hetiScript);
    
    const walineScript = document.createElement('script');
    walineScript.src = '//unpkg.com/@waline/client@v3/dist/waline.js';
    document.head.appendChild(walineScript);

    hetiScript.onload = () => {    
      const articles = document.querySelectorAll('article');
      articles.forEach(article => article.classList.add('heti'));
      const heti = new Heti('.heti');
      heti.autoSpacing();

      init({
          el: '#waline',
          serverURL: 'https://blog-comment-one-snowy.vercel.app',
      });
    };

  }, []);

  return (
      <Component {...pageProps} />
  )
}
