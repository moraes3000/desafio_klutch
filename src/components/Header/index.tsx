import styles  from './header.module.scss'
import { IoMenu } from "react-icons/io5";

export default function Header(){
    return (
        <header  className={styles.container}>
          <IoMenu width='44px'/>
          <img src='logo.svg' alt='logo'/>
        </header>
    )
}