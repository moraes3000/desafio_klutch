import styles from './tabela.module.scss'
import lodash from 'lodash'
import { IsEmpty, Map } from "react-lodash"

import ListApi from '../../service/api'
export default function ConteudoTabela() {
    
    const array = [5, 18];
    return (
        <>
            <Map collection={array} iteratee={i =>
                <tr key={i}>
                    <td>{i}</td>
                    <td>{i}</td>
                    <td>{i}</td>
                    <td>{i}</td>
                    <td>{i}</td>
                </tr>} />

        </>



    )
}