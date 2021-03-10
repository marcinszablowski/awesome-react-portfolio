import '../styles/globals.css'

//Component responsible for rendering all the other pages
function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
