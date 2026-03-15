import { FiExternalLink } from "react-icons/fi";
import { FaReact, FaJava, FaChartBar } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { MdDashboard } from "react-icons/md";

const TechBadge = ({ icon: IconComponent, color, label }) => {
  return (
    <div
      className="
      flex items-center gap-2
      rounded-full
      bg-neutral-900
      border border-neutral-800
      px-3 py-1
      text-sm
      transition
      hover:border-neutral-600
      "
    >
      {IconComponent && <IconComponent className={`text-lg ${color}`} />}
      <span className="text-neutral-200">{label}</span>
    </div>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-28"
    >
      <div className="scroll-reveal max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="inline-flex items-center rounded-full bg-neutral-900 border border-neutral-700 px-5 py-2 text-sm text-white mb-6">
          Projects
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
          My Latest <span className="text-neutral-400">Projects</span>
        </h2>

        {/* ================= Project 1 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center mb-24 transition hover:-translate-y-1">

          <div className="rounded-lg overflow-hidden border border-neutral-800">
            <img src="/P11.png" alt="Road Accident Analysis" className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Road Accident Analysis</h3>

            <div className="flex flex-wrap gap-3 mb-5">
              <TechBadge icon={FaChartBar} color="text-yellow-400" label="Power BI" />
              <TechBadge icon={MdDashboard} color="text-blue-400" label="Dashboard" />
              <TechBadge icon={FaChartBar} color="text-purple-400" label="Data Analysis" />
              <TechBadge icon={FaChartBar} color="text-green-400" label="Data Visualization" />
            </div>

            <p className="text-neutral-300 mb-6 leading-relaxed">
              Developed an interactive Power BI dashboard to analyze road accident
              data across India, visualizing accidents, fatalities, severity,
              vehicle involvement, weather conditions, and alcohol-related cases.
            </p>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex items-center gap-2
              px-5 py-2
              rounded-full
              text-black
              font-medium
              bg-gradient-to-b
              from-lime-200
              to-lime-500
              hover:from-lime-300
              hover:to-lime-600
              transition
              "
            >
              View Dashboard <FiExternalLink />
            </a>
          </div>
        </div>

        {/* ================= Project 2 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center mb-24 transition hover:-translate-y-1">

          <div className="rounded-lg overflow-hidden border border-neutral-800">
            <img src="/P1.png" alt="Rail Connect" className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Rail Connect</h3>

            <div className="flex flex-wrap gap-3 mb-5">
              <TechBadge icon={FaReact} color="text-cyan-400" label="React" />
              <TechBadge icon={FaJava} color="text-orange-500" label="Java" />
              <TechBadge icon={SiMongodb} color="text-green-500" label="MongoDB" />
            </div>

            <p className="text-neutral-300 mb-6 leading-relaxed">
              Rail Connect is a train booking web application that allows users
              to search trains and book tickets from any location to their
              destination with a simple and efficient interface.
            </p>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex items-center gap-2
              px-5 py-2
              rounded-full
              text-black
              font-medium
              bg-gradient-to-b
              from-lime-200
              to-lime-500
              hover:from-lime-300
              hover:to-lime-600
              transition
              "
            >
              Check Live <FiExternalLink />
            </a>
          </div>
        </div>

        {/* ================= Project 3 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center mb-24 transition hover:-translate-y-1">

          <div className="rounded-lg overflow-hidden border border-neutral-800">
            <img src="/P2.png" alt="Air Quality Analysis Dashboard" className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Air Quality Analysis Dashboard
            </h3>

            <div className="flex flex-wrap gap-3 mb-5">
              <TechBadge icon={FaChartBar} color="text-yellow-400" label="Power BI" />
              <TechBadge icon={MdDashboard} color="text-blue-400" label="Dashboard" />
              <TechBadge icon={FaChartBar} color="text-purple-400" label="Data Analysis" />
              <TechBadge icon={FaChartBar} color="text-green-400" label="Data Visualization" />
            </div>

            <p className="text-neutral-300 mb-6 leading-relaxed">
              Built an interactive Power BI dashboard to analyze air pollution
              trends, pollutant correlations, seasonal variations, and
              geographical impacts on air quality.
            </p>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex items-center gap-2
              px-5 py-2
              rounded-full
              text-black
              font-medium
              bg-gradient-to-b
              from-lime-200
              to-lime-500
              hover:from-lime-300
              hover:to-lime-600
              transition
              "
            >
              View Dashboard <FiExternalLink />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}