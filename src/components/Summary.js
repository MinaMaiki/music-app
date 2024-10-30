import React, { useState } from "react";
import { Link } from "react-router-dom";
import { arr } from "../db";

function Summary() {
  const [expandedLesson, setExpandedLesson] = useState(null);

  const toggleLesson = (id) => {
    setExpandedLesson(expandedLesson === id ? null : id);
  };

  const getSubLessons = (startId, endId) => {
    return arr
      .filter(
        (lesson) => Number(lesson.id) >= startId && Number(lesson.id) <= endId
      )
      .map((le) => (
        <Link
          key={le.id}
          to={`/lesons/${le.id}`}
          className="hover:text-blue-400 hover:underline transition-all duration-200 ease-in-out"
        >
          {le.name}
        </Link>
      ));
  };

  const renderLessonLink = (lesson) => {
    const isLink = ["0", "1", "2", "16", "17", "18", "19", "20"].includes(
      lesson.id
    );

    return isLink ? (
      <Link
        to={`/lesons/${lesson.id}`}
        className="rounded-2xl text-white p-4 bg-slate-700 hover:bg-slate-500 transition duration-200 ease-in-out"
      >
        {lesson.name}
      </Link>
    ) : (
      <h1 className="cursor-pointer rounded-2xl text-white p-4 bg-slate-700 hover:bg-slate-500 transition duration-200 ease-in-out">
        {lesson.name}
      </h1>
    );
  };

  return (
    <div dir="rtl" className="gap-4 min-h-screen">
      <div className="flex p-4 gap-8 h-full flex-col">
        {arr
          .filter((lesson) =>
            ["0", "1", "2", "3", "11", "16", "17", "18", "19", "20"].includes(
              lesson.id
            )
          )
          .map((lesson) => (
            <div
              className="flex flex-col"
              key={lesson.id}
              onClick={() => toggleLesson(lesson.id)}
            >
              {renderLessonLink(lesson)}
              {expandedLesson === lesson.id && lesson.id === "3" && (
                <ol className="flex flex-col p-2">{getSubLessons(4, 10)}</ol>
              )}
              {expandedLesson === lesson.id && lesson.id === "11" && (
                <ol className="flex flex-col p-2">{getSubLessons(12, 15)}</ol>
              )}
            </div>
          ))}
      </div>
      <div className="p-8 text-2xl font-bold">
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

export default Summary;
