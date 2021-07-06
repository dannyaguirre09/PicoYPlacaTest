import Head from 'next/head'
import Form from '../components/Form'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Pico Y Placa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Form />
    </div>
  )
}
