import { Moon, Sun } from "lucide-react";

const Header = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-notion-bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-notion-text dark:text-notion-text-dark hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-notion-text dark:text-notion-text-dark hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Cool Projects
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className="text-sm font-medium text-notion-text dark:text-notion-text-dark hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Skills & Technologies
            </button>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-notion-text-dark" />
            ) : (
              <Moon className="w-5 h-5 text-notion-text" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
