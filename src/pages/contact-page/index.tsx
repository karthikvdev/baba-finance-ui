import { Link } from "react-router-dom"
import { TextField } from "../../components/textfield"


export const ContactUsPage = () => {
    return (
        <div>
            <form>
                <TextField placeholder="Name *" />
                <TextField placeholder="Email *" type="email" />
                <TextField placeholder="Phone *" type="number" />
                <Link to={"/"}>Home Page</Link>
            </form>
        </div>
    )
}