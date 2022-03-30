import logo from "./logo.svg";
import "./App.css";
import Developers from "./components/card/developers.jsx";
function App() {
    const users = [
      
        {
        Dev: "Gabriel",
        Idade: 19,
        Pais: "Brasil"
        },
        {
        Dev: "Filipe",
        Idade: 28,
        Pais: "Brasil"
        },
        {
        Dev: "Mariana",
        Idade: 24,
        Pais: "Itália"
        }
    ]

 
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-galery">
                    <Developers name={users[0].Dev} age={users[0].Idade} country={users[0].Pais}/>
                    <Developers name={users[1].Dev} age={users[1].Idade} country={users[1].Pais}/>
                    <Developers name={users[2].Dev} age={users[2].Idade} country={users[2].Pais}/>
                    <Developers name={users[0].Dev} age={users[0].Idade} country={users[0].Pais}/>
                    <Developers name={users[1].Dev} age={users[1].Idade} country={users[1].Pais}/>
                    <Developers name={users[2].Dev} age={users[2].Idade} country={users[2].Pais}/>
                </div>
               
            </header>
        </div>
    );
}

export default App;
