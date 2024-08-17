import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({ blog, handleAddToBookmarks, handleReadingTime }) => {
  const {
    title,
    id,
    cover_img,
    author,
    posted_date,
    reading_time,
    hashTags,
    author_img,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover_img} alt={title} />
      <div className="flex justify-between mb-4">
        <div className="flex flex-col">
          <img className="w-14 rounded-md" src={author_img} alt="" />
          <h3 className="text-2xl ml-6">{author}</h3>
          <p>{posted_date}</p>
        </div>
        <div>
          <span> {reading_time} min read </span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="ml-2 text-2xl text-red-600"
          >
            <FaRegBookmark />
          </button>
        </div>
      </div>
      <h1 className="text-3xl">{title}</h1>
      <p>
        {hashTags.map((hashTag, index) => (
          <span key={index}>
            {" "}
            <a href="">#{hashTag}</a>{" "}
          </span>
        ))}
      </p>
      <button
        className="btn bg-green-600"
        onClick={() => handleReadingTime(reading_time, id)}
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
