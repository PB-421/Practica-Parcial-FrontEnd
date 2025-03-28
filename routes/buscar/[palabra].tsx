import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Detalles from "../../components/Detalles.tsx"


type Response = {
    word: string
    meanings: Meanings[]
}

export type Meanings = {
    partOfSpeech: string,
    definitions: Definitions[],
    synonyms: string[],
    antonyms: string[]
}

export type Definitions = {
    definition: string,
    example?: string
}

export const handler:Handlers<Response> = {
    GET: async (_req: Request,ctx: FreshContext<unknown,Response>) => {
        const {palabra} = ctx.params
        const data = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+palabra)
        if(data){
        const Response = await data.json()
        const detallesPalabra = Response[0]
        console.log(detallesPalabra)
        return ctx.render(detallesPalabra)
        }
        return ctx.render()
    }
}


export default function Page (props:PageProps<Response>){
    const word = props.data.word
    const meanings = props.data.meanings
    return (
        <>
        <Detalles palabra={word} meanings={meanings}/>
        </>
    )
}
