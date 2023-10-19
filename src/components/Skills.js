import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depend on you.
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        },
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Compétence
                            </h2>
                            <p>Lors de ma formation j'ai pu acquerir certaine compétence comme la création et intégration de sites web et applications mobiles responsive, 
                            accessibles et répondant aux normes W3C. La création et gestion de bases de données, la programmation orientée objet. J'apprends également React JS.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Front-End</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>Back-End</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Maîtrise de l'anglais</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Image" />
                                    <h5>React JS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}