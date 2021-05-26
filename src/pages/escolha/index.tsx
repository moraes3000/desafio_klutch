import Button from "../../components/Button";
import styles from "./escape.module.scss"
export default function Escolha() {
    return (
        <>
            <p>Escolha a modalidade:</p>
            <Button name="Cartão de Crédito" />
            <br />
            <p>Ou</p>
            <br />
            <Button name="Cartão Consiguidado" />
        </>
    )
}