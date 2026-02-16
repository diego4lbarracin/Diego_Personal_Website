import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "The Minecraft Server Generator",
      description:
        "In this project I created a web application that follows an API REST architecture and consists of a Minecraft Server Generator for Minecraft Java Edition to avoid having to use services offered by third parties that are full of ads, besides, to simplify the process of creating my own Minecraft Servers using a user-friendly UI and automate the process of installing all the required software, turning on and off the server, set the server properties and configure all the related networking parameters (ports, IP addresses, etc). ",
      technologies: [
        "Go & Gin",
        "React & TailWind CSS",
        "AWS SDK",
        "Docker",
        "Supabase",
        "CI/CD Pipelines",
        "GitHub Actions, Pages and Secrets Manager",
        "Render",
      ],
      image: `${import.meta.env.BASE_URL}images/projects/Minecraft_Server_Generator.png`,
      sourceUrl:
        "https://github.com/diego4lbarracin/The_Minecraft_Server_Generator",
      liveUrl:
        "https://diego4lbarracin.github.io/The_Minecraft_Server_Generator/",
    },
    {
      id: 2,
      title: "Compound Interest Calculator with Investment Insights",
      description:
        "This is Compound Interest Calculator that allows users to simulate how compound interest could help them increase their savings and obtain investing insights for replicating the values obtained in the calculation using ETFs whose average return in the last 5 years has been close to the one selected by the user for the simulation. The application is accessible through the internet and follows an API REST architecture, where the frontend sends a HTTP request with the parameters for the calculation to the backend, which handles the request by executing a method that receives the parameters and returns an array with the calculation for each year and, while doing that, makes a call to the OpenAI API and obtains information about 10 ETFS that have had an average return similar to the one obtained by parameter from the HTTP request, includes the ETF symbol, ETF Provider (iShares, Vanguard, etc.) and a brief description of the ETF, then organizes the response in an JSON file and sends it back to the frontend where finally, both the calculation and the investment insights are displayed to the user.",
      technologies: [
        "Go & Gin",
        "React & TailWind CSS",
        "Docker",
        "CI/CD Pipelines",
        "GitHub Actions, Pages and Secrets Manager",
        "Render",
      ],
      image: `${import.meta.env.BASE_URL}images/projects/Compund_Interest_Calculator.jpg`,
      sourceUrl:
        "https://github.com/diego4lbarracin/Compound-Interest-Calculator",
      liveUrl:
        "https://diego4lbarracin.github.io/Compound-Interest-Calculator/",
    },
    {
      id: 3,
      title: "The Solar System",
      description:
        "RESTful web application that on the frontend fetches information about the planets on the solar system from an API built in the backend that queries a MongoDB database and also executes a method for a feature that lets the user find out how long does it take to go from one planet to the other at the speed of light and at average speed of the fastest rocket-spacecraft system capable of carrying humans.",
      technologies: [
        "React & TailWind CSS",
        "Node.js & Express.js",
        "Docker",
        "CI/CD",
        "GitHub Actions, Pages and Secrets Manager",
      ],
      image:
        "https://github.com/diego4lbarracin/The_Solar_System/raw/development/frontend/public/Picture_Landing2.png?raw=true",
      sourceUrl: "https://github.com/diego4lbarracin/The_Solar_System",
      liveUrl: "https://diego4lbarracin.github.io/The_Solar_System/",
    },
    {
      id: 4,
      title: "The Definitive QR Code Generator & Image Background Remover",
      description:
        "This is a “client-based” web application with 2 productivity tools available for free, a QR code generator and a background image remover. The process of either creating the QR code and removing the background of images happens on the client’s browser, deleting the need for an external backend service to handle those requests. To generate the QR codes, the qrcode JavaScript library is currently used, on the other hand, for removing the background of images, the @imgly/background-removal npm package is used, which runs an AI model on the browser that analyzes the image provided by the user and removes the background of it.",
      technologies: [
        "React & TailWind CSS",
        "TypeScript",
        "CI/CD Pipelines",
        "GitHub Actions, Pages and Secrets Manager",
      ],
      image: `${import.meta.env.BASE_URL}images/projects/The_QR_BR.png`,
      sourceUrl:
        "https://github.com/diego4lbarracin/The-Definitive-QR-Code-Generator-Image-Background-Remover",
      liveUrl:
        "https://diego4lbarracin.github.io/The-Definitive-QR-Code-Generator-Image-Background-Remover/",
    },
  ];

  return (
    <section
      id="projects"
      className="section-container bg-gray-50 dark:bg-gray-900/30"
    >
      <h2 className="section-title">(Most Recent) Cool Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 transition-shadow border border-gray-200 dark:border-gray-700"
          >
            {/* Project Image */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-notion-text dark:text-notion-text-dark">
                {project.title}
              </h3>
              <p className="text-notion-gray dark:text-notion-gray-dark mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-notion-gray dark:text-notion-gray-dark mb-2 uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-notion-text dark:text-notion-text-dark rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 text-sm border border-notion-text dark:border-notion-text-dark text-notion-text dark:text-notion-text-dark rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 text-sm bg-notion-text dark:bg-notion-text-dark text-white dark:text-notion-bg-dark rounded-lg hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
