function Projects() {
  const projects = [
    {
      title: "Shopzy - MERN E-Commerce Platform",
      description:
        "A full-stack ecommerce platform with secure JWT authentication, product management, shopping cart, order processing, and responsive user experience.",
      tech: "React, Node.js, Express.js, MongoDB, JWT",
      live: "https://shopzy-puce.vercel.app/",
      github: "https://github.com/santhosh-103/Shopzy",
    },

    {
      title: "IntervoAI - AI Mock Interview Platform",
      description:
        "An AI-powered interview preparation platform that generates mock interview questions, provides intelligent feedback, and helps candidates improve technical interview performance.",
      tech: "React, Node.js, Express.js, MongoDB, Gemini API",
      live: "https://intervo-ai-tawny.vercel.app/",
      github: "https://github.com/santhosh-103/IntervoAI",
    },

    {
      title: "EcoRAIZ - Smart Planting Platform",
      description:
        "A MERN stack environmental sustainability platform that enables users to participate in tree plantation initiatives, track planting activities, and contribute towards greener ecosystems.",
      tech: "React, Node.js, Express.js, MongoDB",
      live: "https://ecoraiz.netlify.app/",
      github:
        "https://github.com/santhosh-103/ECORAIZ-The_Smart_Planting",
    },
    {
  title: "Instagram Clone",
  description:
    "A fully functional Instagram-inspired social media frontend built with React.js and Vite. Features stories, posts, profile editing, follower management, responsive UI, and JSON Server API integration.",
  tech: "React, Vite, JavaScript, CSS, JSON Server",
  live: "https://instagram-clone-lime-five.vercel.app",
  github: "https://github.com/santhosh-103/Instagram_Clone",
},

    {
      title: "QuietConvert",
      description:
        "A secure and privacy-focused document conversion tool designed for fast file conversion with a clean and user-friendly experience.",
      tech: "HTML, CSS, JavaScript",
      live: "https://quietconver.netlify.app/",
      github: "https://github.com/santhosh-103/QuietConvert",
    },
  ];

  return (
    <section
      id="projects"
        data-aos="fade-up"
      className="min-h-screen bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-world applications built using MERN Stack,
            AI technologies and modern web development practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-b
                from-slate-950
                to-slate-900
                p-8
                rounded-3xl
                border
                border-slate-800
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
                transition-all
                duration-500
              "
            >
              {/* Top Section */}
              <div className="flex justify-between items-start mb-6">
                <span
                  className="
                    bg-cyan-500/10
                    text-cyan-400
                    text-xs
                    px-4
                    py-2
                    rounded-full
                    border
                    border-cyan-500/20
                  "
                >
                  Featured Project
                </span>

                <span className="text-slate-700 text-4xl font-extrabold">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold leading-tight mb-5">
                {project.title}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.split(", ").map((tech, i) => (
                  <span
                    key={i}
                    className="
                      bg-slate-800
                      text-slate-300
                      text-sm
                      px-3
                      py-1
                      rounded-full
                      hover:bg-cyan-500/20
                      hover:text-cyan-300
                      transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-7 mb-8">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1
                    text-center
                    bg-cyan-400
                    text-black
                    py-3
                    rounded-xl
                    font-semibold
                    hover:scale-105
                    hover:shadow-lg
                    transition-all
                    duration-300
                  "
                >
                  🚀 Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1
                    text-center
                    border
                    border-slate-600
                    py-3
                    rounded-xl
                    hover:bg-white
                    hover:text-black
                    transition-all
                    duration-300
                  "
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;