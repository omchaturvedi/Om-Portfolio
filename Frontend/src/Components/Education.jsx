export default function Education() {
  const educationData = [
    {
      institution: "Lovely Professional University, Punjab",
      degree: "Bachelor of Technology (B.Tech) – Computer Science and Engineering",
      duration: "Aug 2023 – Present",
      score: "CGPA: 6.5",
    },
    {
      institution: "Bal Bharti Public School, Rewa",
      degree: "Senior Secondary (Class XII) – PCM",
      duration: "2023",
      score: "Percentage: 82%",
    },
    {
      institution: "Bal Bharti Public School, Rewa",
      degree: "Secondary School (Class X)",
      duration: "2020",
      score: "Percentage: 75%",
    },
  ];

  return (
    <section id="education" className="bg-black text-white px-6 py-20">
      <div className="scroll-reveal max-w-5xl w-full mx-auto">
        {/* Section label */}
        <p className="inline-flex items-center rounded-full bg-neutral-900 border border-neutral-700 px-5 py-2 text-sm text-white mb-6">
          Education
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-12">
          My Academic <span className="text-neutral-500">Journey</span>
        </h2>

        {/* Timeline / Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="rounded-xl bg-neutral-900 border border-neutral-800 p-6 md:p-8 hover:bg-neutral-800/50 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {edu.institution}
                </h3>
                <span className="inline-flex items-center rounded-full bg-neutral-800 border border-neutral-700 px-4 py-1.5 text-sm text-neutral-300 whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <p className="text-lg text-neutral-400">
                  {edu.degree}
                </p>
                <p className="text-lg font-medium text-lime-400">
                  {edu.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
