import Head from 'next/head'
import Header from '../components/Header'
import HomeContainer from '../components/HomeContainer'
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
        <HomeContainer>
            <button onClick={() => alert('Aun no esta listo :(')}>Descargar Manual</button>
        </HomeContainer>
      </main>

     
    </div>
  )
}
