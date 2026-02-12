export default function Services() {
    const services = [
        {
            icon: "las la-search-plus",
            title: "Research & Analysis",
            description: "User research, Competitive analysis, Usability testing, Heuristic evaluations, Data analysis for user behavior insights",
            delay: "150"
        },
        {
            icon: "las la-edit",
            title: "UI/UX Design",
            description: "Wireframing and prototyping (low-fidelity & high-fidelity), Responsive web design, Mobile app design, Dashboard UI design",
            delay: "250"
        },
        {
            icon: "las la-file-code",
            title: "Development",
            description: "Front-end development (HTML, CSS, JavaScript frameworks) Interactive prototype development",
            delay: "450"
        }
    ];

    return (
        <section id="services" className="full-height px-lg-5">
            <div className="container">
                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className="text-brand">SERVICES</h6>
                        <h1 className="mb-4">Services That I Provide</h1>
                    </div>
                </div>
                <div className="row gy-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={service.delay}>
                            <div className="service p-4 bg-base rounded-4 shadow-effect">
                                <div className="iconbox rounded-4">
                                    <i className={service.icon}></i>
                                </div>
                                <h5 className="mt-4 mb-2">{service.title}</h5>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
