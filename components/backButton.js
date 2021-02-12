import {Button} from 'react-bootstrap'
import {useRouter} from 'next/router'

export default function BackButton()
{
    const router = useRouter()

    return <Button className="btn-success ml-auto"onClick={() => router.back()}>Click here to go back</Button>
}