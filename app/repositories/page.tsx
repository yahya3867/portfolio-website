import Navigation from '@/components/Navigation';

export default function Repositories() {
  return (
    <main className="min-h-screen py-8">
      <Navigation />
      
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-6">Repositories</h1>
          <div className="border-b border-gray-200 w-full mb-8"></div>

          <div className="flex flex-col gap-8">
            {/* GitHub Stats Section */}
            <section className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="w-full md:w-1/2">
                <picture>
                  <source
                    srcSet="https://github-readme-stats.vercel.app/api?username=yahya3867&show_icons=true&theme=jolly"
                    media="(prefers-color-scheme: dark)"
                  />
                  <source
                    srcSet="https://github-readme-stats.vercel.app/api?username=yahya3867&show_icons=true&theme=jolly"
                    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                  />
                  <img 
                    src="https://github-readme-stats.vercel.app/api?username=yahya3867&show_icons=true&theme=jolly" 
                    alt="GitHub Stats"
                    className="w-full"
                  />
                </picture>
              </div>
              <div className="w-full md:w-1/2">
                <picture>
                  <source
                    srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=yahya3867&layout=compact&theme=jolly"
                    media="(prefers-color-scheme: dark)"
                  />
                  <source
                    srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=yahya3867&layout=compact&theme=jolly"
                    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                  />
                  <img 
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=yahya3867&layout=compact&theme=jolly" 
                    alt="Top Languages"
                    className="w-full"
                  />
                </picture>
              </div>
            </section>

            {/* Contribution Graph */}
            <section className="w-full overflow-hidden rounded-lg shadow-sm">
              <picture>
                <source
                  srcSet="https://github-readme-streak-stats.herokuapp.com/?user=yahya3867&theme=jolly"
                  media="(prefers-color-scheme: dark)"
                />
                <source
                  srcSet="https://github-readme-streak-stats.herokuapp.com/?user=yahya3867&theme=jolly"
                  media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                />
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=yahya3867&theme=jolly" 
                  alt="GitHub Streak"
                  className="w-full"
                />
              </picture>
            </section>

            {/* Featured Repositories */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="https://github.com/yahya3867/Comparative-Analysis-of-BERT-and-GPT-for-Classifying-Crisis-News-with-Sudan-Conflict-as-an-Example" className="block hover:opacity-90 transition-opacity">
                  <picture>
                    <source
                      srcSet="https://github-readme-stats.vercel.app/api/pin/?username=yahya3867&repo=Comparative-Analysis-of-BERT-and-GPT-for-Classifying-Crisis-News-with-Sudan-Conflict-as-an-Example&theme=jolly"
                      media="(prefers-color-scheme: dark)"
                    />
                    <source
                      srcSet="https://github-readme-stats.vercel.app/api/pin/?username=yahya3867&repo=Comparative-Analysis-of-BERT-and-GPT-for-Classifying-Crisis-News-with-Sudan-Conflict-as-an-Example&theme=jolly"
                      media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                    />
                    <img 
                      src="https://github-readme-stats.vercel.app/api/pin/?username=yahya3867&repo=Comparative-Analysis-of-BERT-and-GPT-for-Classifying-Crisis-News-with-Sudan-Conflict-as-an-Example&theme=jolly" 
                      alt="Comparative Analysis of BERT and GPT"
                      className="w-full"
                    />
                  </picture>
                </a>
                <a href="https://github.com/yahya3867/BlueTemp" className="block hover:opacity-90 transition-opacity">
                  <picture>
                    <source
                      srcSet="https://github-readme-stats.vercel.app/api/pin/?username=yahya3867&repo=BlueTemp&theme=jolly"
                      media="(prefers-color-scheme: dark)"
                    />
                    <source
                      srcSet="https://github-readme-stats.vercel.app/api/pin/?username=yahya3867&repo=BlueTemp&theme=jolly"
                      media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                    />
                    <img 
                      src="https://github-readme-stats.vercel.app/api/pin/?username=yahya3867&repo=BlueTemp&theme=jolly" 
                      alt="BlueTemp Repository"
                      className="w-full"
                    />
                  </picture>
                </a>
                <a href="https://github.com/yahya3867/Crushor" className="block hover:opacity-90 transition-opacity">
                  <picture>
                    <source
                      srcSet="https://github-readme-stats.vercel.app/api/pin/?username=yahya3867&repo=Crushor&theme=jolly"
                      media="(prefers-color-scheme: dark)"
                    />
                    <source
                      srcSet="https://github-readme-stats.vercel.app/api/pin/?username=yahya3867&repo=Crushor&theme=jolly"
                      media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                    />
                    <img 
                      src="https://github-readme-stats.vercel.app/api/pin/?username=yahya3867&repo=Crushor&theme=jolly" 
                      alt="Crushor Repository"
                      className="w-full"
                    />
                  </picture>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 
