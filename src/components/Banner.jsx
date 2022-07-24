import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/image/header-img.svg"

export const Banner = () => {
return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className={"isVisible" ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Judy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">Hello</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            
                <div className={"isVisible" ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}