import {Nav,Navbar,Container,Row,Col,NavDropdown,Button} from 'react-bootstrap'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="footer">
            <Container >
                <Row>
                    <Col sm={3}>
                    
                        <div>
                            <h5 id="footer_h5">Links</h5>
                            <ul className="list-unstyled">
                                <li><Link href="/" passHref><Nav.Link>Home</Nav.Link></Link></li> 
                                <li><Link href="/About" passHref ><Nav.Link >About US</Nav.Link></Link></li>
                                <li><Link href="/Service" passHref ><Nav.Link >Services</Nav.Link></Link></li>
                                <li><Link href="/Contact" passHref><Nav.Link >Contact Us</Nav.Link></Link></li>  
                                
                                
                            </ul>
                        </div> 
                    
                    </Col> 
                    <Col sm={4}>
                        <div>
                            <h5>Our Address</h5>
                            <h6>AL JAZEERA Pipe Lines Cinstruction Cont. LLC</h6>
                            <address>
                                P.o. BOX 7117<br />
		              AJMAN<br /> UNITED ARAB EMIRATES<br />
                      
                                <i className="fa fa-phone fa-lg"></i>: +971-558046299.<br />
                                <i className="fa fa-whatsapp fa-lg"></i>:+971-563337725.<br />
                                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:jleenachen@gmail.com">
                                </a><br />
                               
                            </address>
                        </div>

                    </Col>
                    <Col sm={5}>

                        <div>
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <div className="copyright">

                        <p>© Copyright 2020 Manna Software</p>

                    </div>
                </Row>

            </Container>


        </div>
    )
}             

                   
                               

                           

                    
                    



// <li><Link to="/aboutus">About Us</Link></li>
//                                 <li><Link to="/menu">Menu</Link></li>
//                                 <li><Link to="/contactus">Contact Us</Link></li>
