import { Github, Linkedin, Download, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-container text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-2 text-notion-text dark:text-notion-text-dark">
          Diego Alejandro
          <br />
          Albarracin Maldonado
        </h1>

        <div className="mt-8 space-y-2 text-notion-gray dark:text-notion-gray-dark">
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Bogotá, Colombia</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+57 3224579664</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>diegoalbarracin0405@gmail.com</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://linkedin.com/in/diego4lbarracin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-notion-text dark:bg-notion-text-dark text-white dark:text-notion-bg-dark rounded-lg hover:opacity-90 transition-opacity"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/diego4lbarracin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-notion-text dark:bg-notion-text-dark text-white dark:text-notion-bg-dark rounded-lg hover:opacity-90 transition-opacity"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>

          <a
            href={`${import.meta.env.BASE_URL}CV/CV_DiegoEnglish.pdf`}
            download="Diego_Albarracin_CV.pdf"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-notion-text dark:border-notion-text-dark text-notion-text dark:text-notion-text-dark rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
