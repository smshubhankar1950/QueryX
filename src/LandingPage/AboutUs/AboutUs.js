import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import "./AboutUs.css"
import consult from "../../Assets/Images/consulting.jpg"

function AboutUs(props) {
    return (
        <div style={{minHeight:"70vh",height:"100%"}} id="about">
        <Container>
        <Row> <div className="headerAbout"> Who are we? </div></Row>
        <div style={{margin:"3em 0em 3em"}}>
            <Row>
                <Col lg={6}>
                    <img src={consult} alt="consulting" width="80%" height="100%"></img>
                </Col>
                <Col lg={6}>
                    <Stack gap={3}>
                        <div>
                            <div className="About">About Us</div>
                            <div className="AboutContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et sem sit amet nibh condimentum pellentesque. 
                    Nullam in justo in dui interdum volutpat eget vel felis. Morbi condimentum ex efficitur erat viverra, non consequat urna dictum.
                    Praesent et vestibulum turpis. Suspendisse lectus ligula, auctor ac enim vitae, ultrices congue tortor. Duis a risus quis
                    tortor interdum dignissim eu quis tellus. Donec condimentum leo nunc, at venenatis leo tincidunt in. Vestibulum accumsan 
                    scelerisque felis, a tristique lectus hendrerit vel. Mauris fringilla metus et pellentesque egestas. Suspendisse sed neque feugiat, 
                    dictum dolor ut, interdum orci. Nullam quis nulla justo. Vestibulum malesuada aliquam justo et placerat.</div>
                        </div>
                        <div> 
                        <Row>
                            <Col>
                              <span className="stat">800+</span> Clients Helped
                            </Col>
                            <Col md={6}>
                            <span className="stat">99%</span>  Success rate
                            </Col>
                        </Row>
                        </div>
                    </Stack>
                </Col>
            </Row>
        </div>
        </Container>
        </div>
    );
}

export default AboutUs;