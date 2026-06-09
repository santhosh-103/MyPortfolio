import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-3">
          Santhosh Kumar S
        </h2>

        <p className="text-slate-400 mb-6">
          MERN Stack Developer | Java Developer | Problem Solver
        </p>

        <div className="flex justify-center gap-6 mb-6">

          <a
            href="https://github.com/santhosh-103"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/santhosh210/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://leetcode.com/u/Santhosh-10/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <SiLeetcode size={28} />
          </a>

          <a
            href="https://www.hackerrank.com/profile/santhosh00cse"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <SiHackerrank size={28} />
          </a>

        </div>

        <p className="text-slate-500 text-sm">
          © 2026 Santhosh Kumar S. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;