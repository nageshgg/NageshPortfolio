import { blogs } from '../data/content.js';

const BlogCard = ({ blog }) => (
  <div className="single-blog" key={blog.title}>
    <a href={blog.link} title={blog.title} target="_blank" rel="noopener">
      <div className="blog-img">
        <img src={blog.image} alt={blog.title} />
      </div>
    </a>
    <div className="blog-text">
      <h4>{blog.title}</h4>
      <p>{blog.date}</p>
    </div>
  </div>
);

const BlogSection = () => (
  <section className="blog-section" id="blogs">
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 col-md-6 left-blog-text mobile-text-center">
          <h3>Blogs</h3>
        </div>
        <div className="col-lg-3 col-md-6"></div>
      </div>
    </div>
    <div className="horizontal-scroll-container-3">
      <div className="sticky-wrapper">
        <div className="relative-use">
          <div className="all-blog">
            {blogs.map((blog) => (
              <BlogCard blog={blog} key={blog.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogSection;

