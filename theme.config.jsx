import Comments from './components/Comments.jsx';
import Footer from './components/Footer.jsx';
import PostFooter from './components/PostFooter.jsx';

export default {
  header: (
    '.'
  ),
  postFooter: (
    <>
      <PostFooter />
      <Comments />
    </>
  ),
  footer: (
    <Footer />
  ),
  darkMode: true,
  readMore: (
    'Read more ->'
  ),
}
