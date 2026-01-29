import styles from "./styles/AboutTitle.module.css";

export default function About() {
  return (
    <div>
      <section className={styles.section}>
        <span className={styles.sectionTitle}>About Us</span>
        <div className={styles.conceptBox}>
          <p className={styles.conceptLead}>
            「毎日を、昨日より少しだけ華やかに。」
          </p>
          <p>
            Blue Millefeuilleは、お花・アクセサリー・美容という
            <br />
            3つのエッセンスを重ね合わせ、心豊かなライフスタイルを提案しています。
            <br />
            <br />
            ミルフィーユの層が重なり合って一つの美味しさを作るように、
            <br />
            耳元に輝くイヤリング、部屋を彩る季節の花、そして内側から美しさを育む食習慣。
            <br />
            それらが調和したとき、あなたの日常には心地よい「きらめき」が生まれます。
          </p>
          <div className={styles.thinLine}></div>
          <p style={{ fontSize: "0.85rem", color: "#888" }}>
            完璧ではないからこその美しさ。
            <br />
            シャビーシックな思想を背景に、自然体な特別感を演出します。
          </p>
        </div>
      </section>
    </div>
  );
}
