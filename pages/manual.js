import Head from 'next/head'
import styled from "styled-components";

import Header from '../components/Header'
import Link from "next/link";
const LayoutHome = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  height: 100vh !important;
  top: 56px;
  box-sizing: border-box;
  @media (max-width: 967px) {
		padding:0;
	}

`;
export default function Manual() {
  return (
    <div className="container">
      <Head>
        <title>Manual</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='/style.css' />
        <meta name='theme-color' content="#0176d5" />
      </Head>
      <Header/>

      <main>
        <LayoutHome>
           <div>
             <Link href="https://drive.google.com/file/d/1PYXFzJH9z0ao8_2y59CJZcrjLkPYy3x6/view?usp=sharing" prefetch={false}>
             <a>Manual</a>
             </Link>
           </div>
        </LayoutHome>
      </main>

     
    </div>
  )
}
