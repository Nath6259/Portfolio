import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projDaft from "../assets/img/Daft-project.png";
import projCv from "../assets/img/Cv-project.png";
import projChatbot from "../assets/img/Chabot-project.png";
import projTea from "../assets/img/tea-project.png";
import projFiv from "../assets/img/Fiverr-clone.png";
import projAitext from "../assets/img/ai-text-to-image.png";
import projSoon from "../assets/img/Simple_synthwave_dark_abstract_mystical_logo_pink_purp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    
    const projects = [
        {
            title: "Projet de fin de formation",
            description: "Development & Design",
            imgUrl: projDaft,
            lien: "https://nath6259.github.io/Daft-punk-discographie",
            nlien: "Daft Punk discographie",
        },
        {
            title: "Mon premier site CV",
            description: "Design & Development",
            imgUrl: projCv,
            lien: "https://nath6259.github.io/CV/",
            nlien: "Premier site CV",
        },
        {
            title: "ChatBot",
            description: "Design & Development",
            imgUrl: projChatbot,
            lien: "https://nath6259.github.io/chat-bot/",
            nlien: "Mon ChatBot",
        },
        {
            title: "Maquette TeaStation",
            description: "Design & Development",
            imgUrl: projTea,
            lien: "https://nath6259.github.io/tea-station/",
            nlien: "TeaStation",
        },
        {
            title: "Clone de Fiverr",
            description: "Design & Development",
            imgUrl: projFiv,
            lien: "https://nath6259.github.io/Clone-fiverr/",
            nlien: "Clone Fiverr",
        },
        {
            title: "Génération d'image par IA",
            description: "Design & Development",
            imgUrl: projAitext,
            lien: "https://nath6259.github.io/text-to-image/",
            nlien: "Text to Image",
        },
    ];

    const tab2 = [
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
    ];

    const tab3 = [
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
        {
            title: "Coming Soon",
            imgUrl: projSoon,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__bounce" : "" }>
                        <h2>Projets</h2>
                        <p>Ici, vous trouverez les différents projets que j'ai réalisés et uploader.</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        tab2.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        tab3.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}