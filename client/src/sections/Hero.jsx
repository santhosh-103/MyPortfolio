import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";

import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="
        relative
        min-h-screen
        bg-slate-950
        text-white
        flex
        items-center
        justify-center
        px-6
        pt-24
        overflow-hidden
      "
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            w-72
            h-72
            bg-cyan-500/10
            rounded-full
            blur-3xl
            top-20
            left-20
            animate-pulse
          "
        ></div>

        <div
          className="
            absolute
            w-72
            h-72
            bg-blue-500/10
            rounded-full
            blur-3xl
            bottom-20
            right-20
            animate-pulse
          "
        ></div>

        <div
          className="
            absolute
            w-96
            h-96
            bg-purple-500/5
            rounded-full
            blur-3xl
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
        ></div>

      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Availability Badge */}
        <div className="mb-6">
          <span
            className="
              px-5
              py-2
              rounded-full
              bg-green-500/10
              text-green-400
              border
              border-green-500/20
            "
          >
            🟢 Open to Opportunities
          </span>
        </div>

        {/* Intro */}
        <h2 className="text-2xl text-slate-400 mb-4">
          👋 Hello, I'm
        </h2>

        {/* Name */}
        <h1
          className="
            text-6xl
            md:text-8xl
            font-extrabold
            mb-4
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
          "
        >
          Santhosh Kumar S
        </h1>

        {/* Type Animation */}
        <div className="mb-8 min-h-[60px]">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer 🚀",
              2000,
              "400+ LeetCode Problems Solved 🔥",
              2000,
              "Java Developer ☕",
              2000,
              "AI Enthusiast 🤖",
              2000,
              "Problem Solver 🧠",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="
              text-2xl
              md:text-3xl
              font-bold
              text-cyan-400
            "
          />
        </div>

        {/* Description */}
        <p
          className="
            text-slate-400
            max-w-3xl
            mx-auto
            text-lg
            leading-8
            mb-12
          "
        >
          Passionate Full Stack Developer specializing in
          MERN Stack development. Experienced in building
          scalable web applications, AI-powered platforms,
          REST APIs, and solving 400+ Data Structures &
          Algorithms problems using Java.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-5 mb-12">

          <div className="bg-slate-900/80 backdrop-blur-sm px-8 py-5 rounded-2xl border border-slate-800 hover:border-cyan-400 transition-all">
            <h3 className="text-3xl font-bold text-cyan-400">
              400+
            </h3>
            <p className="text-slate-400 text-sm">
              LeetCode Problems
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-sm px-8 py-5 rounded-2xl border border-slate-800 hover:border-cyan-400 transition-all">
            <h3 className="text-3xl font-bold text-cyan-400">
              200+
            </h3>
            <p className="text-slate-400 text-sm">
              Day Streak
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-sm px-8 py-5 rounded-2xl border border-slate-800 hover:border-cyan-400 transition-all">
            <h3 className="text-3xl font-bold text-cyan-400">
              4+
            </h3>
            <p className="text-slate-400 text-sm">
              Major Projects
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-sm px-8 py-5 rounded-2xl border border-slate-800 hover:border-cyan-400 transition-all">
            <h3 className="text-3xl font-bold text-cyan-400">
              8.1
            </h3>
            <p className="text-slate-400 text-sm">
              CGPA
            </p>
          </div>

        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-12">

          <a
            href="https://github.com/santhosh-103"
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-cyan-400
              hover:scale-125
              transition-all
              duration-300
            "
          >
            <FaGithub size={35} />
          </a>

          <a
            href="https://www.linkedin.com/in/santhosh210/"
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-cyan-400
              hover:scale-125
              transition-all
              duration-300
            "
          >
            <FaLinkedin size={35} />
          </a>

          <a
            href="https://leetcode.com/u/Santhosh-10/"
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-cyan-400
              hover:scale-125
              transition-all
              duration-300
            "
          >
            <SiLeetcode size={35} />
          </a>

          <a
            href="https://www.hackerrank.com/profile/santhosh00cse"
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-cyan-400
              hover:scale-125
              transition-all
              duration-300
            "
          >
            <SiHackerrank size={35} />
          </a>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="/resume.pdf"
            download="Santhosh_Resume.pdf"
            className="
              bg-cyan-400
              text-black
              px-8
              py-4
              rounded-xl
              font-bold
              hover:scale-105
              transition-all
            "
          >
            📄 Download Resume
          </a>

          <a
            href="#projects"
            className="
              border
              border-slate-700
              px-8
              py-4
              rounded-xl
              hover:bg-white
              hover:text-black
              transition-all
            "
          >
            🚀 View Projects
          </a>

          <a
            href="#contact"
            className="
              border
              border-slate-700
              px-8
              py-4
              rounded-xl
              hover:bg-white
              hover:text-black
              transition-all
            "
          >
            📩 Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;