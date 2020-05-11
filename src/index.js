import React, {useState} from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'styled-components'
// import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components";
import { SignUpModal } from "./components";

import { GlobalStyle, DarkTheme, defaultTheme } from "./utils/";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const [ showModal, setShowModal ] = useState(false)

  return (
<ThemeProvider theme={useDarkTheme ? DarkTheme : defaultTheme}>
  <button style={{margin:'0 16px 24px', padding: '8px', background: 'none'}} onClick={() => setUseDarkTheme(true)}>Dark Theme</button>
  <button style={{margin:'0 16px 24px', padding: '8px', background: 'none'}} onClick={() => setUseDarkTheme(false)}>Default Theme</button>
  <button style={{margin:'0 16px 24px', padding: '8px', background: 'none'}} onClick={() => setShowModal(!showModal)}>Toggle Modal</button>
  <div style={{background: useDarkTheme ? defaultTheme.primaryColor : DarkTheme.primaryColor, width: '100vw', height: '100vh', display: 'flex', alignItems: "center", justifyContent: "space-around"}}>
  {/* <PrimaryButton >Bing</PrimaryButton>
  <SecondaryButton>bing</SecondaryButton>
  <TertiaryButton >bong</TertiaryButton> */}
  
  <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
  </div>
  <GlobalStyle />
</ThemeProvider>
)};

ReactDOM.render(<App />, document.querySelector("#root"));
