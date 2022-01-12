import { ChangeEventHandler, useContext } from "react"
import LanguageContext from "../../../context/language"
import Dictionary from "../../../Dictionary"
import Input from "../../atoms/Input"
import TextArea from "../../atoms/TextArea"
import styles from "./index.module.scss"

interface Props {
    setters: {
        name: ChangeEventHandler<HTMLInputElement>, 
        phone: ChangeEventHandler<HTMLInputElement>,
        email: ChangeEventHandler<HTMLInputElement>,
        message: ChangeEventHandler<HTMLTextAreaElement>
    }
}

const Inputs: React.FC<Props> = ({ setters }) => {

    const { selectedLanguage } = useContext(LanguageContext) 

    return(
        <div className={styles.container}>
            <div className={styles.firstRow}>
                <Input span={12} onChange={setters.name} placeholder={Dictionary.name[selectedLanguage]}/>
                <Input span={12} onChange={setters.phone} placeholder={Dictionary.phone[selectedLanguage]}/>
            </div>
            <Input type="email" span={24} onChange={setters.email} placeholder="Email"/>
            <TextArea onChange={setters.message} span={24} />
        </div>
    )
}

export default Inputs