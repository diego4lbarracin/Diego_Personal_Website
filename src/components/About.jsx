const About = () => {
  const languages = [
    {
      name: "Spanish (Native)",
      certificateUrl: null, // No certificate needed for native language
    },
    {
      name: "English (Professional Working Proficiency)",
      certificateUrl: "https://cert.efset.org/en/A58pC6", // Add your certificate link here
    },
    {
      name: "Portuguese (Currently Learning it)",
      certificateUrl: "https://www.duolingo.com/profile/diego4lbarracin", // Or Duolingo profile link
    },
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Photos Grid */}
        <div className="grid grid-cols-2 gap-4 h-fit">
          <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/aboutMe_Section/pictureOfMySelf.PNG`}
              alt="Hobby 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/aboutMe_Section/mmb2026.jpeg`}
              alt="Hobby 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/aboutMe_Section/ridingBikes.jpg`}
              alt="Hobby 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/aboutMe_Section/tutoring.JPG`}
              alt="Hobby 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/aboutMe_Section/dreamCar.JPG`}
              alt="Hobby 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/aboutMe_Section/watches.jpeg`}
              alt="Hobby 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/aboutMe_Section/mmy2025.PNG`}
              alt="Hobby 7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/aboutMe_Section/capyBaras.jpeg`}
              alt="Hobby 8"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-notion-text dark:text-notion-text-dark">
              Who I Am
            </h3>
            <p className="text-notion-gray dark:text-notion-gray-dark leading-relaxed mb-4">
              My name is Diego Albarracin and I am proudly Colombian. I was born
              and raised in a region of the country where there are more cows
              than human beings, to be more exact, in the beautiful and
              immaculate department of Casanare.
            </p>
            <p className="text-notion-gray dark:text-notion-gray-dark leading-relaxed mb-4">
              I am very curious (they used to call me Curious George and Google
              when I was little because they thought I knew everything), I like
              to learn a little bit of everything and I also enjoy teaching what
              I have learned. On the other hand, in theory, I am preparing to be
              an engineer, however, for many years I have been genuinely
              interested in economics and finance, to the point that my elective
              subjects in my career have been taken from the study plan of the
              previously mentioned programs.
            </p>
            <p className="text-notion-gray dark:text-notion-gray-dark leading-relaxed mb-4">
              To conclude, on this web page you will find more about me, aside
              from some of my (currently) more interesting projects, contact
              information and the technologies I have worked with. (more cool
              features are about to be developed, so stay tuned!)
            </p>
            <ul className="list-disc list-inside space-y-2 text-notion-gray dark:text-notion-gray-dark">
              <li>Watch enthusiats on a budget.</li>
              <li>
                I love Porsches and I want to own a 911 (either a Turbo S or GT3
                RS) in the near future.
              </li>
              <li>
                I can remember number combinations (phone numbers, credit card
                numbers, etc) easily.
              </li>
              <li>
                I like to listen to Minecraft soundtrack when I need to focus.
              </li>
              <li>
                I love riding bikes since I am a kid and, in the last 4 years, I
                have been running half marathons every now and then.
              </li>
              <li>My current Duolingo streak is close to 900 days.</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="text-sm font-semibold text-notion-gray dark:text-notion-gray-dark mb-2">
                Languages
              </h4>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="text-notion-text dark:text-notion-text-dark"
                  >
                    {lang.certificateUrl ? (
                      <a
                        href={lang.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-notion-gray dark:hover:text-notion-gray-dark underline decoration-dotted underline-offset-2 transition-colors"
                      >
                        {lang.name}
                      </a>
                    ) : (
                      lang.name
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-notion-gray dark:text-notion-gray-dark mb-2">
                Education
              </h4>
              <div className="text-notion-text dark:text-notion-text-dark">
                <p className="font-medium">Pontificia Universidad Javeriana</p>
                <p className="text-sm text-notion-gray dark:text-notion-gray-dark">
                  Systems Engineering
                </p>
                <p className="text-sm text-notion-gray dark:text-notion-gray-dark mt-2">
                  GPA: 4.02 / 5.0
                </p>
                <p className="text-sm text-notion-gray dark:text-notion-gray-dark">
                  Expected Graduation Date: July 2026
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-notion-gray dark:text-notion-gray-dark mb-2">
                Location
              </h4>
              <p className="text-notion-text dark:text-notion-text-dark">
                Bogotá, Colombia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
