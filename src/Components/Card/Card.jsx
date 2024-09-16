import styles from './Card.module.css'
import Coracao from '../../assets/Coracao'
import Olho from '../../assets/Olho'
import Estrela from '../Estrelas/Estrela'


export default function Card({ img, porcent, titulo, preco, precoAntigo, precoAntigoQuant, quantEstrela, avaliacao }) {
    return (
        <div className={styles.container}>
            <div className={styles.containerCinza}>

                <img className={styles.img} src={img} alt="" />

                <div className={styles.porcent}>-{porcent}%</div>
                
                <div className={styles.icons}>
                    <div className={styles.fundoIcons}>
                        <Coracao width={18} height={20}/>
                    </div>

                    <div className={styles.fundoIcons}>
                        <Olho />
                    </div>
                </div>
            </div>

            <div className={styles.informacoes}>
                <p className={styles.titulo}>{titulo}</p>

                <div className={styles.precos}>
                    <p className={styles.preco}>${preco}</p>
                    {precoAntigo ? <p className={styles.precoAntigo}>${precoAntigoQuant}</p> : null}
                </div>
            </div>

            <div className={styles.classificacao}>
                <Estrela quantEstrela={quantEstrela} />
                <p className={styles.avaliacao}>({avaliacao})</p>
            </div>
            

            
        </div>
    )
}