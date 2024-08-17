import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { postAPI } from "@service/posts";
import { Loader } from "@/components/ui";

const postItem = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [data, setData] = useState({});
  const [load, setLoad] = useState(true);

  async function fetchData() {
    const response = await postAPI.getById(id);
    setData(response.data);
    setLoad(false);
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  if (load) {
    return <Loader />;
  }

  return (
    <div className="p-4 rounded border">
      <div className="flex justify-between">
        <h2 className="text-slate-900 text-2xl">{data.title}</h2>
        <button onClick={()=>navigate(-1)} className="border bg-indigo-950 text-white rounded px-4 py-1 hover:bg-indigo-900 duration-150 active:bg-slate-400">
          Go Back
        </button>
      </div>
      <p>{data.body}</p>
    </div>
  );
};

export default postItem;
