import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function layout(props: PageProps) {
    const Component = props.Component
    return (
        <>
        <Header />
        <Component />
        </>
    )
}