import Layout from '../components/layout'

import {Row,Table,Col} from 'react-bootstrap'






import style from '../styles/Home.module.css'
import { Abt_service_List } from '../components/abt_service_list'

export default function About() {
    return (
        <div>
        <Layout>
        <main>
        <Row>
                <Col id="abtcol" sm={5}><Abt_Content /></Col>
                <Col id="abtcol" sm={6}><GRE_Pipes /></Col>
        </Row>
            
            
            <Abt_service_List_Page/>
            
            </main>
        </Layout>
        </div>




    )
}

import React from 'react'

export  function GRE_Pipes() {
    return (
        <div>
        
            <h1>GRP PIPE INSTALLATION</h1>
            <p>Pipes could be installed above the ground, using a self restrained joint like hand lay up lamination, or pipes could be underground installed and the regular double bell coupling will be the standard joint. Underground installation could be by either: the traditional open trench method, or by micro-tunneling or jacking.</p>
            <br /><br />
            <h1>PIPE JOINT</h1>   
            <p>Standard GRP pipe jointing system includes: Double Bell Reka Coupling, Hand Lay Up, Flange, Flexible Steel Coupling, and Mechanical Steel Coupling. Double bell Reka coupling is the ideal joint normally offered for the non-restrained system, mainly used for under ground applications. Lamination or Flange is the typical joint for the restrained systems, used for above ground applications and pumping stations area.</p>
            </div>
    )
}


export function Abt_service_List_Page() {
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th> Service ID</th>
                        <th>Service Description</th>
                        
                    </tr>
                </thead>
                {Abt_service_List.map(list=>(
                <tbody>
                    <tr>
                        <td>{list.id}</td>
                        <td>{list.desc}</td>
                        
                    </tr>
                    
                </tbody>
                ))}
            </Table>
            
        </div>
    )
}


export function Abt_Content () {
    return (
        <div>
            <p>We deliver innovative, integrated technical solutions.Our work span across four major 
            industries(Oil & Gas,Industrial,Water and Manine & Offshore. </p>
            <p>Our strength is well qualified and trained staff. We deliver innovative, integrated technical solutions
</p>
<h1>Our expertise in jointing system includes</h1>
<ul>
    <li>Adhesive Bonded (Cemented) Joint</li>
    <li>Lamination Joint</li>
    <li>TigerWrap Lamination Joint</li>
                <li>Flanged Joint</li>
                <li>Rubber Seal Bell And Spigot Locked Joint</li>
                <li>Rubber Seal Bell And Spigot Joint</li>
                <li>Thraded Joint</li>
                <li>Double Bell Coupler Joint</li>
                <li>Restrained Joints</li>
</ul>
        </div>
    )
}

       
       
            
      
                   
             


      


