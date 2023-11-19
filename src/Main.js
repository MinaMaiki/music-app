import { useState } from "react";

export default function Main() {
  const [index, setindex] = useState(0);

  const arr = ["start", "maiki", "Mina", "Bero", "kkok", "asdq", "mor", "End"];
  function Next() {
    setindex(index + 1);
    console.log(index);
  }

  function Prev(e) {
    setindex(index - 1);
    console.log(index);
  }

  return (
    <div className="">
      <div className="btns flex justify-between">
        <button
          className="ml-8 text-start"
          onClick={Prev}
          disabled={index === 0 ? true : false}
          style={{
            color: index === 0 ? "gray" : "#34A8DF",
          }}
        >
          <i className="text-4xl fa-solid fa-backward-step"></i>
        </button>
        <div className="text-center">{arr[index]}</div>
        <button
          className="mr-8 text-end"
          onClick={Next}
          disabled={index === arr.length - 1 ? true : false}
          style={{
            color: index === arr.length - 1 ? "gray" : "#34A8DF",
          }}
        >
          <i className="text-4xl fa-solid fa-forward-step"></i>
        </button>
      </div>
    </div>
  );
}
