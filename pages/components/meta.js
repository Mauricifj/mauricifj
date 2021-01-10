import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
        <title>Maurici Ferreira Junior</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`This is my portfolio and resume`} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script src="https://kit.fontawesome.com/245389d3e8.js"></script>
    </Head>
  )
}