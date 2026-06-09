import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";

function Profiles() {
  const profiles = [
    {
      name: "GitHub",
      icon: <FaGithub size={50} />,
      link: "https://github.com/santhosh-103",
      description: "Explore my projects and open-source contributions.",
    },

    {
      name: "LinkedIn",
      icon: <FaLinkedin size={50} />,
      link: "https://www.linkedin.com/in/santhosh210/",
      description: "Connect with me professionally and view my experience.",
    },

    {
      name: "LeetCode",
      icon: <SiLeetcode size={50} />,
      link: "https://leetcode.com/u/Santhosh-10/",
      description: "400+ problems solved with a 200+ day active streak.",
    },

    {
      name: "HackerRank",
      icon: <SiHackerrank size={50} />,
      link: "https://www.hackerrank.com/profile/santhosh00cse",
      description: "Programming challenges and coding certifications.",
    },
  ];

  return (
    <section
      id="profiles"
      data-aos="zoom-in-up"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Connect
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Coding Profiles
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore my coding journey, projects, problem-solving skills,
            and professional network across various platforms.
          </p>
        </div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className="
                bg-gradient-to-b
                from-slate-900
                to-slate-950
                p-8
                rounded-3xl
                border
                border-slate-800
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                duration-500
                text-center
              "
            >
              <div className="flex justify-center mb-6 text-cyan-400">
                {profile.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {profile.name}
              </h3>

              <p className="text-slate-400 text-sm leading-6 mb-6">
                {profile.description}
              </p>

              <div
                className="
                  inline-block
                  px-5
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  text-cyan-400
                  border
                  border-cyan-500/20
                "
              >
                View Profile →
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Profiles;