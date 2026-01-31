import AboutTitle from "../components/layout/AboutTitle";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutCard from "../components/layout/AboutCards";
//import { headers } from "next/headers";

async function getProducts() {
  //  const headersList = await headers();
  //  const host = headersList.get("host");
  //  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  //  const res = await fetch(`${protocol}://${host}/api/about`, {
  //    cache: "no-store",
  //  });
  //
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/getAbout`, {
    cache: "no-store",
  });
  const products = await res.json();
  // return only first 3
  return products.slice(0, 3);
}

export default async function About() {
  const abouts = await getProducts();
  return (
    <div>
      <Header />
      <AboutTitle />
      <AboutCard items={abouts} />
      <Footer />
    </div>
  );
}
