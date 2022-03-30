import logo from "./logo.svg";
import "./App.css";
import Developers from "./components/card/developers.jsx";
function App() {
    const users = [
      
        {
        id:1,
        Dev: "Gabriel",
        Idade: 19,
        Pais: "Brasil"
        },
        {
        id:2, 
        Dev: "Filipe",
        Idade: 28,
        Pais: "Brasil"
        },
        {
        id:3,
        Dev: "Mariana",
        Idade: 24,
        Pais: "Itália"
        }
    ]


 
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-galery">
                    {users.map((pessoa)=>(
                          <Developers key={pessoa.id} name={pessoa.Dev} age={pessoa.Idade} country={pessoa.Pais}/>
                    ))}
                </div>
               
            </header>
        </div>
    );
}

export default App;
