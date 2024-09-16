import styles from './Promotion.module.css'


function Promotion(){
    return(
        <div className={styles.promotion}>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <a className={styles.shop} href="">ShopNow</a>

            <select className={styles.dropdown} name="" id="" >
                <option className={styles.opcao} value="english">English</option>
                <option className={styles.opcao} value="portuguese">Portuguese</option>
            </select>
        </div>
    )
}

export default Promotion;