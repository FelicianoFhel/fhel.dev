function Hero() {
    return (
        <section id="hero" className="portfolio-hero">
            <div className="portfolio-hero__spline">
                <iframe
                    src="https://my.spline.design/robotfollowcursorforlandingpage-IJtPzxDQCnY2L0FMK8s8h9yj/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    title="3D Robot"
                />
            </div>
            <div className="portfolio-hero__cta-wrap">
                <a
                    href="#contact"
                    className="portfolio-cta portfolio-hero__cta"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Get in touch
                </a>
            </div>
        </section>
    );
}

export default Hero;
