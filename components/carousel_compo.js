import {Carousel} from 'react-bootstrap'
import {List_Images} from '../components/list_images'

import React from 'react'

export default function Carousel_compo() {
    return (
        <div>
            
            <Carousel>
            {
                List_Images.map(lst=>(
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-20"
                            src={lst.url}                       
                        />
                       
                    </Carousel.Item>

                ))

            }
                
            </Carousel>

        </div>
    )
}


