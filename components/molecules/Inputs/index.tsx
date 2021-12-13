import Input from "../../atoms/Input"
import TextArea from "../../atoms/TextArea"
import styles from "./index.module.scss"

const Inputs: React.FC = () => {
    return(
        <div className={styles.container}>
            <Input placeholder="Nombre"/>
            <Input placeholder="Telefono"/>
            <Input placeholder="Email"/>
            <TextArea />
        </div>
    )
}

export default Inputs