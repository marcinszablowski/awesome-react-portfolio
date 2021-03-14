import {Row, Col, Container} from "reactstrap";
import Typed from 'react-typed';

import BaseLayout from "../components/layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout className="cover">
      {/*Everything inside BaseLayout is passed as props.children to BaseLayout component*/}
      <div className="main-section">
        <div className="background-image">
          <img src="/images/background-index.png"/>
        </div>

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <img className="image" src="/images/section-1.jpg"/>
                    <div className="shadow-custom">
                      <div className="shadow-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome to the portfolio website of Filip Jerga.
                  Get informed, collaborate and discover projects I was working on through the years!
                </h1>
                <Typed
                  loop
                  strings={[
                    'React',
                    'Angular',
                    'Vue',
                    'Svelte']}
                  typeSpeed={70}
                  backSpeed={70}
                  backDelay={1000}
                  showCursor
                  cursorChar="|"
                  className="self-typed"
                >
                </Typed>
              </div>
              <div className="hero-welcome-bio">
                <h2>
                  Let's take a look at my work.
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  )
};
