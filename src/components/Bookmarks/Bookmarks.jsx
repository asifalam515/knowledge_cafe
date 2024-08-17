import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-3">
      <div>
        <h3 className="text-4xl"> Reading Time: {readingTime} </h3>
      </div>
      <h1>BookMarks:{bookmarks.length} </h1>
      <div>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark bookmark={bookmark} key={idx}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
