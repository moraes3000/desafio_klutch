import Footer from '../Footer'
import Tabela from '../Tabela'
import Cabecalho from './cabecalho'
import styles from './telaHome.module.scss'


export default function TelaHome() {
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.telaHomeHeader}>
          <img src="Grupo270.svg" alt='plus' className={styles.plus} />
          <img src="_ionicons_svg_md-filing-2.svg" alt='plus' className={styles.envelopeicon} />
          <h1>Simulação de Taxas</h1>
        </div> */}
        <Cabecalho />
        <div className={styles.telaHomeMain}>
          <h2>Valor desejado</h2>
          <input type='number' />
          <button type='submit' placeholder='R$ 0,00'>Calcular</button>
        </div>

        <Tabela />

      </div>
      <Footer />
    </>
  )
}