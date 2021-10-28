import {Container, Row, Col} from 'react-bootstrap';
import "./Footer.css"
import twitter from "../../Assets/Icons/BrandTwitter.svg"
import Insta from "../../Assets/Icons/InstagramFilled.svg"
import Linked from "../../Assets/Icons/LinkedinOutlined.svg"

import {smoothScroll} from "../Header/Header"

function Footer(props) {
    return (
        <div className="footer">
            <Container>
                    <Row>
                        <Col md className="text-center">
                        <h1 className="Logo">QueryX</h1>
                        </Col>
                        <Col md className="text-center">
                            <div className="QuickLink">
                                <div>Quick Links</div>
                                <Row>
                                <Col md>
                                    <div onClick={()=>smoothScroll("home")}>Home</div>
                                    <div onClick={()=>smoothScroll("about")}>About Us</div>
                                    <div onClick={()=>smoothScroll("services")}>Services</div>
                                    <div>Contact Us</div>
                                </Col>
                                <Col md>
                                    <div>Terms and Conditions</div>
                                    <div>Privacy Policy</div>
                                    <div>Credits</div>
                                </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md className="text-center">
                            <div className="QuickLink">
                                <div>Socials</div>
                            <a href="/#"><img src={twitter} alt="twiiter" className="twitterF"/></a>
                            <a href="/#"><img src={Insta} alt="Insta" className="instagramF"/></a>
                            <a href="/#"><img src={Linked} alt="LinkedIn"className="linkedF"/></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
}

export default Footer;