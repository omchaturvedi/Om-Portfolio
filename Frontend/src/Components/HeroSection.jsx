
// src/components/HeroSection.jsx
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import profilePic from "../assets/profile.jpg";

export default function HeroSection() {
  return (
    <section className="font-inter relative min-h-[80vh] bg-black flex items-center justify-center px-6 py-20 mt-10 md:mt-0">

      <div className="hero-reveal w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mt-10 md:mt-20">

        {/* Text Section (Left on Desktop) */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

          {/* Small intro pill */}
          <div className="mb-6 px-5 py-2 inline-block rounded-full border border-neutral-700 bg-neutral-900 text-sm text-white">
            Hello, I'm Om 👋
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-6">
            Data Science{" "}
            <span className="text-neutral-500 text-2xl md:text-3xl lg:text-4xl block mt-4 font-medium leading-relaxed">
              Turning data into insights and intelligent solutions.
            </span>
          </h1>

          {/* CTA Button */}
          <div className="mt-6 md:mt-10">
            <a
              href="mailto:omchaturvedi999@gmail.com"
              className="
              inline-flex items-center gap-2
              px-8 py-3
              rounded-full
              text-black font-medium
              bg-gradient-to-b
              from-lime-200
              to-lime-500
              hover:from-lime-300
              hover:to-lime-600
              transition-all duration-300
              "
            >
              Email me
              <FaArrowUpRightFromSquare className="text-sm" />
            </a>
          </div>

        </div>

        {/* Profile Image (Right on Desktop) */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[32rem] lg:w-[28rem] lg:h-[36rem] rounded-[2rem] overflow-hidden border-4 border-neutral-800 shadow-2xl">
            <img
              src={profilePic}
              alt="Om"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>

    </section>
  );
}

