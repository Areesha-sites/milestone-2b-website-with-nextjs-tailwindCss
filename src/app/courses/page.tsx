"use client";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import CourseCard from "../components/CourseCard";
import PopularCourses from "../components/PopularCourses";
import Testimonial from "../components/Testimonial";
const Courses = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <section>
      <div className="w-full mt-20 bg-gradient-to-tl from-purple-200 to-purple-300 pl-2 pr-2 sm:pl-6 sm:pr-6">
        <div className="flex items-center py-10 flex-col ">
          <p className="inline-block rounded-full py-1 px-3 text-purple-700 font-bold bg-purple-100 shadow-lg shadow-purple-300">
            Top Class Courses
          </p>
          <h1 className="font-semibold text-[4rem] leading-[66px] py-4 text-gray-900 xl:text-[4rem] lg:text-[4rem]  w-50%">
            Explore the world best
            <span className="text-purple-700 flex">
              Courses <FaGlobe size={30} className="mt-3 ml-2" />
            </span>
          </h1>
          <p className="max-w-lg mx-auto text-gray-950 md:text-black">
            Discover top courses from leading experts around the world. Expand
            your knowledge gain new skills and take your career to the next
            level with our comprehensive and flexible learning programs
            available to you no matter where you are ☆
          </p>

          <nav className="flex space-x-3 mt-6" role="tablist">
            <button
              className={`text-white bg-purple-700 hover:bg-purple-100 focus:outline-none hover:text-purple-700 focus:ring-purple-300 font-medium transition-all hover:hover:scale-110 rounded-full text-sm px-2 text-center mb-2 py-1.5 dark:focus:ring-purple-900 ${
                activeTab === 1 ? "active:text-gray-800" : ""
              }`}
              role="tab"
              aria-selected={activeTab === 1 ? "true" : "false"}
              aria-controls="tab-content-1"
              id="tab-1"
              onClick={() => handleTabClick(1)}
            >
              All Courses
            </button>
            <button
              className={`text-white bg-purple-700 transition-all hover:hover:scale-110 py-1.5 hover:text-purple-700  hover:bg-purple-100 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-2 text-center mb-2 dark:focus:ring-purple-900 ${
                activeTab === 2 ? "active:text-gray-800" : ""
              }`}
              role="tab"
              aria-selected={activeTab === 2 ? "true" : "false"}
              aria-controls="tab-content-2"
              id="tab-2"
              onClick={() => handleTabClick(2)}
            >
              Popular Courses
            </button>
            <button
              className={`text-white bg-purple-700 transition-all hover:hover:scale-110 py-1.5 hover:text-purple-700 hover:bg-purple-100 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-2 text-center mb-2 dark:focus:ring-purple-900 ${
                activeTab === 3 ? "active:text-gray-800" : ""
              }`}
              role="tab"
              aria-selected={activeTab === 3 ? "true" : "false"}
              aria-controls="tab-content-3"
              id="tab-3"
              onClick={() => handleTabClick(3)}
            >
              Testimonial
            </button>
          </nav>

          <div className="mt-6">
            <div
              id="tab-content-1"
              role="tabpanel"
              aria-labelledby="tab-1"
              className={activeTab === 1 ? "" : "hidden"}
            >
              <CourseCard />
            </div>
            <div
              id="tab-content-2"
              role="tabpanel"
              aria-labelledby="tab-2"
              className={activeTab === 2 ? "" : "hidden"}
            >
              <PopularCourses />
            </div>
            <div
              id="tab-content-3"
              role="tabpanel"
              aria-labelledby="tab-3"
              className={activeTab === 3 ? "" : "hidden"}
            >
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
