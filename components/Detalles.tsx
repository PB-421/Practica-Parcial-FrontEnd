import { Meanings } from "../routes/buscar/[palabra].tsx";

type data = {
    palabra: string,
    meanings: Meanings[]
}


export default function Detalles({palabra,meanings}:data) {
    return (
        <div>
            <h1>{palabra.toUpperCase()}</h1>
            {meanings.map((elem,index) => <li key={index}>
                <h3>Tipo: {elem.partOfSpeech}</h3>
                <h4>Definiciones:</h4>
                    {elem.definitions.map((elem,index) => <li key={index}>
                        <p>Definicion: {elem.definition}</p>
                        {elem.example && <p>Ejemplo: {elem.example}</p>}
                    </li>)}
                    <h4>Sinonimos:</h4>
                    {elem.synonyms.map((elem,index) => <li key={index}><a href={"../buscar/"+elem}>{elem}</a></li>)}

                    <h4>Antonimos:</h4>
                    {elem.antonyms.map((elem,index) => <li key={index}><a href={"../buscar/"+elem}>{elem}</a></li>)}
            </li>)}
            <a href={"../"}>Volver</a>
        </div>
    )
}