import React from "react";
import { experiences } from "../../Constants.js";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[2px] h-full bg-white/30 z-0 hidden sm:block" />
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative mb-20 flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
          >
            {/* Timeline Circle with Logo */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-[#8245ec] flex justify-center items-center shadow-lg">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>


            {/* Experience Card */}
            <div
              className={`relative bg-gray-900 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] w-full sm:max-w-md z-10 ${index % 2 === 0
                  ? "sm:ml-auto sm:pl-12 sm:text-right"
                  : "sm:mr-auto sm:pr-12 sm:text-left"
                }`}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <h4 className="text-md sm:text-sm text-gray-300">
                {experience.company}
              </h4>
              <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white mb-1">Skills:</h5>
                <ul className="flex flex-wrap">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec] text-white px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
