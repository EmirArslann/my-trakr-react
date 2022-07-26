import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { StyledApp } from './components/styles.components';


function App() {
  return (
    <StyledApp color='red'>
      <Header />
      <Main />
    </StyledApp>
  );
}

export default App;
