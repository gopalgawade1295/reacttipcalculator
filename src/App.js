import './App.css';
import { Typography, Container, Box, Paper } from '@material-ui/core'
import Reacttipcalculator from './components/Reacttipcalculator';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <Box bgcolor="primary.main">
            <Typography variant="h4" style={{ color: 'white', textAlign: 'center' }}>Tip Calculator</Typography>
          </Box>
          <Reacttipcalculator />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
