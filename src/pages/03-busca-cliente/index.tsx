import { useState } from "react"
import Header from "../../components/Header"
import Cabecalho from "../../components/TelaHome/cabecalho"
import styles from './buscaCliente.module.scss'
const _ = require("lodash");
import DadosApi from '../../service/api'
const Lista = DadosApi.client


interface ClienteProps {
    id: number;
    name: string;
    phone: boolean;
    cpf: string;
}



export default function Cliente() {
    const [usuarioCPF, setUsuarioCPF] = useState(0)
    // const [usuario, setUsuario] = useState()
    const [cliente, setCliente] = useState<ClienteProps[]>([]);


    function verificaCPF(event) {
        event.preventDefault();

        const usuario = _.filter(Lista, { 'cpf': String(usuarioCPF) });

      
        // console.log(usuario);

        // console.log(typeof (usuario));

        // {Lista.map(item =>{
        //    console.log(`${item.name} ${item.cpf} ${item.id}`)
        // })}



    }


    return (

        <>


            <div className={styles.container}>
                <Cabecalho />
                <form className={styles.search} onSubmit={verificaCPF}>
                    <h2>Busque o Cliente</h2>
                    <input type="text" placeholder='000.000.000-00' value={usuarioCPF} onChange={event => setUsuarioCPF(Number(event.target.value))} />
                    <button>Buscar</button>

                </form>

                <div className={styles.detalhe}>

                    <h2></h2>
                    <h2 className={styles.cpf}>000.000.000-00</h2>
                    <button>Solicitar</button>
                </div>


            </div>
        </>
    )
}