import { Link, useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { newsDetails } from "../feature/NewsDetail";
import { HiEye } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";

function SingleNews() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:3000/news?id=${id}`
  );
  console.log(data);

  if (loading) {
    return (
      <div className="spinner">
        <span className="loader-sm"></span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
        <img src="/assets/404.jpg" alt="" />
        <Link
          to="/"
          className="px-3 py-1 md:px-4 md:py-2 bg-blue-700 hover:bg-blue-400 text-white rounded-lg"
        >
          Home
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-5xl mx-auto w-full py-5">
      <div className="px-10">
        <Link
          className="mb-4 font-medium flex items-center gap-2 hover:text-orange-400"
          to="/"
        >
          <FaArrowLeftLong />
          <span>Go back</span>
        </Link>
        {data && (
          <>
            {data.map((news: newsDetails) => {
              return (
                <div className="shadow-lg rounded-lg px-5 py-5">
                  <div className="flex items-center gap-4 mb-4">
                    <span>Posted: {news.postedAt}</span>
                    <div className="flex items-center gap-1">
                      <p>
                        <HiEye />
                      </p>
                      <span>{news.seenCounter.toLocaleString("en-Us")}</span>
                    </div>
                  </div>
                  <h1 className="text-xl font-semibold mb-3">{news.title}</h1>
                  <img
                    className="object-cover w-full rounded-lg mb-4 cursor-pointer"
                    src={news.imageUrl}
                    alt={news.title}
                  />
                  <div className="flex flex-col items-start gap-4 mb-5">
                    <h2 className="indent-3">{news.description}</h2>
                    <div className="flex items-center gap-2">
                      {news.xashtag.map((tag) => {
                        return (
                          <p key={tag} className="underline text-blue-500">
                            {tag}
                          </p>
                        );
                      })}
                    </div>
                    <Link className="text-red-600" to={news.newsUrl}>
                      Batafsil ma'lumot saytda
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default SingleNews;
