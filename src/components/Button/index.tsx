import React from "react";
import styles from "./button.module.scss"
interface Props {
    name: string;
    color?: string;
    bg?: string;
    children?: React.ReactNode;
    onClick?: () => void;


}

const Button: React.FC<Props> = ({ name, bg, color, onClick, }) => {
    return (
        <button className={styles.button}
            onClick={onClick}
            style={{
                backgroundColor: bg,
                color: color,
            }}
        >
            {name}
        </button>
    );
}

export default Button;