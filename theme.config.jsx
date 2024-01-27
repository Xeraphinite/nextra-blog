import { Cards, Card } from 'nextra/components';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { init } from '@waline/client';

const YEAR = new Date().getFullYear();
 //   <>
  //     <div id="waline"></div>
  //     <link
  //       rel="stylesheet"
  //       href="https://unpkg.com/@waline/client@v3/dist/waline.css"
  //     />
  //  </>

// Waline.init({
//   el: '#waline',
//   serverURL: 'https://blog-comment-one-snowy.vercel.app',
// });

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Xeraphinite.
      {/* FIXME: RSS Feed */}
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  readMore: null,
  postFooter: (
    '.'
  ),
  darkMode: "class",
  navigation: {
    prev: true,
    next: true,
  }
}
