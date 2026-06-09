import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
  "https://myportfolio-backend-rl2r.onrender.com/api/contact",
  formData
);

      alert("✅ Message Sent Successfully");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("❌ Failed to Send Message");
    }
  };

  return (
    <section
      id="contact"
      data-aos="fade-left"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[6px] mb-3">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-slate-400">
            Have a project idea or opportunity?
            Let's connect and build something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-cyan-400 mb-1">
                  📧 Email
                </p>

                <p className="text-slate-300">
                  santhosh00cse@gmail.com
                </p>
              </div>

              <div>
                <p className="text-cyan-400 mb-1">
                  📱 Phone
                </p>

                <p className="text-slate-300">
                  +91 81481 88427
                </p>
              </div>

              <div>
                <p className="text-cyan-400 mb-1">
                  📍 Location
                </p>

                <p className="text-slate-300">
                  Coimbatore, Tamil Nadu
                </p>
              </div>

              <div>
                <p className="text-cyan-400 mb-1">
                  💼 Availability
                </p>

                <p className="text-green-400">
                  Open for Opportunities
                </p>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit}
            className="
              bg-slate-900
              p-8
              rounded-3xl
              border
              border-slate-800
            "
          >
            <div className="mb-5">
              <label className="block mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="
                  w-full
                  p-4
                  bg-slate-950
                  rounded-xl
                  border
                  border-slate-700
                  focus:outline-none
                  focus:border-cyan-400
                "
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="
                  w-full
                  p-4
                  bg-slate-950
                  rounded-xl
                  border
                  border-slate-700
                  focus:outline-none
                  focus:border-cyan-400
                "
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="
                  w-full
                  p-4
                  bg-slate-950
                  rounded-xl
                  border
                  border-slate-700
                  focus:outline-none
                  focus:border-cyan-400
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                bg-cyan-400
                text-black
                py-4
                rounded-xl
                font-bold
                hover:scale-105
                transition-all
              "
            >
              🚀 Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;