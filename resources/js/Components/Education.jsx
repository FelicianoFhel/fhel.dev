function Education() {
    return (
        <section id="education" className="portfolio-section">
            <div className="portfolio-container">
                <h2 className="portfolio-section__title">Education</h2>
                <div className="portfolio-education">
                    <p className="portfolio-education__org">University of Science and Technology of Southern Philippines</p>
                    <p className="portfolio-education__course">Bachelor of Science in Information Technology – 2022</p>
                    <ul className="portfolio-education__list">
                        <li>Dean&apos;s Lister 1st Honor – 2022</li>
                        <li>Dean&apos;s Lister 2nd Honor – 2021</li>
                    </ul>
                    <p className="portfolio-education__org">FS Catanico National High School</p>
                    <ul className="portfolio-education__list">
                        <li>Class Valedictorian – 2016</li>
                    </ul>
                </div>
                <div className="portfolio-awards">
                    <h3>Awards</h3>
                    <p className="portfolio-awards__org">City College of Cagayan de Oro:</p>
                    <ul className="portfolio-awards__list">
                        <li>Top 1 Administrative Employee of 2026</li>
                        <li>Top 2 Employee 2025</li>
                        <li>Top 1 Employee 2024</li>
                    </ul>
                </div>
                <div className="portfolio-credentials">
                    <h3>Credentials & documents</h3>
                    <p className="portfolio-credentials__lead">Resume and academic records (PDF):</p>
                    <div className="portfolio-credentials__links">
                        <a
                            href="/documents/resume.pdf"
                            className="portfolio-credentials__link"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            Resume (CV)
                        </a>
                        <a
                            href="/documents/diploma-tor.pdf"
                            className="portfolio-credentials__link"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            Diploma & TOR
                        </a>
                    </div>
                </div>
                <div className="portfolio-languages">
                    <h3>Languages</h3>
                    <p>English · Filipino</p>
                </div>
            </div>
        </section>
    );
}

export default Education;
