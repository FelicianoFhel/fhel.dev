const PROJECTS = [
    {
        title: 'City College of Cagayan de Oro Website',
        subtitle: 'Designed and developed the institution\'s official website with a dynamic CMS and AI integration, improving accessibility of academic information and digital services for students and staff.',
        role: 'Web App Developer',
        url: 'https://citycollegecdo.edu.ph',
        domain: 'citycollegecdo.edu.ph',
    },
    {
        title: 'SmartChive',
        subtitle: 'Designed and developed a centralized AI-powered repository system that streamlines document management and enables faster retrieval of institutional records across departments.',
        role: 'Web App Developer',
        url: 'https://smartchive.citycollegecdo.edu.ph',
        domain: 'smartchive.citycollegecdo.edu.ph',
    },
    {
        title: 'Attendium',
        subtitle: 'Designed and developed a faculty attendance management system with AI chatbot integration, reducing manual reporting and improving administrative efficiency.',
        role: 'Web App Developer',
        url: 'https://attendium.citycollegecdo.edu.ph',
        domain: 'attendium.citycollegecdo.edu.ph',
    },
    {
        title: 'Courseware',
        subtitle: 'Designed and developed a web-based courseware LMS platform enabling digital course delivery and streamlined access to learning materials.',
        role: 'Web App Developer',
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
