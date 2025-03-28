import { FreshContext, Handlers } from "$fresh/server.ts";
import Formulario from "../components/Formulario.tsx";

type Data = {
  palabra: string
}


export const handler:Handlers = {
  GET: (req: Request,ctx:FreshContext<unknown,Data>) => {
      const url = new URL(req.url)
      const palabra = url.searchParams.get("Palabra") || null
      //Redirect, muy util para rutas dinamicas que dependan de cosas de fromularios
      if(palabra) return new Response("",{status: 307,headers:{location: "/buscar/"+palabra} })
      return ctx.render()
  }
}


export default function Home() {
  return (
    <>
    <Formulario />
    </>
  );
}
