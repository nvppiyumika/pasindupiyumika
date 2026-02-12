export default function Skills() {
    const skills = [
        { name: "Figma", percentage: 95, delay: "150" },
        { name: "Adobe XD", percentage: 95, delay: "150" },
        { name: "HTML5", percentage: 95, delay: "250" },
        { name: "CSS3", percentage: 90, delay: "250" },
        { name: "Photoshop", percentage: 85, delay: "350" },
        { name: "Wordpress", percentage: 70, delay: "350" },
        { name: "Canva", percentage: 70, delay: "450" },
        { name: "Java Script", percentage: 70, delay: "450" }
    ];

    return (
        <section id="skills" className="full-height px-lg-5">
            <div className="container">
                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className="text-brand">SKILLS</h6>
                        <h1 className="mb-4">Skills That I Have</h1>
                    </div>

                    <div className="row gy-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="col-md-6" data-aos="fade-up" data-aos-delay={skill.delay}>
                                <div className="progress-wrap">
                                    <h3>{skill.name}</h3>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            aria-valuenow={skill.percentage}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: `${skill.percentage}%` }}
                                        >
                                            <span>{skill.percentage}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
