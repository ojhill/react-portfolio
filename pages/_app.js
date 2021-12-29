import '../styles/globals.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
palette: {
  primary: {
    main: "#212529",
    light:"#212529",
  },
},
});
function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme ={theme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
