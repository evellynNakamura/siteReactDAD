import styles from './Setas.module.css'
import SetaEsquerda from '../../assets/SetaEsquerda'
import SetaDireita from '../../assets/SetaDireita'

export default function Setas() {
    return (
        <div className={styles.containerSetas}>
            <div className={styles.fundoSetas}><SetaEsquerda /></div>
            <div className={styles.fundoSetas} id={styles.setaDireita}><SetaDireita /></div>
        </div>
    )
}