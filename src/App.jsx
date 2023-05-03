import Router from "./routes/Router"
import { createGlobalStyle } from 'styled-components'
import GlobalState from "./contexts/GlobalState"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`

function App() {

  document.title = 'Pokedex'

  return (
    <>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  )
}

export default App
