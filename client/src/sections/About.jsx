function About() {
  return (
    <section
      id="about"
      data-aos="fade-right"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[6px] mb-3">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Who Am I?
          </h2>
        </div>

        {/* About Card */}
        <div
          className="
            bg-slate-950
            p-10
            rounded-3xl
            border
            border-slate-800
            hover:border-cyan-400
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            transition-all
            duration-500
          "
        >
          <p className="text-lg text-slate-300 leading-9">
            I'm{" "}
            <span className="text-cyan-400 font-semibold">
              Santhosh Kumar S
            </span>
            , a passionate Full Stack Developer specializing in the{" "}
            <span className="text-cyan-400 font-semibold">
              MERN Stack (MongoDB, Express.js, React.js, Node.js)
            </span>
            . I enjoy building scalable web applications, solving real-world
            problems, and continuously improving my development skills.
          </p>

          <p className="text-lg text-slate-300 leading-9 mt-6">
            I have developed and deployed projects such as{" "}
            <span className="text-cyan-400 font-semibold">
              Shopzy
            </span>
            , a full-stack e-commerce platform, and{" "}
            <span className="text-cyan-400 font-semibold">
              IntervoAI
            </span>
            , an AI-powered mock interview platform featuring voice, video,
            coding assessments, analytics, and performance tracking.
          </p>

          <p className="text-lg text-slate-300 leading-9 mt-6">
            Alongside development, I actively practice Data Structures and
            Algorithms using Java and have solved{" "}
            <span className="text-cyan-400 font-semibold">
              400+ LeetCode Problems
            </span>{" "}
            with a{" "}
            <span className="text-cyan-400 font-semibold">
              200+ Day Active Streak
            </span>
            , strengthening my problem-solving and analytical thinking skills.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">

            <div className="bg-slate-900 p-6 rounded-2xl text-center border border-slate-800 hover:border-cyan-400 transition-all">
              <h3 className="text-4xl font-bold text-cyan-400">
                400+
              </h3>
              <p className="text-slate-400 mt-2">
                LeetCode Problems
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-center border border-slate-800 hover:border-cyan-400 transition-all">
              <h3 className="text-4xl font-bold text-cyan-400">
                5+
              </h3>
              <p className="text-slate-400 mt-2">
                Major Projects
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-center border border-slate-800 hover:border-cyan-400 transition-all">
              <h3 className="text-4xl font-bold text-cyan-400">
                MERN
              </h3>
              <p className="text-slate-400 mt-2">
                Full Stack
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-center border border-slate-800 hover:border-cyan-400 transition-all">
              <h3 className="text-4xl font-bold text-cyan-400">
                8.1
              </h3>
              <p className="text-slate-400 mt-2">
                CGPA
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;