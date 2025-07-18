import React from 'react';
import { SkillsInfo } from '../../Constants.js';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3" />
        <p className="text-gray-400 mt-6 text-lg font-medium max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through various projects and experiences.
        </p>
      </div>

      {/* Skills Categories - 2 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-[#111827] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg transition-transform hover:scale-[1.02]"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={800}
              scale={1.05}
              transitionSpeed={800}
              gyroscope={true}
              className="w-full"
            >
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-3 bg-[#1f2937] border border-gray-700 rounded-xl text-center hover:shadow-[0_0_15px_#8245ec] transition"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2"
                    />
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
