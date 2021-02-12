
import {Image, Jumbotron,Nav,Row,Button} from 'react-bootstrap'
import style from '../styles/Home.module.css'
import Link from 'next/link'
export function JumboIndex() {
    return (
        <div >
            <Jumbotron className={style.jumboIndex}>
                <h1>INKTERPRETING</h1>
                <h2 id="iso">ISO 9001:2015 CERTIFIED COMPANY</h2>
                <h3>SPECIALISTS IN </h3>
                <p>
                    BRANDING STRATEGY | DIGITAL MARKETING CONSULTANCY | SEARCH ENGINE | SOCIAL MEDIA |
                    SEO | SOCIAL MEDIA MANAGEMENT | WEB DESIGN | WEB APPLICATIONS| CREATIVE DEVELOPEMENT |
                    MOBILE APP DEVELOPEMENT | INFLUNCER MARKETING | CONTENT CREATION | VIDEO CONTENT CREATION | 
                    AMAZON MARKETING | ONLINE REPUTATION MANAGEMENT | EMAIL MARKETING AND SMS MARKETING.
        </p>
                <p>

                    <Link href="/about"><a>Learn More About Us</a></Link>
                </p>
            </Jumbotron>
        </div>
    )
}


       


