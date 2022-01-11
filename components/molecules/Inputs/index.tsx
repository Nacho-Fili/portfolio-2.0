import { useContext } from "react"
import LanguageContext from "../../../context/language"
import Dictionary from "../../../Dictionary"
import Input from "../../atoms/Input"
import TextArea from "../../atoms/TextArea"
import styles from "./index.module.scss"

const Inputs: React.FC = () => {

    const { selectedLanguage } = useContext(LanguageContext) 

    return(
        <div className={styles.container}>
            <div className={styles.firstRow}>
                <Input span={12} placeholder={Dictionary.name[selectedLanguage]}/>
                <Input span={12} placeholder={Dictionary.phone[selectedLanguage]}/>
            </div>
            <Input span={24} placeholder="Email"/>
            <TextArea span={24} />
        </div>
    )
}

export default Inputs