import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/Trambak.jpg";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Trambakeshwar Nashik</h2>
              <p>
              Trimbakeshwar Temple is a religious centre having one of the twelve Jyotirlingas . The city of Trimbakeshwar is located at the foot of Brahamagiri hill ,height of which is 3000 feet above sea level. Trimbakeshwar Temple is maintained by Trimbakeshwar Temple Trust. They have constructed Shivprasad Bhakta Niwas which is having 24 rooms, conference hall, lift, hot water facilities.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/dR6MDlPu8xg"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
