import { postAPI } from "@service/posts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { Loader } from "@ui";

const index = () => {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await postAPI.getALl();
      setPosts(response.data);
      setLoad(false);
    }
    getData();
  });

  if (load) {
    return <Loader />;
  }

  return (
    <div>
      <ul>
        {posts &&
          posts.map((post) => (
            <li className="border rounded p-2 m-2 relative" key={post.id}>
              <div className="p-2 w-[70%]">
                <h1 className="font-bold text-xl">
                  {post.id}: {post.title}
                </h1>
                <p>{post.body}</p>
              </div>
              <Link to={`/posts/${post.id}`}>
                <button className="duration-150 shadow-lg active:shadow-none bg-indigo-400 px-4 py-2 rounded text-white absolute right-4 top-2 hover:bg-indigo-500 active:bg-slate-500">
                  Read More
                </button>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default index;
