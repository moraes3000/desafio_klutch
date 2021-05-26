import { InputHTMLAttributes } from "react";
import styles from "./input.module.scss"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder: string;
    type?: string;
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <>
            <input name={props.name} placeholder={props.placeholder} type={props.type} className={styles.input} />
        </>

    )
}

export default Input;