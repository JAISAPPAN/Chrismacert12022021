
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '../../utils/dbConnect'
import User from '../../models/User'
import { Card, Button } from 'react-bootstrap'
import Layout from '../../components/layout'

/* Allows you to view pet card info and delete pet card*/
const UserPage = ({ user }) =>
{
  const router = useRouter()
  const [message, setMessage] = useState('')
  const handleDelete = async () =>
  {
    const userID = router.query.id

    try
    {
      await fetch(`/api/users/${userID}`, {
        method: 'Delete',
      })
      router.push('/about')
    } catch (error)
    {
      setMessage('Failed to delete the user.')
    }
  }

  return (
    <div>
    <Layout>
    <div key={user._id} id="deleteuserfeedback">

      <Card>
        <Card.Header><h1>User Feedback</h1></Card.Header>
        <Card.Body>
          <Card.Title> <h3>{user.first_name} {user.last_name}</h3></Card.Title>
          <Card.Text>
            {user.feedback}
    </Card.Text>
          <footer>
            <div className="btn-container">

              <Link href="/[id]/edit" as={`/${user._id}/edit`}>
                <Button size="lg" className="btn edit">Edit</Button>
              </Link> 
              <Button size="lg" onClick={handleDelete}>
                    Delete
            </Button>
              {message && <p>{message}</p>}
            </div>
          </footer>
        </Card.Body>
      </Card>

    </div>
      </Layout>
    </div>
  )
}

export async function getServerSideProps({ params })
{
  await dbConnect()

  const user = await User.findById(params.id).lean()
  user._id = user._id.toString()

  return { props: { user } }
}

export default UserPage





