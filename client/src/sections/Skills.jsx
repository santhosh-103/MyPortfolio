function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 85 },
      ],
    },

    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "React.js", level: 90 },
      ],
    },

    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "REST API", level: 85 },
      ],
    },

    {
      title: "Database",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 80 },
      ],
    },

    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Vercel", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      data-aos="zoom-in"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Expertise
          </p>

          <h2 className="text-6xl font-bold mb-4">
            Skills & Technologies
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies I use to build scalable,
            secure and modern web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-br
                from-slate-900
                to-slate-950
                p-8
                rounded-3xl
                border
                border-slate-800
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                transition-all
                duration-500
              "
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl">
                  {category.icon}
                </span>

                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>
              </div>

              {category.skills.map((skill, i) => (
                <div key={i} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div
                      className="bg-cyan-400 h-3 rounded-full"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;