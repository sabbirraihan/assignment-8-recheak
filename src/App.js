
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <h1>

        Q.1.How to react work ??? <br />
        <br />
        Ans : React goes through its virtual DOM, creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. < br />

        Q.2.how to usestate work ? <br />

        <br />
        Ans : useState is a Hook that allows you to have state variables in functional components


      </h1>
    </div>
  );
}

export default App;
