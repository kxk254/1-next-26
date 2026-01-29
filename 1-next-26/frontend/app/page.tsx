import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";
import Card from "./components/ui/Card";
import styles from "./page.module.css";

//import { headers } from "next/headers";

async function getProducts() {
  // const headersList = await headers();
  //const host = headersList.get("host");
  //const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  //const res = await fetch(`${protocol}://${host}/api/home`, {
  //  cache: "no-store",
  //});
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/home`, {
    cache: "no-store",
  });
  const products = await res.json();
  // return only first 3
  return products.slice(0, 3);
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <Header />
      <Hero />
      <Card items={products} className={styles.itemsGrid} />
      <Footer />
    </div>
  );
}
