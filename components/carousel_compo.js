import {Carousel,Card,Button} from 'react-bootstrap'
import {List_Images} from '../components/list_images'
import Link from 'next/link'

import React from 'react'

export default function Carousel_compo() {
    return (
        <div>
            <Link href="/productEnquiryPage" passHref ><Button variant="primary">Get A Free Audit</Button></Link> 
            <Carousel>
            {
                List_Images.map(lst=>(
                    <Carousel.Item interval={2000}>
                        <Card>
                            <Card.Header as="h3">{lst.header}</Card.Header>
                            <Card.Img variant="top" src={lst.url} />
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                               
                            </Card.Body>
                        </Card>
                       
                       
                    </Carousel.Item>

                ))

            }
                
            </Carousel>

        </div>
    )
}


// <Carousel>
//     {
//         List_Images.map(lst => (
//             <Carousel.Item interval={2000}>
//                 <img
//                     className="d-block w-100 h-18"
//                     src={lst.url}
//                 />

//             </Carousel.Item>

//         ))

//     }

// </Carousel>
