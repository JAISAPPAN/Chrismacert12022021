//import Header from './Header'
//import NewUser from './new'

//import { JumboIndex } from '../components/Jumbo';
//import Footer from './Footer'
import Layout from '../components/layout'
import Form from '../components/Form'
import {Row,Button} from 'react-bootstrap'
import Link from 'next/link'

import BackButton from '../components/backButton';

const NewUser = () =>
{
    const userForm = {
        first_name: '',
        last_name: '',
        emailId: '',
        ph_number: '',
        feedback: '',

    }

    return <Form formId="enquiry-user-form" userForm={userForm} />
}




export default function ProductEnquiryPage() {
   

    return (
        <div>
            <Layout>
            <Row><BackButton/>
            
                <Link href="/"><Button className="ml-4 mr-5 btn-success">Home</Button></Link></Row>
            <NewUser />
            </Layout>
        </div>
    )
}


