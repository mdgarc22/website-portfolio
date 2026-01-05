import { ArrowRight, ExternalLink} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
var baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    id: 1,
    title: "AndyTaEstates",
    description: "Developed a custom realtor website to manage and display property listings, implementing full CRUD functionality with a PHP and MySQL backend. Integrated dynamic listing pages and a contact form to support client inquiries and streamline content updates.",
    image: "/images/AndyTaEstates.png",
    gif: "/images/AndyTaEstates.gif",
    tags: ["Bootstrap", "MySQL", "PHP"],
    demoUrl: "https://andytaestates.com/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Weather Intelligence Dashboard",
    description: "Developed a full-stack weather analytics application that consumes real-time data from a RESTful API and visualizes key weather KPIs using Plotly. Integrated Claude AI with prompt engineering to generate context-aware recommendations, and built a modular Python backend with AWS DynamoDB for scalable user management.",
    image: "",
    gif: "",
    tags: ["Python", "AWS DynamoDB", "Claude AI", "LLM Integration", "REST API"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Pulsepoint",
    description: "Collaborated in an Agile team to develop a desktop application for internal communication between employees and management. Implemented authentication and role-based validation, designed a MySQL database schema, and participated in sprint planning, stand-ups, and reviews using GitHub for version control.",
    image: "/images/PulseLogo.png",
    gif: "",
    tags: ["C#", "JavaScript", "MySQL"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Customer Relationship Management",
    description: "Built a full-stack CRM web application using Django, Python, and MySQL featuring secure authentication and full CRUD functionality. Leveraged Django’s ORM to efficiently manage relational data and optimize database operations.",
    image: "/images/djangoCRM.png",
    gif: "/images/djangoCRM.gif",
    tags: ["Django", "Python", "MySQL"],
    demoUrl: "",
    githubUrl: "https://github.com/mdgarc22/django-crm",
  },
  {
    id: 5,
    title: "Florpy Birdy",
    description: "Created a 2D Unity game inspired by Flappy Bird, implementing collision detection, dynamic object spawning, and real-time score tracking using C#. Focused on game mechanics, performance, and gameplay flow.",
    image: "/images/florpy.png",
    gif: "/images/florpy.gif",
    tags: ["C#", "Unity"],
    demoUrl: "",
    githubUrl: "",
  },
];


export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-black text-black">
      <div className="container mx-auto max-w-full px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Featured Projects
        </h2>

        <p className="text-center text-white text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of my recent projects. Hovering on images will show a demo.
        </p>

        <div className="flex flex-col gap-8 w-full">
          {projects.map((project, key) => {
            const [isHovered, setIsHovered] = useState(false);
            const imageSrc =
              isHovered && project.gif ? `${baseUrl}${project.gif}` : `${baseUrl}${project.image}`;

            return (
              <div
                key={key}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full"
              >
                {/* Desktop Layout: Image left, Title & Description & Tags right */}
                <div className="hidden md:flex p-6 gap-6">
                  {/* Left Column: Image only */}
                  <div className="flex-shrink-0 w-1/2">
                    {/* Image Container */}
                    <div
                      className="w-full h-96 rounded-lg overflow-hidden bg-gray-900 flex items-center justify-center"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <img
                        src={imageSrc}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Right Column: Title, Description, and Tags */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold text-white text-center mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 text-base leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tags under description - centered */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.tags.map((tag, id) => (
                          <span
                            key={id}
                            className="px-3 py-1.5 text-sm font-medium border border-gray-600 rounded-full bg-gray-700 text-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Links for desktop - bottom left of right column */}
                    <div className="flex gap-4 mt-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <SiGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mobile Layout: Stacked */}
                <div className="md:hidden p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white text-center mb-4">
                    {project.title}
                  </h3>

                  {/* Image */}
                  <div
                    className="w-full h-72 rounded-lg overflow-hidden mb-4 bg-gray-900 flex items-center justify-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <img
                      src={imageSrc}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, id) => (
                      <span
                        key={id}
                        className="px-3 py-1.5 text-sm font-medium border border-gray-600 rounded-full bg-gray-700 text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Links for mobile */}
                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <SiGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-xl text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            target="_blank"
            href="https://github.com/mdgarc22"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
// export const Projects = () => {
//   return (
//     <section id="projects" className="py-24 px-4 relative bg-black text-black">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
//           Featured Projects
//         </h2>

//         <p className="text-center text-white text-muted-foreground mb-12 max-w-2xl mx-auto">
//           These are some of my recent projects. Hovering on images will show a demo.
//         </p>

//         <div className="flex justify-center">
//           <div className="grid gap-8 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project, key) => {
//               const [isHovered, setIsHovered] = useState(false);
//               const imageSrc =
//                 isHovered && project.gif ? `${baseUrl}${project.gif}` : `${baseUrl}${project.image}`;

//               return (
//                 <div
//                   key={key}
//                   className="group bg-card rounded-lg bg-[var(--color-gray)] overflow-hidden shadow-xs card-hover"
//                   onMouseEnter={() => setIsHovered(true)}
//                   onMouseLeave={() => setIsHovered(false)}
//                 >
//                   <div className="h-48 overflow-hidden">
//                     <img
//                       src={imageSrc}
//                       alt={project.title}
//                       className="w-full h-full object-contain px-5 transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>

//                   <div className="p-6">
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tags.map((tag, id) => (
//                         <span
//                           key={id}
//                           className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
//                     <p className="text-muted-foreground text-sm mb-4">
//                       {project.description}
//                     </p>
//                     <div className="flex justify-between items-center">
//                       <div className="flex space-x-3">
//                         {project.demoUrl && (
//                           <a
//                             href={project.demoUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                           >
//                             <ExternalLink size={20} />
//                           </a>
//                         )}
//                         {project.githubUrl && (
//                           <a
//                             href={project.githubUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                           >
//                             <SiGithub size={20} />
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="text-center mt-12">
//           <a
//             className="button bg-[var(--color-navy)] w-fit flex items-center mx-auto gap-2 bg-navy p-1.5 px-3 rounded-xl text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
//             target="_blank"
//             href="https://github.com/mdgarc22"
//           >
//             Check My Github <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };