import {Row,Button} from 'react-bootstrap'
import Layout from '../components/layout'
import style from '../styles/Home.module.css'
import BrochureOne,{BrochureTwo} from '../components/brochure'

export default function Service() {
    return (
        <div>
        <Layout>       
           
            <Row><Button variant="primary" size="lg" block>OUR PRODUCTS & SERVICES</Button></Row>
            <BrochureOne />
            
            
                 
                   
            
            
            </Layout> 
        </div>
    )
}

// <div className="headerbottomnojumbo">