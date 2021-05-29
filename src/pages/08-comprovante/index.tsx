import Cabecalho from '../../components/TelaHome/cabecalho';
import styles from './comprovante.module.scss';
export default function comprovante() {
    return (
        <div className={styles.container}>
            <Cabecalho />

            <div className={styles.row}>
                <div className={styles.conteudo}>
                    <div>
                        <h2>Solicitação gerada por <b>Sistema Credfica</b></h2>
                    </div>
                    <div className={styles.row}>
                        <div>
                            <p> Valor total <br/><b> R$ 6.000,00</b></p>
                        </div>
                        <div>
                            <p> Valor a depositar <br/><b> R$ 6.000,00</b></p>
                        </div>
                    </div>
                </div>
                <div className={styles.conteudo}>
                    <div>
                        <h2>Fluxo da Solicitação: <b>Manual</b></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}