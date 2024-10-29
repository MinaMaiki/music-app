import React, { useEffect } from "react";

function Leson({ arr, index, videoFun, videoState, Next, Prev, setIndex, id }) {
  useEffect(() => {
    setIndex(Number(id));
  }, [id]);

  return (
    <div
      className="text-2xl p-4 flex flex-col items-center font-bold gap-8"
      dir="rtl"
    >
      <div
        className="self-start leading-relaxed"
        dangerouslySetInnerHTML={{ __html: arr[index].text }}
      ></div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Next Button on larger screens (left of the image) */}
        <button
          className="hidden sm:block text-start w-fit"
          onClick={Next}
          disabled={index === arr.length - 1}
          style={{
            color: index === arr.length - 1 ? "#666565bd" : "black",
          }}
        >
          <i className="text-4xl fa-solid fa-forward-step"></i>
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
          {/* Display the main image */}
          <img className="max-w-sm mx-2" src={arr[index].img || ""} />
          {/* Display the note image if available */}
          {arr[index].note && (
            <img className="w-72 h-48 mx-2" src={arr[index].note} alt="Note" />
          )}
        </div>

        {/* Previous Button on larger screens (right of the image) */}
        <button
          className="hidden sm:block text-end w-fit"
          onClick={Prev}
          disabled={index === 0}
          style={{
            color: index === 0 ? "#666565bd" : "black",
          }}
        >
          <i className="text-4xl fa-solid fa-backward-step"></i>
        </button>

        {/* On small screens, arrows are placed horizontally under the images */}
        <div className="flex justify-between items-center w-full sm:hidden mt-4">
          {/* Next Button */}
          <button
            className="text-start w-fit"
            onClick={Next}
            disabled={index === arr.length - 1}
            style={{
              color: index === arr.length - 1 ? "#666565bd" : "black",
            }}
          >
            <i className="text-4xl fa-solid fa-forward-step"></i>
          </button>

          {/* Previous Button */}
          <button
            className="text-end w-fit"
            onClick={Prev}
            disabled={index === 0}
            style={{
              color: index === 0 ? "#666565bd" : "black",
            }}
          >
            <i className="text-4xl fa-solid fa-backward-step"></i>
          </button>
        </div>
      </div>

      {/* Video button */}
      {arr[index].vid !== "" && (
        <button
          onClick={() => videoFun(arr[index].id)}
          className="w-fit bg-slate-200 shadow-lg focus:ring-2 px-10 py-2 rounded-lg text-white transition duration-200 ease-in-out"
        >
          🎥
        </button>
      )}

      {videoState[arr[index].id] && (
        <div className="flex justify-center w-full">
          <iframe
            className="w-full max-w-4xl h-[calc(100vw*(9/16))] sm:h-[500px] sm:max-w-2xl"
            src={arr[index].vid}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Leson;
