import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <Navigation />
      
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/3">
              <section className="mb-8">
                <h1 className="text-4xl mb-2"><strong>Yahya</strong> Masri</h1>
                <p className="text-lg mb-6">
                  <strong>Junior CS Student, UGA at <a href="https://www.gmu.edu/" className="text-[#8651d6] hover:underline">GMU</a> | <a href="https://www.stcenter.net/" className="text-[#8651d6] hover:underline">NSF Spatiotemporal Innovation</a></strong>
                </p>
                <p className="text-gray-700 mb-4">
                  I am a junior at <a href="https://www.gmu.edu/" className="text-[#8651d6] hover:underline">George Mason University</a> majoring in <a href="https://cs.gmu.edu/" className="text-[#8651d6] hover:underline">Computer Science</a>. I am also an Undergraduate Research Assistant at the <a href="https://www.stcenter.net/" className="text-[#8651d6] hover:underline">NSF Spatiotemporal Innovation Center</a>, and earned an A.S. in Computer Science from <a href="https://www.nvcc.edu/" className="text-[#8651d6] hover:underline">Northern Virginia Community College</a>.
                </p>
                <p className="text-gray-700 mb-4">
                  My primary interests lie in inference, prompting strategies, and the practical applications of large language models.
                </p>
                <p className="text-gray-700 mb-4">
                  At the NSF Spatiotemporal Innovation Center, I contribute to the automation and analysis of conflict mapping, where I develop, design, and code end-to-end pipelines integrating large language models, QGIS, Neo4j, and Streamlit. My team builds systems used to classify, geocode, and visualize real-world incident data, supporting rapid-response tools for humanitarian and research purposes.
                </p>
                <p className="text-gray-700 mb-8">
                  I work under the mentorship of <a href="https://github.com/wangfarmer" className="text-[#8651d6] hover:underline">Dr. Zifu Wang</a> and the supervision of <a href="https://science.gmu.edu/directory/chaowei-yang" className="text-[#8651d6] hover:underline">Dr. Chaowei Yang</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sm text-gray-500 w-32 flex-shrink-0">May 2025</span>
                    <div className="flex-1">
                      <a href="/graduation" className="text-gray-700 hover:text-[#8651d6]">
                        Graduated from NOVA with my A.S. in Computer Science
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm text-gray-500 w-32 flex-shrink-0">November 2024</span>
                    <div className="flex-1">
                      <p className="text-gray-700">Presented updated findings on context-aware location extraction at the STC IAB at GMU.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm text-gray-500 w-32 flex-shrink-0">July 2024</span>
                    <div className="flex-1">
                      <p className="text-gray-700">Presented findings on conflict incident classification using a BERT model at the 2024 International Symposium of Spatiotemporal Data Science.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm text-gray-500 w-32 flex-shrink-0">May 2024</span>
                    <div className="flex-1">
                      <p className="text-gray-700">Presented findings on context-aware location extraction at the STC IAB at Harvard.</p>
                    </div>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Current Projects</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sm text-gray-500 w-32 flex-shrink-0">Summer 2025</span>
                    <div className="flex-1 space-y-2">
                      <span>Developing a Data Center Digital Twin for real-time monitoring and visualization systems using Prometheus and Grafana for comprehensive data center performance analysis.</span>
                      <span className="block">Automating conflict mapping via multi-agent system using LLMs, Neo4j, and PyQGIS.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm text-gray-500 w-32 flex-shrink-0">Spring 2025</span>
                    <span className="flex-1">Contributed to machine learning pipelines for classification using BERT, GPT, FAISS, and OpenAI APIs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm text-gray-500 w-32 flex-shrink-0">Fall 2024</span>
                    <span className="flex-1">Researched context-specific location extraction for conflict articles using LLMs and Retrieval-Augmented Generation.</span>
                  </li>
                </ul>
              </section>

              {/* Social Icons - Centered and Larger */}
              <div className="flex justify-center items-center w-full">
                <div className="flex space-x-12">
                  <a href="mailto:yahya.masri@yahoo.com" className="text-[#8651d6] hover:opacity-80">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/yahya3867" className="text-[#8651d6] hover:opacity-80">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/yahya-masri" className="text-[#8651d6] hover:opacity-80">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <div className="aspect-square relative mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/profpic.jpg"
                      alt="Yahya Masri"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
                
                <div className="text-gray-700">
                  <p className="mb-2"><strong>Education:</strong> George Mason University</p>
                  <p className="mb-2"><strong>Major:</strong> Computer Science</p>
                  <p className="mb-2"><strong>Role:</strong> Undergraduate Research Assistant</p>
                  <p><strong>Location:</strong> Northern Virginia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
