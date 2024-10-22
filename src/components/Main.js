import { useState } from "react";
import { arr } from "../db";
export default function Main() {
  const [index, setindex] = useState(0);

  function Next() {
    setindex(index + 1);
  }

  function Prev(e) {
    setindex(index - 1);
  }

  console.log();
  return (
    <div className=" flex justify-between flex-col  min-h-screen">
      <div className="text-2xl flex items-center justify-center font-bold">
        {/* {arr[index].text === "" ? arr[index].url : arr[index].text} */}
        {arr.map((ele, i) =>
          i === index ? (ele.text === "" ? ele.vid : ele.text) : ""
        )}
      </div>
      <div className="flex justify-between">
        <button
          className="text-start p-4"
          onClick={Prev}
          disabled={index === 0 ? true : false}
          style={{
            color: index === 0 ? "#666565bd" : "black",
          }}
        >
          <i className="text-4xl fa-solid fa-backward-step "></i>
        </button>
        <button
          className="text-end p-4"
          onClick={Next}
          disabled={index === arr.length - 1 ? true : false}
          style={{
            color: index === arr.length - 1 ? "#666565bd" : "black",
          }}
        >
          <i className="text-4xl fa-solid fa-forward-step btn"></i>
        </button>
      </div>
    </div>
  );
}
