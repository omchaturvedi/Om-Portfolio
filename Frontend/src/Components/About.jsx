export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-20"
    >
      <div className="scroll-reveal max-w-5xl w-full mx-auto">

        {/* Section label */}
        <p className="inline-flex items-center rounded-full bg-neutral-900 border border-neutral-700 px-5 py-2 text-sm text-white mb-6">
          About
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
          Turning data into insights with
          <span className="text-neutral-500"> analytical thinking</span>
        </h2>

        {/* Description */}
        <p className="text-neutral-300 text-lg leading-relaxed max-w-4xl text-justify">
          I’m a{" "}
          <span className="text-white font-medium">
            Data Science student
          </span>{" "}
          passionate about analyzing data, discovering patterns, and building
          intelligent solutions that help solve real-world problems.
        </p>

        <p className="mt-5 text-neutral-300 text-lg leading-relaxed max-w-4xl text-justify">
          I enjoy working with data to extract meaningful insights, build
          predictive models, and create data-driven applications that support
          smarter decision-making.
        </p>

        {/* What I Do */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-6">
            What I Do
          </h3>

          <div className="space-y-5 text-neutral-300 text-lg leading-relaxed max-w-4xl">

            <p>
              I analyze and process datasets using{" "}
              <span className="text-white font-medium">
                Python, Pandas, NumPy, and SQL
              </span>{" "}
              to extract insights and understand data patterns.
            </p>

            <p>
              I build machine learning models using{" "}
              <span className="text-white font-medium">
                 Python, and statistical techniques
              </span>{" "}
              to create predictive solutions.
            </p>

            <p>
              I visualize data and present insights using{" "}
              <span className="text-white font-medium">
                Matplotlib, Seaborn, and data storytelling
              </span>{" "}
              to make complex information easier to understand.
            </p>

          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 flex justify-center">
          <div
            className="
            rounded-xl
            bg-neutral-900
            border
            border-neutral-800
            px-8
            py-4
            overflow-hidden
            "
          >
            <div className="tech-mask overflow-hidden">
              <div className="tech-marquee flex gap-10 text-lg font-medium">

                {[
                  "Python",
                  "Pandas",
                  "NumPy",
                  "SQL",
                  "Machine Learning",
                  "Scikit-learn",
                  "Matplotlib",
                  "Seaborn",
                  "Data Analysis",
                  "Statistics",
                  "Power BI",
                  "Python",
                  "Pandas",
                  "NumPy",
                  "SQL",
                  "Machine Learning",
                  "Scikit-learn",
                  "Matplotlib",
                  "Seaborn",
                  "Data Analysis",
                  "Statistics",
                  "Spring Boot"
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="text-white whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}