function Skills() {
    const general = [
        'Customer Support / IT Support',
        'DNS Management',
        'Web App Development',
        'AI Integration',
    ];
    const tech = [
        { label: 'Frameworks', items: ['Laravel'] },
        { label: 'Libraries', items: ['React.JS', 'Javascript'] },
        { label: 'Languages', items: ['PHP'] },
        { label: 'Databases', items: ['MySQL', 'Supabase'] },
        { label: 'Tools', items: ['cPanel', 'Github'] },
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
