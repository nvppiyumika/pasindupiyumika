import { getAssetPath } from '@/utils/paths';

export default function About() {
    return (
        <section id="about" className="full-height px-lg-5">
            <div className="container">
                <div className="row pb-2" data-aos="fade-up">
                    <div className="col-lg-9">
                        <h6 className="text-brand">ABOUT ME</h6>
                        <h1 className="mb-4">About My Current Career & Goals</h1>

                        <p className="mt-2 mb-3" data-aos="fade-up" data-aos-delay="150">
                            I am a passionate UI/UX designer and front-end developer, dedicated to crafting visually appealing and user-centric digital experiences.
                            Currently pursuing a degree in Management Information Systems (MIS), I blend my academic knowledge with my creative skills to
                            design intuitive interfaces that prioritize both form and function. With a strong focus on understanding user needs and
                            delivering seamless interactions, I strive to create solutions that not only engage users but also align with business objectives.
                            My goal is to bridge the gap between design and functionality, ensuring every project stands out and delivers exceptional value.
                        </p>

                        <div className="row mt-2 mb-4" data-aos="fade-up" data-aos-delay="250">
                            <div className="col-md-12">
                                <a href="https://www.linkedin.com/in/pasindu-piyumika-6a74a1251/" className="btn2 me-3" target="_blank" rel="noopener noreferrer">
                                    <i className="lab la-linkedin-in"></i>
                                </a>
                                <a href="https://www.behance.net/pasindupiyumika" className="btn2 me-3" target="_blank" rel="noopener noreferrer">
                                    <i className="lab la-behance"></i>
                                </a>
                                <a href="https://github.com/nvppiyumika" className="btn2 me-3" target="_blank" rel="noopener noreferrer">
                                    <i className="lab la-github"></i>
                                </a>
                            </div>
                        </div>

                        <a href={getAssetPath('/assets/images/Pasindu Piyumika CV.pdf')} className="btn btn-brand me-3" data-aos="fade-up" data-aos-delay="300" download>
                            DOWNLOAD CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
