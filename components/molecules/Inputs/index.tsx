import Input from "../../atoms/Input"
import TextArea from "../../atoms/TextArea"
import styles from "./index.module.scss"

const Inputs: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.firstRow}>
                <Input span={12} placeholder="Nombre"/>
                <Input span={12} placeholder="Telefono"/>
            </div>
            <Input span={24} placeholder="Email"/>
            <TextArea span={24} />
        </div>
    )
}

export default Inputs