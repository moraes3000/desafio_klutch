import Header from "../../components/Header"
import Cabecalho from "../../components/TelaHome/cabecalho"
import styles from './cliente.module.scss'

export default function Cliente() {
    return (
        <>
            <Header />

            <div className={styles.container}>
                <Cabecalho />
                <div className={styles.search}>
                    <h2>Busque o Cliente</h2>
                    <input type="text" placeholder='000.000.000-00' /><button>Buscar</button>

                </div>

                <div className={styles.detalhe}>
            
                    <h2>Cliente encontrado:</h2>
                    <h2 className={styles.cpf}>000.000.000-00</h2>
                    <button>Solicitar</button>
                </div>
            </div>
        </>
    )
}