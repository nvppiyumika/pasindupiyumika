import Image from 'next/image';

export default function Blogs() {
    const blogs = [
        {
            image: "/pasindupiyumika/assets/images/Design Thinking.jpg",
            title: "Design Thinking in UI/UX",
            description: "Explore how design thinking helps teams create digital products that are not only functional, but deeply aligned with real user needs — using empathy, creativity, and constant feedback.",
            link: "https://dev.to/nvppiyumika/design-thinking-in-uiux-making-products-people-love-49pp",
            delay: "100"
        }
    ];

    return (
        <section id="blogs" className="full-height px-lg-5">
            <div className="container">
                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className="text-brand">BLOGS</h6>
                        <h1 className="mb-4">My Latest Articles & Writings</h1>
                    </div>
                </div>
                <div className="row gy-4">
                    {blogs.map((blog, index) => (
                        <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={blog.delay}>
                            <div className="card-custom rounded-4 bg-base shadow-effect">
                                <div className="card-custom-image rounded-4">
                                    <Image
                                        className="rounded-4"
                                        src={blog.image}
                                        alt={blog.title}
                                        width={400}
                                        height={300}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="card-custom-content p-4">
                                    <h4>{blog.title}</h4>
                                    <p>{blog.description}</p>
                                    <a href={blog.link} className="link-custom" target="_blank" rel="noopener noreferrer">
                                        Read More
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
