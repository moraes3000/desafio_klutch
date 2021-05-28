import styles from './tabela.module.scss'
import ConteudoTabela from './conteudoTabela'
import DadosApi from '../../service/api'
export default function Tabela() {
    const Lista = DadosApi.rateTable
    
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
              
        
                        {Lista.map(item => {
                            return (
                                               
                                <>{item.installments.map(subitem => {
                                    return (
                                        <tr key={subitem.id}>
                                            <td>{subitem.id}</td>
                                            <td>{subitem.installmentValue}</td>
                                            <td>{subitem.installmentInterest}</td>
                                            <td>{subitem.fullValue}</td>
                                            <td>{subitem.comission}</td>
                                        </tr>
                                    )
                                })}</>
                                
                            )
                        })}
                   

                   
             

            </table>
         

        </div>

    )
}