import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-3">
      <h1>BookMarks:{bookmarks.length} </h1>
      <div>
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
