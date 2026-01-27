const Technologies = () => {
  const techCategories = {
    frontend: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Angular",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
    backend: [
      {
        name: "Go",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      },
      {
        name: "Gin",
        logo: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png",
      },
      {
        name: "Spring Boot",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
    database: [
      {
        name: "Supabase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
      {
        name: "SQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
    other: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  };

  return (
    <section id="technologies" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Technologies I Have Worked With</h2>
        <p className="text-notion-gray dark:text-notion-gray-dark max-w-2xl mx-auto mt-4">
          I firmly believe that continuous learning and curiosity are essential
          soft skills for success in the 21st century —not only as an engineer
          or other type of professional, but for anyone who seeks to keep pace
          with the current evolution rhythm of this generation and make the most
          out of it. The technologies listed below are just some of the tools I
          have implemented in my projects, nevertheless, I continue expanding my
          knowledge as an engineer as I learn about new tools and frameworks.
        </p>
      </div>

      <div className="space-y-12">
        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-notion-text dark:text-notion-text-dark">
            Frontend
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techCategories.frontend.map((tech) => (
              <div
                key={tech.name}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-md dark:hover:shadow-gray-900/50 transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 object-contain dark:filter dark:brightness-90"
                />
                <span className="text-sm font-medium text-notion-text dark:text-notion-text-dark">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-notion-text dark:text-notion-text-dark">
            Backend
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techCategories.backend.map((tech) => (
              <div
                key={tech.name}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-md dark:hover:shadow-gray-900/50 transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 object-contain dark:filter dark:brightness-90"
                />
                <span className="text-sm font-medium text-notion-text dark:text-notion-text-dark">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-notion-text dark:text-notion-text-dark">
            Database
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techCategories.database.map((tech) => (
              <div
                key={tech.name}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-md dark:hover:shadow-gray-900/50 transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 object-contain dark:filter dark:brightness-90"
                />
                <span className="text-sm font-medium text-notion-text dark:text-notion-text-dark">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Technologies */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-notion-text dark:text-notion-text-dark">
            Other Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techCategories.other.map((tech) => (
              <div
                key={tech.name}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-md dark:hover:shadow-gray-900/50 transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 object-contain dark:filter dark:brightness-90"
                />
                <span className="text-sm font-medium text-notion-text dark:text-notion-text-dark">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
