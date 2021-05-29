import { useState } from 'react'
import Footer from '../Footer'
import Tabela from '../Tabela'
import ConteudoTabela from '../Tabela/conteudoTabela'
import Cabecalho from './cabecalho'
import styles from './telaHome.module.scss'


export default function TelaHome() {
  const [valorEmprestimo, setValorEmprestimo] = useState(0)
  const mensagem1= 'valor abaixo'
  const mensagem2= 'valor muito acima do limite'

 
  function verificaValor(event) {
    event.preventDefault();
    console.log({
      valorEmprestimo,
    })
    if (valorEmprestimo <= 300) {      
      return alert(mensagem1)
    }
    if (valorEmprestimo >= 10000) {  
      return alert(mensagem2)
    }  
  }

  return (
    <>
      <div className={styles.container}>

        <Cabecalho />
        <form className={styles.telaHomeMain} onSubmit={verificaValor}>
          <h2>Valor desejado</h2>
          <input type='number' placeholder='R$ 0,00' value={valorEmprestimo} onChange={event => setValorEmprestimo(Number(event.target.value))} />
          <button type='submit'>Calcular</button>
        </form> 
      </div>
     
      {/* <Footer /> */}
    </>
  )
}