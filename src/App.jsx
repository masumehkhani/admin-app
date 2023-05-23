import { ColorModeContext } from "./theme";
import { CssBaseline,ThemePimport, ThemeProvider } from "@mui/material";
function App() {
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}/>
    <CssBaseline/>
    <div className="app">
        <main className="content"></main>
    </div>
    </ColorModeContext.Provider>
   
  )
}

export default App
