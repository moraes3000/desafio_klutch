import styles from './tabela.module.scss'
import ConteudoTabela from './conteudoTabela'

export default function Tabela() {
    return (

        <div className={styles.telaTabela}>

            <table>
                <thead>
                    <tr>
                        <th colSpan={5} >
                            <h2>Tabela Padrão</h2>
                        </th>
                    </tr>
                    <tr>
                        <th>Parcela</th>
                        <th>Juros da Parcela</th>
                        <th>Valor Parcela</th>
                        <th>Valor Total</th>
                        <th>Comissão Parceiro</th>
                    </tr>
                </thead>
                <tbody>

                    <ConteudoTabela />
                </tbody>

            </table>


        </div>

    )
}