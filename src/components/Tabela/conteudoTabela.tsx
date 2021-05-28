import styles from './tabela.module.scss'

var _ = require('lodash');
// import { IsEmpty, Map } from "react-lodash"
import DadosApi from '../../service/api'

export default function ConteudoTabela() {
    // const dailyExpenses = [4, 7, 3, 5, 6, 4, 7];
    console.log(DadosApi.rateTable)


    const dailyExpenses = DadosApi.rateTable

    return (
        <>
            {/* <Map collection={array} iteratee={i =>
                <tr key={i}>
                    <td>{i}</td>
                    <td>{i}</td>
                    <td>{i}</td>
                    <td>{i}</td>
                    <td>{i}</td>
                </tr>} /> */}

            <div>

                <tr>
                    {dailyExpenses.map(function (expense, index) {
                        return <tr key={index}>
                            <td>{expense.id}</td>
                            <td>{expense.name}</td>
                   
                        </tr>;
                    })}
                </tr>

                {/* <ul>
                    {dailyExpenses.map(function (expense, index) {
                        return <li key={index}>{expense}</li>;
                    })}
                    
                </ul> */}

            </div>


        </>



    )
}