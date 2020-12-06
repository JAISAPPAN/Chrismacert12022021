
import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'
import {Form,Button} from 'react-bootstrap'

const FormMain = ({ formId, userForm, forNewUser = true }) =>
{
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    first_name: userForm.first_name,
    last_name: userForm.last_name,
    emailId: userForm.emailId,
    ph_number: userForm.ph_number

  })

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) =>
  {
    const { id } = router.query

    try
    {
      const res = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok)
      {
        throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/users/${id}`, data, false) // Update the local data without a revalidation
      router.push('/')
    } catch (error)
    {
      setMessage('Failed to update user')
    }
  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) =>
  {
    try
    {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok)
      {
        throw new Error(res.status)
      }

      router.push('/')
    } catch (error)
    {
      setMessage('Failed to add user')
    }
  }

  const handleChange = (e) =>
  {
    const target = e.target
    const value =
      target.name === 'poddy_trained' ? target.checked : target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) =>
  {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0)
    {
      forNewUser ? postData(form) : putData(form)
    } else
    {
      setErrors({ errs })
    }
  }

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () =>
  {
    let err = {}
    if (!form.first_name) err.first_name = 'First Name is required'
    if (!form.last_name) err.last_name = 'Last Name is required'
    if (!form.ph_number) err.ph_number = 'Phone Number is required'

    return err
  }


  return (
    <>
      <Form id={formId} onSubmit={handleSubmit}>
        <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="first_name"
            value={form.first_name} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="last_name" type="text" 
            value={form.last_name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="emailId">
          <Form.Label>Email Address</Form.Label>
          <Form.Control name="emailId" type="email" 
            value={form.emailId} onChange={handleChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
                            </Form.Text>
        </Form.Group>

        <Form.Group controlId="ph_number">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name="ph_number" type="text" 
            value={form.ph_number} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="ph_number">
          <Form.Label>Feedback/Enquiry</Form.Label>
          <Form.Control name="feedback" as="textarea" rows={7}
            value={form.feedback} onChange={handleChange} />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
                        </Button>
      </Form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}

export default FormMain

















// import { useState } from 'react'
// import { useRouter } from 'next/router'
// import { mutate } from 'swr'
// //import {Form,Button} from 'react-bootstrap'

// const Form = ({ formId, userForm, forNewUser = true }) =>
// {
//   const router = useRouter()
//   const contentType = 'application/json'
//   const [errors, setErrors] = useState({})
//   const [message, setMessage] = useState('')

//   const [form, setForm] = useState({
//     first_name: userForm.first_name,
//     last_name: userForm.last_name,
//     emailId: userForm.emailId,
//     ph_number: userForm.ph_number

//   })

//   /* The PUT method edits an existing entry in the mongodb database. */
//   const putData = async (form) =>
//   {
//     const { id } = router.query

//     try
//     {
//       const res = await fetch(`/api/users/${id}`, {
//         method: 'PUT',
//         headers: {
//           Accept: contentType,
//           'Content-Type': contentType,
//         },
//         body: JSON.stringify(form),
//       })

//       // Throw error with status code in case Fetch API req failed
//       if (!res.ok)
//       {
//         throw new Error(res.status)
//       }

//       const { data } = await res.json()

//       mutate(`/api/users/${id}`, data, false) // Update the local data without a revalidation
//       router.push('/')
//     } catch (error)
//     {
//       setMessage('Failed to update user')
//     }
//   }

//   /* The POST method adds a new entry in the mongodb database. */
//   const postData = async (form) =>
//   {
//     try
//     {
//       const res = await fetch('/api/users', {
//         method: 'POST',
//         headers: {
//           Accept: contentType,
//           'Content-Type': contentType,
//         },
//         body: JSON.stringify(form),
//       })

//       // Throw error with status code in case Fetch API req failed
//       if (!res.ok)
//       {
//         throw new Error(res.status)
//       }

//       router.push('/')
//     } catch (error)
//     {
//       setMessage('Failed to add user')
//     }
//   }

//   const handleChange = (e) =>
//   {
//     const target = e.target
//     const value =
//       target.name === 'poddy_trained' ? target.checked : target.value
//     const name = target.name

//     setForm({
//       ...form,
//       [name]: value,
//     })
//   }

//   const handleSubmit = (e) =>
//   {
//     e.preventDefault()
//     const errs = formValidate()
//     if (Object.keys(errs).length === 0)
//     {
//       forNewUser ? postData(form) : putData(form)
//     } else
//     {
//       setErrors({ errs })
//     }
//   }

//   /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
//   const formValidate = () =>
//   {
//     let err = {}
//     if (!form.first_name) err.first_name = 'First Name is required'
//     if (!form.last_name) err.last_name = 'Last Name is required'
//     if (!form.ph_number) err.ph_number = 'Phone Number is required'

//     return err
//   }


//   return (
//     <>
//       <form id={formId} onSubmit={handleSubmit}>
//         <label htmlFor="first_name">First Name</label>
//         <input
//           type="text"
//           maxLength="20"
//           name="first_name"
//           value={form.first_name}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="last_name">Last Name</label>
//         <input
//           type="text"
//           maxLength="20"
//           name="last_name"
//           value={form.last_name}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="emailId">Email </label>
//         <input
//           type="text"
//           maxLength="30"
//           name="emailId"
//           value={form.emailId}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="ph_number">Phone Number</label>
//         <input
//           type="text"
//           name="ph_number"
//           value={form.ph_number}
//           onChange={handleChange}
//         />



//         <button type="submit" className="btn">
//           Submit
//         </button>
//       </form>
//       <p>{message}</p>
//       <div>
//         {Object.keys(errors).map((err, index) => (
//           <li key={index}>{err}</li>
//         ))}
//       </div>
//     </>
//   )
// }

// export default Form
