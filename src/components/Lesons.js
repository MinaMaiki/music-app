import { useState } from "react";
import { arr } from "../db";
import { Link, useParams } from "react-router-dom";
import Leson from "./Leson";

export default function Lesons() {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const [videoState, setVideoState] = useState({});

  function Next() {
    setIndex(index + 1);
  }

  function Prev() {
    setIndex(index - 1);
  }

  const videoFun = (id) => {
    setVideoState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className="flex justify-between p-6 flex-col min-h-screen">
      <p className="text-center text-3xl mb-4 ">{arr[index].name}</p>
      <Leson
        arr={arr}
        index={index}
        // videoFun={videoFun}
        // videoState={videoState}
        Next={Next}
        Prev={Prev}
        setIndex={setIndex}
        id={id}
      />

      <div className="p-4 text-end mt-6 text-2xl font-bold">
        <Link
          className="shadow-lg bg-slate-500 hover:bg-slate-600 focus:ring-2 px-10 py-2 rounded-lg text-white transition duration-200 ease-in-out"
          to={"/Links"}
        >
          القائمة الرئيسية
        </Link>
      </div>
    </div>
  );
}
