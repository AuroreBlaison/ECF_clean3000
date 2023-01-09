import Footer from './components/Footer';
import Header from './components/Header';
import NewPresta from './components/NewPresta';
import './stylesheets/App.scss';

function App() {

  return (
    <div className="App">
      <Header isHome={true}/>
      <NewPresta />
      <Footer />
    </div>
  );
}

export default App;
