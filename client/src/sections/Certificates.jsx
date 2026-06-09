function Certificates() {
  const certificates = [
    {
      title: "Java Programming",
      provider: "Udemy",
      description:
        "Completed comprehensive Java programming training covering OOP concepts, collections, exception handling, and problem-solving techniques.",
      badge: "Java",
      link: "https://www.linkedin.com/posts/santhosh210_java-udemy-programming-activity-7370101447075475457-CiRH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUqCA4Bk1-zSVDiz6nIswHKxljT1Cq9k7c",
    },

    {
      title: "Web Development",
      provider: "Udemy",
      description:
        "Learned modern web development concepts including HTML, CSS, JavaScript, responsive design, and frontend best practices.",
      badge: "Web Dev",
      link: "https://www.linkedin.com/posts/santhosh210_webdesign-html-css-activity-7360649862205313025-4hKY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUqCA4Bk1-zSVDiz6nIswHKxljT1Cq9k7c",
    },

    {
      title: "Full Stack Web Development",
      provider: "STARK Institutions",
      description:
        "Worked on real-world web applications, UI/UX improvements, debugging, responsiveness, performance optimization, and frontend development.",
      badge: "Internship",
      link: "https://www.linkedin.com/posts/santhosh210_internship-certificate-ugcPost-7461778730315661312-yFLx/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUqCA4Bk1-zSVDiz6nIswHKxljT1Cq9k7c",
    },
  ];

  return (
    <section
      id="certificates"
      data-aos="fade-up"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Achievements
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Certifications & Internship
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Certifications and practical experience that strengthened my
            programming, web development, and problem-solving skills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-br
                from-slate-950
                to-slate-900
                p-8
                rounded-3xl
                border
                border-slate-800
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                duration-500
              "
            >
              <div className="flex justify-between items-center mb-6">

                <span
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-500/10
                    text-cyan-400
                    text-sm
                    border
                    border-cyan-500/20
                  "
                >
                  {cert.badge}
                </span>

                <span className="text-slate-700 text-4xl font-bold">
                  0{index + 1}
                </span>

              </div>

              <h3 className="text-2xl font-bold mb-3">
                {cert.title}
              </h3>

              <p className="text-cyan-400 mb-4">
                {cert.provider}
              </p>

              <p className="text-slate-400 leading-7 mb-8">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block
                  w-full
                  text-center
                  py-3
                  rounded-xl
                  bg-cyan-400
                  text-black
                  font-semibold
                  hover:scale-105
                  transition-all
                "
              >
                📜 View Certificate
              </a>
            </div>
          ))}

        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <div
            className="
              bg-slate-950
              p-6
              rounded-2xl
              border
              border-slate-800
              text-center
              hover:border-cyan-400
              transition-all
            "
          >
            <h3 className="text-4xl font-bold text-cyan-400">
              400+
            </h3>

            <p className="text-slate-400 mt-2">
              LeetCode Problems
            </p>
          </div>

          <div
            className="
              bg-slate-950
              p-6
              rounded-2xl
              border
              border-slate-800
              text-center
              hover:border-cyan-400
              transition-all
            "
          >
            <h3 className="text-4xl font-bold text-cyan-400">
              200+
            </h3>

            <p className="text-slate-400 mt-2">
              Day Streak
            </p>
          </div>

          <div
            className="
              bg-slate-950
              p-6
              rounded-2xl
              border
              border-slate-800
              text-center
              hover:border-cyan-400
              transition-all
            "
          >
            <h3 className="text-4xl font-bold text-cyan-400">
              4+
            </h3>

            <p className="text-slate-400 mt-2">
              Major Projects
            </p>
          </div>

          <div
            className="
              bg-slate-950
              p-6
              rounded-2xl
              border
              border-slate-800
              text-center
              hover:border-cyan-400
              transition-all
            "
          >
            <h3 className="text-4xl font-bold text-cyan-400">
              8.1
            </h3>

            <p className="text-slate-400 mt-2">
              CGPA
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Certificates;