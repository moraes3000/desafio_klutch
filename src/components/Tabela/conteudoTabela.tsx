import styles from './tabela.module.scss'

var _ = require('lodash');
// import { IsEmpty, Map } from "react-lodash"
import DadosApi from '../../service/api'

export default function ConteudoTabela() {
    // const dailyExpenses = [4, 7, 3, 5, 6, 4, 7];
    // console.log(DadosApi.rateTable)

    console.log(DadosApi.rateTable)

    const Lista = DadosApi.rateTable
  
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


            {/* 
                <tr>
                    {dailyExpenses.map(function (expense, index) {
                        return <tr key={index}>
                            <td>{expense.id}</td>
                            <td>{expense.name}</td>
                           
                        </tr>;
                    })}
                </tr> */}
            {/* {Lista.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.installments.map(subitem=>{
                                return (
                                    <tr key={subitem.id}>{subitem.id}</tr>
                                )
                            })}</td>
                        </tr>
                    )
                })} */}


            {/* {Lista.map(item => {
                    return (
                        // <tr key={item.id}>                    
                        <tr>{item.installments.map(subitem => {
                            return (
                                <tr key={subitem.id}>
                                    <td>{subitem.id}</td>
                                    <td>{subitem.installmentValue}</td>
                                    <td>{subitem.installmentInterest}</td>
                                    <td>{subitem.fullValue}</td>
                                    <td>{subitem.comission}</td>
                                </tr>
                            )
                        })}</tr>
                        // </tr>
                    )
                })} */}



            {/* <ul>
                    {dailyExpenses.map(function (expense, index) {
                        return <li key={index}>{expense}</li>;
                    })}
                    
                </ul> */}

        aa
        </>



    )
}