import { useState } from "react";
import { contactImg } from "../assets";
import CommonHead from "./CommonHead";
import { commonStyle } from "../style";

import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Contact = () => {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  let { username, phoneNumber, email, message } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = async (e) => {
    e.preventDefault();

    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setFormData("");
      console.log(formData);
      console.log(username, email, phoneNumber, message);
      const response = await fetch("https://formspree.io/f/mnqkgozv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Successful submission logic");
      } else {
        alert("Error");
      }
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <CommonHead head="CONTACT" subhead="Contact With Me" />
      </div>
      <div className="w-full mt-[60px]">
        <div className="w-full h-auto flex sm:flex-row flex-col gap-10 justify-between">
          {/*LeftContact  */}
          <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
              className="w-full h-64 object-cover rounded-lg mb-2"
              src={contactImg}
              alt="contactImg"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-white">Unish Rai</h3>
              <p className="text-lg font-normal text-gray-400">
                Frontend Developer
              </p>
              <p className="text-base text-gray-400 tracking-wide">
                If you have any question, feel free to contact me.
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Phone: <span className="text-lightText">+977 9708725084</span>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Email:{" "}
                <span className="text-lightText">kirantunish@gmail.com</span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
              </h2>
              <div className="flex gap-4">
                <span className={`${commonStyle.bannerIcons}`}>
                  <a href="https://www.facebook.com/profile.php?id=100087187351831">
                    <FaFacebook />
                  </a>
                </span>
                <span className={`${commonStyle.bannerIcons}`}>
                  <a href="https://www.linkedin.com/in/unish-rai-4a1b4324b/">
                    <FaLinkedin />
                  </a>
                </span>
                <span className={`${commonStyle.bannerIcons}`}>
                  <a href="https://twitter.com/UnishRai14">
                    <FaTwitter />
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* LeftContact */}
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              onSubmit={handleSend}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}

              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } ${commonStyle.contactInput}`}
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } ${commonStyle.contactInput}`}
                    type="number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } ${commonStyle.contactInput}`}
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  name="message"
                  id="message"
                  onChange={handleChange}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } ${commonStyle.contactTextArea}`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  // disabled={state.submitting}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
