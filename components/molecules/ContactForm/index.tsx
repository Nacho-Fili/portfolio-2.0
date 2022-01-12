import Inputs from "../Inputs"
import SubmitButton from "../../atoms/SubmitButton"
import React, { ChangeEventHandler, FormEventHandler, useContext, useState } from "react"
import api from "./api"
import Loader from "../../atoms/Loader"
import MessageContext from "../../../context/message"

type settersType = {
    name: ChangeEventHandler<HTMLInputElement>,
    phone: ChangeEventHandler<HTMLInputElement>,
    email: ChangeEventHandler<HTMLInputElement>,
    message: ChangeEventHandler<HTMLTextAreaElement>,
}

const ContactForm: React.FC = () => {

    const { message: messageToast } = useContext(MessageContext)

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const setters: settersType = {
        name: (e) => setName(e.target.value),
        phone: (e) => setPhone(e.target.value),
        email: (e) => setEmail(e.target.value),
        message: (e) => setMessage(e.target.value),
    }

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (!name.trim().length){
            messageToast({ messageToSet: "Name field can't be empty", duration: 3, success: false})
            return
        }
        if (!message.trim().length){
            messageToast({ messageToSet: "Message field can't be empty", duration: 3, success: false})
            return
        }
        if(!phone.trim().length && email.trim().length) {
            messageToast({ messageToSet: "Phone or email can't be empty simultaneously", duration: 3, success: false})
            return
        }
        setLoading(true)
        api.sendEmail({
            sender: name,
            message,
            phone,
            email,
        })
            .then(() => messageToast({ messageToSet: "The message has been sent", duration: 3, success: true}))
            .catch(() => messageToast({ messageToSet: "There was an error sending the email", duration: 3, success: false}))
            .finally(() => {
                setEmail("")
                setPhone("")
                setName("")
                setMessage("")
                setLoading(false)
            })
    }

    if (loading) return <Loader />

    return(
        <form onSubmit={handleSubmit} style={{ background: "transparent" }}>
            <Inputs setters={setters}/>
            <SubmitButton />
        </form>
    )
}

export default ContactForm