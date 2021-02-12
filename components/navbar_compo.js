import { Navbar,Nav,Figure, NavbarBrand,Button } from "react-bootstrap"
import { JumboIndex } from '../components/Jumbo';
import Link from 'next/link'
import Header from '../components/header'

export default function Navbar_compo() {
    return (
        <div>
            <Header />
            <Navbar bg="primary" variant="dark" width="100%">
                <Navbar.Brand href="/">
                    <Figure>
                        <Figure.Image
                            width={350}
                            height={200}
                           
                            src="./logo.png"
                        />
                       
                    </Figure>
                
                </Navbar.Brand>
               
                <Nav className="mr-auto">
                    <Link href="/" passHref ><Button size="lg">Home</Button></Link>
                    <Link href="/about" passHref ><Button size="lg">About Us</Button></Link>
                    <Link href="/Service" passHref ><Button size="lg">Services</Button></Link>
                    <Link href="/Contact" passHref ><Button size="lg">Contact Us</Button></Link>
                    <Link href="/enquiry_details" passHref ><Button size="lg">Enquiry Details</Button></Link>
                    
                </Nav>
               
             
            </Navbar>
           
            <JumboIndex/>
        </div>
    )
}



