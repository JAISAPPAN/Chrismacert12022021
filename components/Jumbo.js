
import {Image, Jumbotron,Nav,Row,Button} from 'react-bootstrap'
import style from '../styles/Home.module.css'
import Link from 'next/link'
export function JumboIndex() {
    return (
        <div >
            <Jumbotron className={style.jumboIndex}>
                <h1>AL JAZEERA Pipe Lines Construction Cont. LLC</h1>
                <h2 id="iso">ISO 9001:2015 CERTIFIED COMPANY</h2>
                <h3>Work Contracts and Material Supply</h3>
                <p>
                    (GRP,GRE,GRV PIPE FILAMENT AND DUEL HELICAL WINDED)
        </p>
                <p>

                    <Link href="/about"><a>Learn More About Us</a></Link>
                </p>
            </Jumbotron>
        </div>
    )
}


       


