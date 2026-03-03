function Skills() {
    const general = [
        'Full Stack Development',
        'cPanel & Hosting Environment Management',
        'Technical Documentation & Customer Communication',
        'PC Hardware & Software Troubleshooting',
        'Network Configuration & Installation',
    ];
    const tech = [
        { label: 'Frameworks', items: ['Laravel'] },
        { label: 'Libraries', items: ['React', 'jQuery'] },
        { label: 'CSS / UI', items: ['Bootstrap'] },
        { label: 'Languages', items: ['PHP', 'JavaScript', 'HTML5', 'CSS3'] },
        { label: 'Databases', items: ['MySQL', 'Supabase'] },
        {
            label: 'Network Specialist',
            items: [
                'Troubleshoot and install network infrastructure',
                'Network maintenance, multiple WAN setup + AP',
            ],
        },
        { label: 'Tools', items: ['cPanel', 'DNS Zone Editor', 'SSL Installation', 'FTP / File Manager'] },
    ];

    return (
        <section id="skills" className="portfolio-section portfolio-section--alt">
            <div className="portfolio-container">
                <h2 className="portfolio-section__title">Skills</h2>
                <div className="portfolio-skills">
                    <div className="portfolio-skills__general">
                        <h3>General</h3>
                        <ul>
                            {general.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="portfolio-skills__tech">
                        {tech.map(({ label, items }) => (
                            <div key={label} className="portfolio-skills__group">
                                <h3>{label}</h3>
                                <div className="portfolio-skills__tags">
                                    {items.map((item) => (
                                        <span key={item} className="portfolio-tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
