import './App.css';
import Navbar from './components/Navbar';
import styled from "styled-components";
import Home from './pages/Home';
import Courses from './pages/Courses';

const Container = styled.div`
  background-color:#d6e3e9;
  height: 100vh;
`

function App() {
  return (
    <div className="App bg-my">
      <Navbar/>
      <Container className='mt-[65px]'>
        {/* <Home/> */}
        <Courses/>
      </Container>
    </div>
  );
}

export default App;
