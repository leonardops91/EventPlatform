import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Video from "../components/video";



export default function Event() {
  const {slug} = useParams<{slug: string}>()

  return (
    <div className="flex items-center flex-col flex-1 h-screen">
      <Header/>
      <main className="w-full flex flex-1 justify-between">
        {slug ? <Video lessonSlug={slug}/> : <div className="flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  );
}
