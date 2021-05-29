import styles from './header.module.scss'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpen = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu)
  }
  return (
    <>
      <header className={styles.container}>
        <button onClick={handleOpen}>  <IoMenu width='44px' /></button>

        <img src='logo.svg' alt='logo' />
        <div className={openMenu == false ? `${styles.fechado}` : `${styles.aberto}`}>
          <ul>
            <li><Link href='/'>01 - Home </Link></li>
            <li><Link href='/02-tabela'>02 - Valor Desejado</Link></li>
            <li><Link href='/03-busca-cliente'>03 - Busca cliente</Link></li>
            <li><Link href='/04-modalidade'>04 -Modalidade</Link></li>

            <li><Link href='/05-formulario'>05 - Solicitar Emprestimo</Link></li>
            <li><Link href='/06-formulario'>06 - Solicitar Emprestimo detalhes</Link></li>
            <li><Link href='/07-formulario'>07 - Emprestimo REalizado com sucesso</Link></li>
            <li><Link href='/08-comprovante'>08 - Detalher</Link></li>
          </ul>


        </div>
      </header>

    </>
  )
}
