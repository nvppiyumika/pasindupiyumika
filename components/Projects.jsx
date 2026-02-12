import Image from 'next/image';

export default function Projects() {
    const projects = [
        {
            image: "/assets/images/Spa Ceylon.png",
            title: "Spa Ceylon Mobile App Design",
            description: "A seamless e-commerce experience for Spa Ceylon's luxury wellness brand.",
            link: "https://www.behance.net/gallery/229642263/Spa-Ceylon-Mobile-App-Design",
            delay: "100"
        },
        {
            image: "/assets/images/Soil Boost.jpg",
            title: "Soil Boost Web App Design",
            description: "Platform for seamless fertilizer distribution connecting suppliers and buyers effortlessly.",
            link: "https://www.behance.net/gallery/224613901/SoilBoost-Web-Application",
            delay: "150"
        },
        {
            image: "/assets/images/Eventhub.jpg",
            title: "EventHub Web Design",
            description: "Platform for seamless event planning and hassle-free ticket booking.",
            link: "https://www.behance.net/gallery/220429605/EventHub-Event-Planning-Ticket-Booking-Platform",
            delay: "200"
        },
        {
            image: "/assets/images/Combank redesign.png",
            title: "Combank Digital App",
            description: "Combank Digital App redesign to improve user experience and accessibility.",
            link: "https://www.behance.net/gallery/218825435/Combank-Digital-App-Redesign",
            delay: "100"
        },
        {
            image: "/assets/images/Teasy pay.png",
            title: "T-easy Pay Mobile App Design",
            description: "Mobile Ticket Booking & Train Tracking Mobile Platform UI Design",
            link: "https://www.behance.net/gallery/210470719/T-Easy-Pay-Train-Ticket-Booking-and-Tracking-Platform",
            delay: "150"
        },
        {
            image: "/assets/images/Heal Me.png",
            title: "Heal Me Mobile App Design",
            description: "Mental Healthcare & Fitness Tracking Mobile Platform UI Design",
            link: "https://www.behance.net/gallery/211011107/HealMe-Mental-Healthcare-Fitness-Tracking-App-Design",
            delay: "200"
        },
        {
            image: "/assets/images/Railways redesign.png",
            title: "Sri Lanka Railways Website",
            description: "Sri Lanka Railway website redesign to improve user experience and accessibility.",
            link: "https://www.behance.net/gallery/214813825/Sri-Lanka-Railways-Website-Redesign",
            delay: "100"
        }
    ];

    return (
        <section id="projects" className="full-height px-lg-5">
            <div className="container">
                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className="text-brand">PROJECTS</h6>
                        <h1 className="mb-4">My Recent Projects</h1>
                    </div>
                </div>

                <div className="row gy-4">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={project.delay}>
                            <div className="card-custom rounded-4 bg-base shadow-effect">
                                <div className="card-custom-image rounded-4">
                                    <Image
                                        className="rounded-4"
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="card-custom-content p-4">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <a href={project.link} className="link-custom" target="_blank" rel="noopener noreferrer">
                                        See in Behance
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
