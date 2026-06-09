
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Profiles", href: "#profiles" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-slate-950/80
        backdrop-blur-xl
        border-b
        border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#home"
            className="
              text-3xl
              md:text-4xl
              font-extrabold
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            Santhosh
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    relative
                    text-slate-300
                    hover:text-cyan-400
                    transition-all
                    duration-300
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-cyan-400
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download="Santhosh_Resume.pdf"
            className="
              hidden
              md:block
              px-5
              py-2.5
              rounded-xl
              bg-cyan-400
              text-black
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="
              md:hidden
              p-3
              rounded-xl
              border
              border-slate-700
              bg-slate-900/50
              text-white
              hover:border-cyan-400
              hover:text-cyan-400
              transition-all
            "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiX size={32} />
            ) : (
              <HiMenu size={32} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              md:hidden
              bg-slate-900/95
              backdrop-blur-xl
              rounded-2xl
              mb-4
              border
              border-slate-800
              overflow-hidden
            "
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  block
                  px-6
                  py-4
                  text-slate-300
                  hover:bg-slate-800
                  hover:text-cyan-400
                  transition-all
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download="Santhosh_Resume.pdf"
              className="
                block
                m-4
                text-center
                py-3
                rounded-xl
                bg-cyan-400
                text-black
                font-semibold
              "
            >
              📄 Download Resume
            </a>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;