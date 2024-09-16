import styles from './Section.module.css'
import Time from '../Time/Time'
import Setas from '../Setas/Setas'
import BotaoPequeno from '../BotaoPequeno/BotaoPequeno'
import Card from '../Card/Card'
import { imgsFlash } from '../../../public/Sections/data'

export default function Section({ 
    title, subtitle, time, seta, botao, porcent, cardProduto, nomeProd, preco, precoAntigo, precoAntigoQuant, quantEstrela, avaliacao }) {
    return (
        <div className={styles.container}>
            <div className={styles.cabecalho}>

                <div className={styles.titSubContainer}>
                    <div className={styles.subtitulo}>
                        <div className={styles.rediv}></div>
                        <p className={styles.txtsubtitle}>{subtitle}</p>
                    </div>
                    <h1 className={styles.title}>{title}</h1>
                </div>

                {time ? <Time dia="02" hora="04" minuto="02" segundo="57" /> : null}

                {seta ? <Setas/> : null}

                {botao ? <BotaoPequeno /> : null}
            </div>

            <div className={styles.cards}>
                {cardProduto && imgsFlash && imgsFlash.length > 0 ? (
                imgsFlash.map((imgFlash, index) => (
                <Card
                    img={imgFlash.url}
                    porcent={imgFlash.porcent}
                    titulo={nomeProd}
                    preco={preco}
                    precoAntigo={precoAntigo}
                    precoAntigoQuant={precoAntigoQuant}
                    quantEstrela={quantEstrela}
                    avaliacao={avaliacao}
                    key={index} 
                />
                ))
            ) : null}
            </div>

        </div>
    )
}
