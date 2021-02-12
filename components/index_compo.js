
import { Container, Row, Col, Carousel } from 'react-bootstrap'


import Carousel_compo from '../components/carousel_compo'




export default function Index_compo()
{
    return (
        <div>
           


            <Row>
                <Col id="indexcol" sm={4}>
                    <p><strong>INKTERPRETING</strong> is an
              established venture (ISO 9001:2015 Certified) in the field of Digital Marketing in India

We are one of Mumbai's best Digital Marketing company aims to build a great and flourishing business for its client. As a team, we believe in assisting our clients and providing the best user experience for their website and business growth. Our digital marketing expertise, with its effective strategies and progressive ideas, promises to turn your business into a successful name.</p>
                    <p><strong>WHY INKTERPRETING</strong>
                    <ul>
                            <li>We have executed the work as per client requirements, whether PPC, SMO, or SEO</li>
                            <li>We have clients from different sectors, and we generated good revenues for the clients</li>
                            <li>Our designers have successfully helped to get better results in creatives, which stands unique amongst the competitors</li>
                            <li>Our Development has tremendous knowledge to track each and everything in the confined zone</li>
                            <li>We develop your website SEO and mobile-friendly that reduces your SEO efforts</li>
                    </ul>
                    </p>

                </Col>
                <Col sm={7}>
                    <Carousel_compo />
                </Col>
            </Row>

           
        </div>
    )

}
