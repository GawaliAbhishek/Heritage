import react from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/img1.jpg";
import courseImg2 from "../../assests/images/img1.jpg";
import courseImg3 from "../../assests/images/img1.jpg";
import Image1 from "../../assests/images/Trambak.jpg";
import Image2 from "../../assests/images/harihar4.jpg";
import Image3 from "../../assests/images/raighad3.jpg";
import Image4 from "../../assests/images/shaniwar wada3.jpg";
import Image5 from "../../assests/images/junnar2.jpg";
import Image6 from "../../assests/images/cst4.jpg";
import Image7 from "../../assests/images/ellora cave 3.jpg";
import Image8 from "../../assests/images/ajanta1.jpg";
import "./Sites.css";
import SiteCard from "./SiteCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const coursesData = [
    {
        id: "01",
        title: "Trambak",
        // lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: Image1,
    },

    {
        id: "02",
        title: "Harihar",
        // lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: Image2,
    },

    {
        id: "03",
        title: "Raigad",
        // lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: Image3,
    },
]
const Data2 = [
    {
        id: "04",
        title: "Shaniwar Wada",
        // lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: Image4,
    },
    {
        id: "05",
        title: "Junnar",
        // lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl:Image5,
    },
    {
        id: "06",
        title: "Chhatrapti Shivaji Maharaj",
        // lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: Image6,
    },
]
const data3 = [
    {
        id: "07",
        title: "Ellora Caves",
        // lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: Image7,
    },
    {
        id: "08",
        title: "Ajanta Caves",
        // lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: Image8,
    },
    {
        id: "09",
        title: "The India Gate is a war memories",
        // lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg3,
    },

];
const Sitecardpage = () => {

    return (
        <>
            <Header />
            <div style={{margin:'6rem',display:'flex',flexDirection:'column'}}>

                <div className="onediv" style={{ display: 'flex' }}>

                    {coursesData.map((item) => (
                        <Col lg="4" md="6" sm="6">
                            <SiteCard key={item.id} item={item} />
                        </Col>
                    ))}

                </div>
                <div className="onediv" style={{ display: 'flex' }}>

                    {Data2.map((item) => (
                        <Col lg="4" md="6" sm="6">
                            <SiteCard key={item.id} item={item} />
                        </Col>
                    ))}

                </div>
                <div className="onediv" style={{ display: 'flex' }}>

                    {data3.map((item) => (
                        <Col lg="4" md="6" sm="6">
                            <SiteCard key={item.id} item={item} />
                        </Col>
                    ))}

                </div>
            </div>
            <Footer />
        </>
    )
}
export default Sitecardpage;