import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";
import NewsList from "../components/NewsList";
import { newsDetails } from "../feature/NewsDetail";

function Home() {
  const { data, error, loading } = useFetch("http://localhost:3000/news");

  if (loading) {
    return (
      <div className="spinner">
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
        <img src="/assets/404.jpg" alt="" />
        <Link to="/" className="px-3 py-1 md:px-4 md:py-2 bg-blue-700 hover:bg-blue-400 text-white rounded-lg" >
          Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10">
      {Array.isArray(data) && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item: newsDetails) => {
            return <NewsList key={item.id} news={item} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default Home;
