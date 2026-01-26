import styles from "@/app/components/layout/styles/Card.module.css";
import Image from "next/image";

export default function Card({ items, className }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <div key={item.id} className={styles.itemCard}>
          <div className={styles.itemWrapper}>
            <div className={styles.itemImage}>
              <a href={item.itemUrl} target="_blank">
                <Image src={item.imgSrc} alt="小物1" height={200} width={200} />
                <p className={styles.description}>{item.description}</p>
              </a>
            </div>
            <div className={styles.itemName}>
              {item.itemName}
              <br />
              {item.itemCategory}
            </div>
            <div className={styles.itemPrice}>{item.itemPrice}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
