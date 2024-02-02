import Comments from './components/Comments.jsx';
import Footer from './components/Footer.jsx';
import PostFooter from './components/PostFooter.jsx';

export default {
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
    <a className="text-primary-500 hover:underline hover:text-primary-700 hover:shadow-md transition-colors duration-300" href="#">
      Read more
    </a>
  ),
}
