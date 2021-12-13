import Inputs from "../Inputs"
import SubmitButton from "../../atoms/SubmitButton"

const ContactForm: React.FC = () => {
    return(
        <form style={{ background: "transparent" }}>
            <Inputs/>
            <SubmitButton />
        </form>
    )
}

export default ContactForm