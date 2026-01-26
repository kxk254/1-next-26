import styles from "./styles/Hero.module.css";

export default function Hero() {
	return (
		<>
	<section className={styles.hero}>
    		<div className={styles.heroText}>
        	<h1>日常に、そっときらめきを・・・・</h1> 
		<p style={{fontSize: "0.8rem", color: "#222", letterSpacing: "0.3em"}}>
            		Your "Everyday" with a hint of special.
        	</p>
    		</div>
    	</section>

	<section className={styles.sectionPadding}>
    <span className={styles.conceptTitle}>Concept</span>
    <div className={styles.conceptBody}>
        <p>
            どんなお洋服にも自然になじみながら、<br />
            耳元に小さな幸せを運ぶイヤリング。<br />
            毎日を少しだけ華やかにしてくれる、<br />
            きらめくお守りのような存在です。       
	    </p>
        <p style={{marginTop: "40px", color: "#707070"}}>
            あなたの“いつも”に、さりげない特別を・・・・
        </p>
    </div>
</section>
    </>

	);
}
