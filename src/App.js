import './App.css';
import Header from './organisms/Header/Header';
import Footer from './organisms/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>  
  );
}

export default App;
