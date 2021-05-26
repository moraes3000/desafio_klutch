import styles from './telaHome.module.scss'


export default function TelaHome() {
  return (

    <div className={styles.container}>
      <img src="Grupo270.svg" alt='plus' className={styles.plus}/>
      <img src="_ionicons_svg_md-filing-2.svg" alt='plus' className={styles.envelopeicon}/>
      <h1>Simulação de Taxas</h1>
    </div>
  )
}