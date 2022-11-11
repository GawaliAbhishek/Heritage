import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/img1.jpg";
import courseImg2 from "../../assests/images/img1.jpg";
import courseImg3 from "../../assests/images/img1.jpg";
import "./Sites.css";
import SiteCard from "./SiteCard";

const coursesData = [
  {
    id: "01",
    title: "The India Gate ",
    // lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "The India Gate ",
    // lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "The India Gate ",
    // lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Sites = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Popular Places</h2>
                <p>
                Our national history cannot be national if, in the near future, one in three young adults feels their stories remain untold, if this country's long global history of empire and interconnections is marginalised and if the historical reality of race is rendered almost invisible.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <SiteCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Sites;
