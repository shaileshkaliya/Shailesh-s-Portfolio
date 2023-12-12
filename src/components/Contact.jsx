import React, { useRef, useState } from "react";
import EarthCanvas from "./canvas/Earth";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_61mm0uw',
        'template_yb78v8j',
        {
          from_name: form.name,
          to_name: "Shailesh Kaliya",
          from_email: form.email,
          to_email: "shaileshkaliya124@gmail.com",
          message: form.message,
        },
        'hgdy7Cuj6bHyfj9eU'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="h-screen flex justify-center flex-col-reverse lg:gap-44 items-center lg:flex-row gap-8 overflow-hidden"
      id="contact"
    >
      <motion.div
        className="bg-black-100 h-3/4 flex flex-col p-6"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ type: "tween", duration: 0.7 }}
      >
        <p className="sm:text-md text-sm text-secondary uppercase mb-1">
          GET IN TOUCH
        </p>
        <h3 className="text-white font-black md:text-4xl sm:text-3xl xs:text-2xl text-xl mb-4">
          Contact.
        </h3>
        <div className="lg:w-[400px] sm:w-[350px]">
          <form
            action=""
            className="flex flex-col gap-3"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col gap-1">
              <span className="text-[13px]">Your Name</span>
              <input
                type="text"
                placeholder="What's Your Name ?"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="bg-tertiary px-4 py-2 rounded-xl text-sm outline-none border-none"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[13px]">Your Mail</span>
              <input
                type="email"
                placeholder="What's Your Mail ?"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="bg-tertiary px-4 py-2 rounded-xl text-sm outline-none border-none"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-[13px]">Your Message </span>
              <textarea
                rows="7"
                placeholder="What do you want to say ?"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="bg-tertiary px-4 py-2 rounded-xl text-sm outline-none border-none resize-none"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-2 px-4 rounded-xl outline-none w-fit text-white font-semibold shadow-md shadow-primary mt-2"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        className="md:w-[350px] md:h-[350px] w-[250px] h-[250px] mt-16 md:mt-0"
        initial={{ x: 400 }}
        whileInView={{ x: 0 }}
        transition={{ type: "tween", duration: 0.7 }}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
