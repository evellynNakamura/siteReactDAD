import styles from './Header.module.css'
import Promotion from '../Promotion/Promotion'
import Lupa from '../../assets/Lupa'
import Coracao from '../../assets/Coracao'
import Carrinho from '../../assets/Carrinho'

// import styled from "styled-components"

// const HeaderPreco = styled.header`
//     background-color: #00f;
// `

export default function Header() {
    return (
        <header>
            <Promotion/>
            <div className={styles.cabecalho}>
                <h1>Exclusive</h1>
                <nav>
                    <ul className={styles.lista}>
                        <li className={styles.links}>Home</li>
                        <li className={styles.links}>Contact</li>
                        <li className={styles.links}>About</li>  
                        <li className={styles.links}>Sing Up</li>
                    </ul>
                </nav>
                <div className={styles.icons}>
                    <div className={styles.container}>
                        <input type="text" placeholder='What are you look for? ' className={styles.input}/>
                        <Lupa/>
                    </div>
                    <Coracao width={22} height={20}/>
                    <Carrinho/>
                </div>
            </div>
        </header>
    )
}