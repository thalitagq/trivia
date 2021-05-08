import {Container, Grid, StylesProvider } from "@material-ui/core";
import Routes from './routes'

function App() {
  return (
    <StylesProvider injectFirst>
      <Container maxWidth='md'>
        <Grid 
          container 
          style={{ padding: '1rem' }}
          justify='center'
          alignItems='center'
          direction='column'
        >
        <Routes/>
        </Grid>
      </Container>
    </StylesProvider>
  );
}

export default App;
