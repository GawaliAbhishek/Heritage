import React from "react";
import { Container, Row, Col } from "reactstrap";

const Company = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <i class="ri-ancient-pavilion-line"></i> Nashik
            </h3>
          </Col>

          

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <i class="ri-ancient-pavilion-line"></i> Pune
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-ancient-pavilion-line"></i> Nagpur
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-ancient-pavilion-line"></i> Achalpur
            </h3>
          </Col>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <i class="ri-ancient-pavilion-line"></i> Aurangabad
            </h3>
          </Col>
          

        </Row>
      </Container>
    </section>
  );
};

export default Company;
