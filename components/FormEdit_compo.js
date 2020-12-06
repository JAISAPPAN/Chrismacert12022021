import {Form,Button} from 'react-bootstrap'

export default function FormEdit() {
    return (
        <div>
            <Form edit-user-form >
                <Form.Group controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="first_name" placeholder="First Name" />
                </Form.Group>

                <Form.Group controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="last_name" type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group controlId="emailId">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name="emailId" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                            </Form.Text>
                </Form.Group>

                <Form.Group controlId="ph_number">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name="ph_number" type="text" placeholder="Phone Number" />
                </Form.Group>

                             
                <Button  variant="primary" type="submit">
                    Submit
                        </Button>
            </Form>
        </div>
    )
}
