import { useState } from "react";

export default function Main() {
  const [index, setindex] = useState(0);
  const [disablednext, setdisablednext] = useState(false);
  const [disabledprev, setdisabledprev] = useState(false);

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
    <div className="mt-80">
      <div className="btns flex justify-between">
        <button
          className="ml-8"
          onClick={Prev}
          disabled={index === 0 ? true : false}
        >
          Prev
        </button>
        <p>{arr[index]}</p>
        <button
          className="mr-8"
          onClick={Next}
          disabled={index === arr.length - 1 ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
}
