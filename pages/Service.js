import {Row,Button} from 'react-bootstrap'
import Layout from '../components/layout'
import style from '../styles/Home.module.css'
import Service_Compo from '../components/service_compo'

export default function Service() {
    return (
        <div>
        <Layout>       
           
                <Row><Button variant="primary" size="lg" block>SERVICES OFFERED</Button></Row>
            <Service_Compo />
            
            
                 
                   
            
            
            </Layout> 
        </div>
    )
}

// <div className="headerbottomnojumbo">