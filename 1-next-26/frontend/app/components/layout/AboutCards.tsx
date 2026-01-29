import styles from "../layout/styles/AboutCards.module.css";
import Image from "next/image";

type Message = {
  content: string;
  href?: string | null;
  icon?: string | null;
};

type ServiceDescription = {
  type_choice: "text" | "link";
  content: string;
  href?: string | null;
  icon?: string | null;
};

type Product = {
  id: number;
  service_title: string;
  img_first: string;
  img_second: string;
  img_third: string;
  messages: Message[];
  descriptions: ServiceDescription[];
};

type CardProps = {
  items: Product[];
};

export default async function AboutCard({ items }: CardProps) {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
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
            <h3>{item.service_title}</h3>

            {item.img_first === null ? (
              <div className={styles.comingSoonContainer}>
                <div className={styles.comingSoonText}>
                  <span className={styles.en}>Coming Soon</span>
                  <span className={styles.jp}>
                    {item.messages?.length > 0 && item.messages[0].href ? (
                      <a href={item.messages[0].href} target="_blank">
                        {item.messages[0].icon && (
                          <img
                            src={`${BACKEND_URL}${item.messages[0].icon}`}
                            alt="Instagram"
                            width={24}
                          />
                        )}
                        {item.messages[0].content}
                      </a>
                    ) : null}
                  </span>
                </div>
              </div>
            ) : (
              <div className={styles.serviceImageGroup}>
                <div className={styles.imageWrapper}>
                  <img
                    src={`${BACKEND_URL}${item.img_first}`}
                    alt="アクセサリー1"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    src={`${BACKEND_URL}${item.img_second}`}
                    alt="アクセサリー2"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    src={`${BACKEND_URL}${item.img_third}`}
                    alt="アクセサリー3"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            )}
            <p>
              {item.descriptions.map((part, index) => {
                if (part.type_choice === "text")
                  return (
                    <span key={index} className={styles.serviceDescription}>
                      {part.content}
                    </span>
                  );

                if (part.type_choice === "link" && part.href)
                  return (
                    <a
                      key={index}
                      href={part.href}
                      target="_blank"
                      className={styles.serviceDescription}
                    >
                      {part.icon && (
                        <img src={`${BACKEND_URL}${part.icon}`} width={18} />
                      )}
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
