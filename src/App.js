// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaLink, FaFileAlt, FaTwitter, FaEnvelope, FaYoutube, FaCode, FaGraduationCap, FaProjectDiagram, FaHome, FaBriefcase} from 'react-icons/fa';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [typedText, setTypedText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const fullText = "Innovative Data Scientist | ML Enthusiast | Problem Solver";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);


  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'} justify-center p-6 transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'simple-blue-bg'}`}>
                <div className="absolute top-4 right-4">
                    <button onClick={toggleTheme} className="theme-toggle-button text-gray-800 dark:text-white">
                        {isDarkMode ? (
                            <FaSun size={20} />
                        ) : (
                            <FaMoon size={20} />
                        )}
                    </button>
                </div>
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start">
        <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 mr-6 mb-6 md:mb-0 rounded-full overflow-hidden border-2 border-black dark:border-white">
            <img 
                src="./images/profile-pic.jpeg"
                alt="Piyush Gupta's profile picture" 
                className="w-full h-full object-cover"
            />
        </div>

        <div className="flex-1 text-left" id="home">
            <h1 className="text-3xl font-cousine mb-4 text-gray-900 dark:text-white">
                Sup, I'm Piyush <span className="waving-hand">👋</span></h1>
                <h2 className="text-xl font-cousine mb-6 min-h-[1.5em] text-gray-600 dark:text-white">{typedText}</h2>

            <div className="font-cousine text-gray-800 dark:text-white space-y-6">
                <div className="flex space-x-6">
                    <a 
                        href="https://github.com/Piyush-Guptaa"
                        className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={20} className="mr-2" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/piyush-gupta-09/"
                        className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={20} className="mr-2" />
                    </a>
                    {
                    <a 
                        href="#" 
                        className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLink size={20} className="mr-2" />
                    </a>
                    }
                    {
                     <a 
                        href="/Resume.pdf" 
                        className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFileAlt size={20} className="mr-2" />
                    </a>
                    }
                </div>
            </div>

            <div className="mt-6 font-cousine text-gray-700 dark:text-white space-y-6">
                <h3 className="text-lg mb-2">About</h3>
                <p className="text-sm">
                    Innovative Data Scientist with expertise in Machine Learning, Deep Learning, and Predictive Analytics, specializing in recommendation
                    systems, optimization models, and Al-driven automation. Experienced in end-to-end ML. pipelines, big data analytics, and cloud-based
                    Al deployments to drive scalable solutions. Proficient in Python, SQL, Spark, TensorFlow, and R, with a strong foundation in MLOps,
                    data engineering, and smart data visualization. Passionate about building Al-powered products that enhance user experience and optimize
                    business performance.
                </p>

                <h3 className="text-lg mb-2" id="work-exp"> Work Experience </h3>
                <ul className="text-sm list-disc pl-5 space-y-2">
                    <li><strong>Associate Data Scientist, Fluor Daniel India Private Limited</strong> (Jul 2024 - Present)
                        <ul>
                            <li>Developing an Al-powered recommendation model that helps project managers build data-driven narratives by dynamically
                                suggesting the next best visualization from 250+ charts based on project context and chart observations.</li>
                            <li>Automating ETL pipelines using R and SQL to optimize data ingestion, transformation, and processing for scalable and efficient
                                analysis, while leveraging ggplot2 for insightful data visualization.</li>
                            <li>Building interactive dashboards with D3.js, JavaScript, and Plotly enhances real-time decision-making and enables intuitive analysis
                                of large-scale EPC projects.</li>
                            <li>Benchmarking EPC projects across various sizes and global locations, analyzing execution efficiency, cost trends, and risk factors to
                                enhance strategic planning.</li>
                        </ul>
                    </li>
                    <li><strong>Data Scientist Intern, Fluor Daniel India Private Limited</strong> (Mar 2024 - Jul 2024)
                        <ul>
                            <li>Assisted in developing predictive models for project analytics, focusing on trend analysis and performance forecasting.</li>
                            <li>Automated data extraction, transformation, and validation processes using R and SQL, reducing manual effort by 50%.</li>
                            <li>Collaborated with senior data scientists to enhance data quality and preprocessing pipelines.</li>
                        </ul>
                    </li>
                    <li><strong>Software Developer Intern, Centre for Railway Information Systems</strong> (Jul 2023 - Sep 2023)
                        <ul>
                            <li>Developed a cross-platform mobile app using Flutter, enabling real-time coach tracking and optimizing train scheduling for
                                improved railway operations.</li>
                            <li>Designed and integrated an SQL database, enhancing data accuracy, automating record management, and improving system
                                efficiency in train time management.</li>
                        </ul>
                    </li>
                </ul>

                <h3 className="text-lg mb-2" id="education"> Education </h3>
                <p className="text-sm">
                    <li><strong>GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY</strong>, New Delhi, India - Bachelor of Technology, Computer Science (Jul 2024), GPA: 9.1</li>
                </p>

                <div className="mt-6 font-cousine text-gray-700 dark:text-white">
                    <h3 className="text-lg mb-3" id="skills" >Skills</h3>
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 className="font-bold mb-1">Programming & Development</h4>
                            <p className="mb-3">Python, R, SQL, Dart, JavaScript, C++</p>
                        
                            <h4 className="font-bold mb-1">Machine Learning & AI</h4>
                            <p className="mb-3">TensorFlow, Keras, Scalable ML Pipelines, Predictive Modeling, Deep Learning</p>
                        </div>
                    
                        <div>
                            <h4 className="font-bold mb-1">Big Data & MLOps</h4>
                            <p className="mb-3">Apache Spark, Data Engineering, Model Deployment</p>
                        
                            <h4 className="font-bold mb-1">Analytics & Data Visualization</h4>
                            <p className="mb-3">NumPy, Pandas, Seaborn, Matplotlib, Ggplot2, D3.js</p>

                            <h4 className="font-bold mb-1">Mobile & Web Development</h4>
                            <p>Flutter, Android Studio, Firebase, REST APIS</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 font-cousine text-gray-700 dark:text-white">
                    <h3 className="text-lg mb-4" id="projects">Projects</h3>
                
                    <div className="space-y-6">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                <img 
                                    src="/images/FusionEXNet.png"
                                    alt="FusionEXNet" 
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-4">
                                <h4 className="font-bold text-lg flex items-center">
                                    <span>FusionEXNet: An Interpretable Fused Deep Learning Model for Skin Cancer Detection</span>

                                    <div className="ml-auto flex space-x-2">
                                        <a href="https://github.com/Piyush-Guptaa/FusionEXNet" 
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                                            target="_blank" 
                                            rel="noopener noreferrer">
                                            <FaGithub size={16} />
                                        </a>
                                        <a href="https://www.tandfonline.com/doi/full/10.1080/1206212X.2024.2385923"
                                            className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                                            target="_blank" 
                                            rel="noopener noreferrer">
                                            <FaFileAlt size={16} />
                                        </a>
                                    </div>
                                </h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-xs">Deep Learning</span>
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md text-xs">EfficientNetV2S</span>
                                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-md text-xs">XceptionNet</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-sm">
                                    Developed a deep learning model integrating Efficient NetV2S and XceptionNet for enhanced skin cancer detection.
                                    Achieved 90.83% accuracy using the HAM10000 dataset and Explainable AI techniques for model interpretability.
                                    Published in: International Journal of Computers and Applications, 2024 ( DOI: 10.1080/1206212X.2024.2385923)
                                </p>
                            </div>
                        </div>
                    
                        {/*                         
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                <img 
                                    src="/images/project2.png"  // Replace with your project image
                                    alt="Privacy-Preserving Credit Card Fraud Detection" 
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-4">
                                <h4 className="font-bold text-lg flex items-center">
                                    <span>Privacy-Preserving Credit Card Fraud Detection using Federated MultiLayer Perceptron Neural Network</span>
                                </h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-xs">Federated Learning</span>
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md text-xs">TensorFlow Federated</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-sm">
                                    Developed a federated deep learning model for secure credit card fraud detection. Achieved 97.34% accuracy, ensuring
                                    privacy-preserving decentralized learning using TensorFlow Federated.
                                </p>
                            </div>
                        </div>
                        */}
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                <img 
                                    src="/images/Alzheimer.png"
                                    alt="Enhancing Early Alzheimer's Disease Detection" 
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-4">
                                <h4 className="font-bold text-lg flex items-center">
                                    <span>Enhancing Early Alzheimer's Disease Detection: An Ensemble Approach</span>
                                </h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-xs">Ensemble Learning</span>
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md text-xs">Deep Learning</span>
                                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-md text-xs">Alzheimer's Disease Detection</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-sm">
                                    Designed an ensemble deep learning model combining ResNet50, DenseNet, MobileNet, VGG16, Inception, NasNet, Xception, and
                                    EfficientNet for improved Alzheimer's disease detection. Achieved 99% classification accuracy on the Dementia Classification
                                    dataset. Published in: SSRN, 2024 (DOI: 10.2139/ssrn.4906497)
                                </p>
                            </div>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                <img 
                                    src="/images/bmpl.png"
                                    alt="BOOKMYPARKINGLOT" 
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-4">
                                <h4 className="font-bold text-lg flex items-center">
                                    <span>BOOKMYPARKINGLOT - Smart Parking Management App</span>
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-xs">Flutter</span>
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md text-xs">Google Maps</span>
                                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-md text-xs">Firebase</span>
                                    </div>
                                    </div>
                                    <div className="p-4">
                                    <p className="text-sm">
                                    Developed a Flutter-based mobile app with real-time parking availability, Google Maps integration, and Firebase backend, reducing
                                    search time and congestion. Designed a two-way system for users and admins, enabling seamless reservations, automated check-ins, secure payments, and
                                    parking history tracking.
                                    </p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="w-full text-center py-6 mt-12 text-gray-500 dark:text-gray-400 text-sm">
                                      <p className="flex items-center justify-center">
                                          Made with 
                                          <svg 
                                              className="w-5 h-5 mx-1 text-red-500 animate-pulse" 
                                              fill="currentColor" 
                                              viewBox="0 0 20 20" 
                                              xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                                          >
                                              <path 
                                                  fillRule="evenodd" 
                                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                                                  clipRule="evenodd"
                                              />
                                          </svg>
                                          by Piyush Gupta
                                      </p>
                                  </div>

                                  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-2">
                                      <div className="flex items-center space-x-8">
                                          <a 
                                              href="#home" 
                                              onClick={(e) => scrollToSection(e, 'home')}
                                              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                              aria-label="Home"
                                          >
                                              <FaHome size={20} />
                                          </a>
                                      
                                          <a 
                                              href="#work-exp"
                                              onClick={(e) => scrollToSection(e, 'work-exp')} 
                                              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                              aria-label="Work Experience"
                                          >
                                              <FaBriefcase size={20} />
                                          </a>
                                      
                                          <a 
                                              href="#education" 
                                              onClick={(e) => scrollToSection(e, 'education')}
                                              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                              aria-label="Education"
                                          >
                                              <FaGraduationCap size={20} />
                                          </a>
                                      
                                          <a 
                                              href="#skills"
                                              onClick={(e) => scrollToSection(e, 'skills')} 
                                              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                              aria-label="Skills"
                                          >
                                              <FaCode size={20} />
                                          </a>
                                      
                                          <a 
                                              href="#projects"
                                              onClick={(e) => scrollToSection(e, 'projects')} 
                                              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                              aria-label="Projects"
                                          >
                                              <FaProjectDiagram size={20} />
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <SpeedInsights />
                          <Analytics />
                      </div>
                      </div>


  );
}

export default App;