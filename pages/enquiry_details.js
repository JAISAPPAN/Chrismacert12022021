
import Navbar_compo from '../components/navbar_compo'
import Layout from '../components/layout'
//import Enquiry_details_compo from '../components/enquiry_details_compo'


import Link from 'next/link'
import dbConnect from '../utils/dbConnect'
import User from '../models/User'
import {Table} from 'react-bootstrap'

const Index = ({ users }) => (
  <div>
   
    <Layout>
    
     
       
      
          <Table striped bordered hover variant="dark">
         
            <thead>
            <tr>
               
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
            <th>Feedback</th>
            </tr>
            </thead>
      {users.map(user => (
            <tbody>
       
              <tr>
               
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.emailId}</td>
                <td>{user.ph_number}</td>
              <td>{user.feedback}</td>
                <td><Link href="/[id]/edit" as={`/${user._id}/edit`}>
              <button className="btn edit">Edit</button>
                </Link></td>
                <td> <Link href="/[id]" as={`/${user._id}`}>
                  <button className="btn view">View</button>
                </Link></td>
            </tr>
              
            </tbody>

      ))
      }
          </Table>         

              
            
      
    </Layout>

  </div>
)


export async function getServerSideProps()
{
  await dbConnect()


  const result = await User.find({})
  const users = result.map((doc) =>
  {
    const user = doc.toObject()
    user._id = user._id.toString()
    return user
  })

  return { props: { users: users } }
}

export default Index


// import Navbar_compo from '../components/navbar_compo'
// import Footer from './Footer'
// import { JumboIndex } from '../components/Jumbo'
// //import Enquiry_details_compo from '../components/enquiry_details_compo'


// import Link from 'next/link'
// import dbConnect from '../utils/dbConnect'
// import User from '../models/User'

// const Index = ({ users }) => (
//   <div>

//     <Navbar_compo />
//     <JumboIndex />

//     {users.map((user) => (
//       <div key={user._id}>
//         <div className="card">

//           <h5 className="pet-name">{user.first_name}</h5>
//           <div className="main-content">
//             <p className="pet-name">{user.first_name}</p>
//             <p className="owner">Owner: {user.last_name}</p>

//             {/* Extra Pet Info: Likes and Dislikes */}


//             <div className="btn-container">
//               <Link href="/[id]/edit" as={`/${user._id}/edit`}>
//                 <button className="btn edit">Edit</button>
//               </Link>
//               <Link href="/[id]" as={`/${user._id}`}>
//                 <button className="btn view">View</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))
//     }
//     <Footer />

//   </div>
// )


// export async function getServerSideProps()
// {
//   await dbConnect()


//   const result = await User.find({})
//   const users = result.map((doc) =>
//   {
//     const user = doc.toObject()
//     user._id = user._id.toString()
//     return user
//   })

//   return { props: { users: users } }
// }

// export default Index
  
 
  

