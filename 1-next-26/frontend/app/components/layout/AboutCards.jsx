import styles from "../layout/styles/AboutCards.module.css";
import Image from "next/image";

export default async function AboutCard({ items }) {
  return (
    <div style={{ backgroundColor: "#fcfcfc" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <span className={styles.sectionTitle}>Our Services</span>
        {items.map((item) => (
          <div key={item.id} className={styles.serviceItem}>
            <h3>{item.serviceTitle}</h3>

            {item.imgFirst === "" ? (
              <div className={styles.comingSoonContainer}>
                <div className={styles.comingSoonText}>
                  <span className={styles.en}>Coming Soon</span>
                  <span className={styles.jp}>
                    <a href={item.message[0].href} target="_blank">
                      <img
                        src={item.message[0].icon}
                        alt="Instagram"
                        width={24}
                        height={24}
                      />
                      {item.message[0].content}
                    </a>
                  </span>
                </div>
              </div>
            ) : (
              <div className={styles.serviceImageGroup}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.imgFirst}
                    alt="アクセサリー1"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.imgSecond}
                    alt="アクセサリー2"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.imgThird}
                    alt="アクセサリー3"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            )}
            <p>
              {item.serviceDescription.map((part, index) => {
                if (part.type === "text")
                  return (
                    <span key={index} className={styles.serviceDescription}>
                      {part.content}
                    </span>
                  );

                if (part.type === "link")
                  return (
                    <a
                      key={index}
                      href={part.href}
                      target="_blank"
                      className={styles.serviceDescription}
                    >
                      {part.icon && <img src={part.icon} width={18} />}
                      {part.content}
                    </a>
                  );
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
