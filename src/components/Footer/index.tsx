import styles from './footer.module.scss'
export default function Footer(children) {
    return (
        <footer className={styles.containerfooter}>
            Nome: Tabela Padrão Parcelas: {children.parcela} Valor da Parcela:  {children.valorParcela} <button>Avançar</button>
        </footer>
    )
}