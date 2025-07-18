import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
  <div
    key={edu.id}
    className="relative flex flex-col sm:flex-row items-start mb-20"
  >
    {/* Timeline Circle */}
    <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
      <div className="bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center">
        <img
          src={edu.img}
          alt={edu.school}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>

    {/* Left or Right Aligned Card */}
    <div
      className={`
        relative w-full sm:max-w-[47%] p-4 sm:p-6 mt-0
        rounded-2xl border border-white bg-gray-900 backdrop-blur-md
        shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105
        ${index % 2 === 0 ? "sm:mr-auto sm:ml-[calc(50%+12px)]" : "sm:ml-auto sm:mr-[calc(50%+12px)]"}
      `}
    >
      {/* Card Inner Content */}
      <div className="flex items-center space-x-4">
        <div className="w-20 h-16 bg-white rounded-md overflow-hidden">
          <img
            src={edu.img}
            alt={edu.school}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
          <h4 className="text-sm text-gray-300">{edu.school}</h4>
          <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
      <p className="mt-4 text-gray-400">{edu.desc}</p>
    </div>
  </div>
))}



      </div>
    </section>
  );
};

export default Education;