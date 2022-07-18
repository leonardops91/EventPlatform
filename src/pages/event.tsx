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
      <main className="w-full flex flex-col flex-1 justify-between xl:flex-row">
        <div>
          {slug ? (
            <Video lessonSlug={slug} />
          ) : (
            <div className="flex-1 bg-blur bg-purple"></div>
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
