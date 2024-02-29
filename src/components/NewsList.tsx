import { Link } from "react-router-dom";
import { newsDetails } from "../feature/NewsDetail";
import { HiEye } from "react-icons/hi";

type newsInfo = {
  news: newsDetails;
};

function NewsList({ news }: newsInfo) {
  return (
    <div className="shadow-lg rounded-lg px-5 py-5">
      <div className="flex items-center gap-3 mb-4">
        <p><HiEye /></p>
        <span>{news.seenCounter.toLocaleString('en-Us')}</span>
      </div>
      <h1 className="text-xl font-semibold mb-3">{news.title}</h1>
      <img
        className="object-cover w-full h-[170px] rounded-lg mb-4 cursor-pointer"
        src={news.imageUrl}
        alt={news.title}
      />
      <div className="flex flex-col items-start gap-4 mb-5">
        <h2 className="line-clamp-5 indent-2">{news.description}</h2>
        <div className="flex items-center gap-2">
          {news.xashtag.map((tag) => {
            return <p key={tag} className="underline text-blue-500">{tag}</p>;
          })}
        </div>
      </div>
      <div></div>
      <Link
        to={`/singlenews/${news.id}`}
        className="gap-2 px-4 py-3 font-medium bg-blue-700 hover:bg-blue-400 text-white rounded-lg"
      >
        Davomi
      </Link>
    </div>
  );
}

export default NewsList;
