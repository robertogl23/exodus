import React,{useEffect} from "react";
import Head from "next/head";
import fetch from 'isomorphic-unfetch';
import Header from "../components/Header";
import CartLayout from "../components/CartLayout";
import ProductSelected from "../components/ProductSelected";
function Poduct(props,context) {
  useEffect(() => {
    console.log(context.query)
  }, [])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/style.css" />
        <meta name="theme-color" content="#0176d5" />
      </Head>
      <Header />

      <ProductSelected product={[props[0]]}/>
      <CartLayout />
    </div>
  );
}
Poduct.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://exodus-apiv1.herokuapp.com/api/v1/find/productos/${id}`);
  const product = await res.json();
  console.log(product)
  return product.productDB
};
export default Poduct;
