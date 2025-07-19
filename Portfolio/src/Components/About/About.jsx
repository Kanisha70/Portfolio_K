import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import kanisha from '../../assets/kanisha.jpeg';

const About = () => {

    return (
        <section
            id="about"
            className="flex justify-center font-sans mt-16 md:mt-24"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between gap-24 items-center md:w-4/5">
                {/* Left Side */}
                <div className="md:w-1/2 px-8 text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    {/* Name */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        Kanisha Kumari
                    </h2>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight flex items-center gap-2">
                        <span className="text-white">I am a</span>
                        <span className="text-[#8245ec]">
                            <Typewriter
                                options={{
                                    strings: ['Frontend Developer','UI/UX Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h3>

                    {/* About Me Paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        I’m a Frontend Developer skilled in HTML, CSS, JavaScript, and React.js, with a strong focus on creating responsive and user-friendly web interfaces. Currently, I’m pursuing my B.Tech in Computer Science at Quantum University, Roorkee (Uttarakhand). I enjoy turning design ideas into functional websites and constantly learning new web technologies to improve performance and user experience.
                    </p>
                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        DOWNLOAD CV
                    </a>

                </div>
                {/* Right Side */}
                <div className="md:w-1/2 gap-1 flex justify-center md:justify-end">
                    <Tilt
                        className="w-40 h-40 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={kanisha}
                            alt="Kanisha"
                            className="w-full h-full rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default About;
