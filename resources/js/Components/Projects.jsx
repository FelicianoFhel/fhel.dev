const PROJECTS = [
    {
        title: 'City College of Cagayan de Oro Website',
        subtitle: 'City College of CDO Website with Smart DynamicContent Management System with AI Integration',
        role: 'Semi Full Stack Developer/Main Front End',
        url: 'https://citycollegecdo.edu.ph',
        domain: 'citycollegecdo.edu.ph',
    },
    {
        title: 'SmartChive',
        subtitle: 'Smart Centralized Repository of City College of CDO with AI Integration',
        role: 'Full Stack Developer',
        url: 'https://smartchive.citycollegecdo.edu.ph',
        domain: 'smartchive.citycollegecdo.edu.ph',
    },
    {
        title: 'Attendium',
        subtitle: 'Faculty Attendance Management System for CCCDO with AI Chatbot Integration',
        role: 'Front End Developer',
        url: 'https://attendium.citycollegecdo.edu.ph',
        domain: 'attendium.citycollegecdo.edu.ph',
    },
    {
        title: 'Courseware',
        subtitle: 'International Courseware Platform / Learning Management System',
        role: 'Front End Developer',
        url: 'https://courseware.citycollegecdo.edu.ph',
        domain: 'courseware.citycollegecdo.edu.ph',
    },
];

function ProjectCard({ project }) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card"
        >
            <span className="portfolio-card__role">{project.role}</span>
            <h3 className="portfolio-card__title">{project.title}</h3>
            <p className="portfolio-card__subtitle">{project.subtitle}</p>
            <span className="portfolio-card__link">{project.domain} ↗</span>
        </a>
    );
}

function Projects() {
    return (
        <section id="projects" className="portfolio-section portfolio-section--alt">
            <div className="portfolio-container">
                <h2 className="portfolio-section__title">Projects</h2>
                <p className="portfolio-section__lead">Production systems I’ve built or contributed to.</p>
                <div className="portfolio-projects">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
