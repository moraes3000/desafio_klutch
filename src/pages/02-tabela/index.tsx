import Tabela from "../../components/Tabela";
import Cabecalho from "../../components/TelaHome/cabecalho";
import styles from './tabela.module.scss'
export default function ListaTabela() {
    return (
        <div className={styles.container}>
            
            <Cabecalho />
            <Tabela />
        </div>
    )
}