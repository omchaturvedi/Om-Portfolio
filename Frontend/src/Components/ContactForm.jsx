import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactForm() {

const [formData, setFormData] = useState({
name: "",
email: "",
phone: "",
subject: "",
message: "",
});

useEffect(() => {
window.scrollTo({ top: 0, behavior: "auto" });
}, []);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const isValidEmail = (email) =>
/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);

const isValidPhone = (phone) =>
phone === "" || /^[0-9]{10}$/.test(phone);

const handleSubmit = async (e) => {
e.preventDefault();


if (!isValidEmail(formData.email)) {
  toast.error("Invalid email address");
  return;
}

if (!isValidPhone(formData.phone)) {
  toast.error("Phone number must be 10 digits");
  return;
}

try {
  await emailjs.send(
    "service_bwxrfnq",
    "template_f52b7jv",
    formData,
    "nQCDDM5qSrz73zg56"
  );

  toast.success("Message sent successfully!");

  setFormData({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

} catch (error) {
  toast.error("Failed to send message");
}


};

return ( <section
   className="
   relative
   min-h-screen
   flex
   items-center
   justify-center
   px-6
   pt-32
   pb-24
   text-white
   bg-black
   overflow-hidden
   "
 >


  {/* Background overlay */}
  <div className="absolute inset-0 bg-black/85"></div>

  {/* Top gradient */}
  <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/70 to-transparent"></div>

  {/* Bottom gradient */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

  <div className="relative z-10 max-w-3xl w-full">

    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12 text-center">
      Let's Get in <span className="text-neutral-400">Touch</span>
    </h2>

    <form
      onSubmit={handleSubmit}
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-6
      bg-neutral-900
      border
      border-neutral-800
      p-8
      rounded-xl
      "
    >

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="
        bg-black
        border
        border-neutral-800
        p-3
        rounded-md
        outline-none
        focus:border-neutral-600
        "
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="
        bg-black
        border
        border-neutral-800
        p-3
        rounded-md
        outline-none
        focus:border-neutral-600
        "
      />

      <input
        type="text"
        name="phone"
        placeholder="Contact Number"
        value={formData.phone}
        onChange={handleChange}
        className="
        bg-black
        border
        border-neutral-800
        p-3
        rounded-md
        outline-none
        focus:border-neutral-600
        "
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="
        bg-black
        border
        border-neutral-800
        p-3
        rounded-md
        outline-none
        focus:border-neutral-600
        "
      />

      <textarea
        name="message"
        rows="4"
        placeholder="How can I help you?"
        value={formData.message}
        onChange={handleChange}
        required
        className="
        md:col-span-2
        bg-black
        border
        border-neutral-800
        p-3
        rounded-md
        outline-none
        resize-none
        focus:border-neutral-600
        "
      />

      <button
        type="submit"
        className="
        md:col-span-2
        flex
        items-center
        justify-center
        gap-3
        px-8
        py-3
        rounded-full
        font-medium
        text-black
        bg-gradient-to-b
        from-lime-200
        to-lime-500
        hover:from-lime-300
        hover:to-lime-600
        transition-all
        "
      >
        <FaPaperPlane />
        Send Message
      </button>

    </form>

  </div>

</section>


);
}
