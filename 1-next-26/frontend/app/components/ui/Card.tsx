import styles from "@/app/components/layout/styles/Card.module.css";
import Image from "next/image";

export default function Card({ items, className }) {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  return (
    <div className={className}>
      {items.map((item) => (
        <div key={item.id} className={styles.itemCard}>
          <div className={styles.itemWrapper}>
            <div className={styles.itemImage}>
              <a href={item.item_url} target="_blank">
                <img
                  src={`${BACKEND_URL}${item.img_src}`}
                  alt="小物1"
                  height={200}
                  width={200}
                />
                <p className={styles.description}>{item.description}</p>
              </a>
            </div>
            <div className={styles.itemName}>
              {item.item_name}
              <br />
              {item.item_category}
            </div>
            <div className={styles.item_price}>{item.itemPrice}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
