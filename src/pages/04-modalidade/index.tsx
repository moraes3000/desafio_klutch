import Button from "../../components/Button";
import Cabecalho from "../../components/TelaHome/cabecalho";
import styles from "./modalidade.module.scss"
export default function Escolha() {
    return (
        <>
            <div className={styles.container}>
                <Cabecalho />
                <div className={styles.conteudo}>
                    <p>Escolha a modalidade:</p>
                    <Button name="Cartão de Crédito" bg='#228a95' color='#f8f8f8' />

                    <p><span className={styles.subparagraph}>Ou</span></p>

                    <Button name="Cartão Consiguidado" bg='#a7d0d5' color='#f8f8f8' />
                    <p><span>Em breve</span></p>
                </div>
            </div>
        </>
    )
}