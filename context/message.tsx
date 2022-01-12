import React, { useState, createContext, ReactChildren } from "react";
import Toast from "../components/atoms/Toast";


interface ToastProps {
    messageToSet: string,
    duration: number,
    success: boolean,
}

const MessageContext = createContext({ message: (props: ToastProps) => console.log(props) })

export const MessageProvider: React.FC = ({ children }) => {
    
    const [ show, setShow ] = useState<boolean>(false)
    const [duration, setDuration] = useState<number>(0)
    const [success, setSuccess] = useState<boolean>(false)
    const [messageToShow, setMessage] = useState<string>("")
    
    const message: (props: ToastProps) => void = ({ messageToSet, duration, success }) => {
        setShow(true)
        setMessage(messageToSet)
        setDuration(duration)
        setSuccess(success)
        setTimeout(() => {
            setShow(false)
        }, duration*1000)
    }

    return(
        <MessageContext.Provider value={{ message }}>
            {show && <Toast message={messageToShow} duration={duration} success={success}/>}
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContext