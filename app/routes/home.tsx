import type { Route } from "./+types/home";
import Index from "../_index.jsx";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aufa Berkah Media" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Index />;
}
