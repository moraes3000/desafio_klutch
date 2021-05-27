import Footer from '../Footer'
import Tabela from '../Tabela'
import Cabecalho from './cabecalho'
import styles from './telaHome.module.scss'


export default function TelaHome() {
  return (
    <>
      <div className={styles.container}>
    
        <Cabecalho />
        <div className={styles.telaHomeMain}>
          <h2>Valor desejado</h2>
          <input type='number' />
          <button type='submit' placeholder='R$ 0,00'>Calcular</button>
        </div>

        {/* <Tabela /> */}

      </div>
      {/* <Footer /> */}
    </>
  )
}