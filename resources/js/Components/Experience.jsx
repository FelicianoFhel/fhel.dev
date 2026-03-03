function Experience() {
    const jobs = [
        {
            role: 'Intelligent System Initiative',
            org: 'City College of Cagayan de Oro',
            period: 'Oct 2022 – Present',
            points: [
                'Create UI/UX Interface',
                'Develop AI to integrate into various systems/applications',
                'Integrate smart solution on the network',
                'Maintain system performance and troubleshoot integration issues',
                'Collaborated with developers and technical teams to identify system requirements and resolve deployment-related issues',
                'Develop web applications and integrate AI-driven solutions into existing systems',
            ],
        },
        {
            role: 'System AI Solution / System Administrator',
            org: 'Meldcx',
            period: 'Feb 2023 – Oct 2023',
            points: [
                'Analyze AI solution design and configure the system network',
                'Create AI solution proposals for clients',
                'Test AI cameras capabilities',
                'Monitor network performance',
            ],
        },
    ];

    return (
        <section id="experience" className="portfolio-section">
            <div className="portfolio-container">
                <h2 className="portfolio-section__title">Experience</h2>
                <div className="portfolio-timeline">
                    {jobs.map((job, i) => (
                        <article key={i} className="portfolio-timeline__item">
                            <div className="portfolio-timeline__header">
                                <h3>{job.role}</h3>
                                <p className="portfolio-timeline__org">{job.org}</p>
                                <p className="portfolio-timeline__period">{job.period}</p>
                            </div>
                            <ul className="portfolio-timeline__points">
                                {job.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
