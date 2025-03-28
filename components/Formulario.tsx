


export default function Formulario() {

    return (
        <div class="FormContainer">
            <form class="Formulario" method="GET" target="/">
                <input style={{margin: "10px 10px"}} name="Palabra" type="text" placeholder="escribe una palabra" />
                <button style={{margin: "10px 10px"}} type="submit">Enviar</button>
            </form>
        </div>
    )
}