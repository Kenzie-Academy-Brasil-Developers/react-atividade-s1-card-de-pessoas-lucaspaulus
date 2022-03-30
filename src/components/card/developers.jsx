import "./index.css"
function Developers({name, age, country}){
    return(
        <div className="card">
            <h1>Dev: {name}</h1>
            <p>Idade: {age}</p>
            <p>País: {country}</p>
        </div>
    )
}

export default Developers