import Head from "next/head";
import ListProducts from "../components/ListProducts";
import Header from "../components/Header";
import HomeContainer from "../components/HomeContainer";
import CartLayout from "../components/CartLayout";
import FilterContainer from "../components/FilterContainer";
export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/style.css" />
        <meta name="theme-color" content="#0176d5" />
      </Head>

      <main>
        <Header  />
        <HomeContainer>
          <ListProducts />
        </HomeContainer>
        <CartLayout />
      </main>
    </div>
  );
}
