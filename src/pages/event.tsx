import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Video from "../components/video";

export default function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex items-center flex-col flex-1 h-full bg-no-repeat">
      <Header />
      <main className="w-full flex flex-col flex-1 justify-between xl:flex-row ">
        <div className="w-full">
          {slug ? (
            <Video lessonSlug={slug} />
          ) : (
            <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:items-center pt-11 h-full w-full bg-blur bg-purple">
              <p className="text-3xl">Seja bem vindo à área do evento</p>
              <p className="text-2xl">Escolha uma aula e bons estudos!</p>
              </div>
          )}

        </div>
        <Sidebar />
          <div className="block xl:hidden">
            <Footer />
          </div>
      </main>
    </div>
  );
}
