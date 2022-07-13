import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";
import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube } from "@vime/react";

import Footer from "./footer";
import { gql, useQuery } from "@apollo/client";

interface iprops {
  lessonSlug: string;
}

const GET_LESSON_By_Slug = gql`
  query ($slug: String) {
    lesson(where: { slug: $slug }) {
      challenge {
        url
      }
      description
      teacher {
        avatarURL
        bio
        name
      }
      title
      videoId
    }
  }
`;

interface iGetLessonBySlugResponse {
  lesson: {
    challenge: {
      url: string;
    };
    description: string;
    teacher: {
      avatarURL: string;
      bio: string;
      name: string;
    };
    title: string;
    videoId: string;
  };
}

export default function Video(props: iprops) {
  const { data } = useQuery<iGetLessonBySlugResponse>(GET_LESSON_By_Slug, {
    variables: { slug: props.lessonSlug },
  });

  if(!data) {
    return (
      <div className="flex-1"><p>Carregando</p></div>
    )
  }
  
  return (
    <div className="flex-1 overflow-auto">
      <div className="bg-black flex justify-center">
        <div className="bg-gray-600 w-full max-w-[1100px] max-h-[60vh] h-full aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className=" p-8">
        <div className="flex gap-14">
          <div className="flex-1">
            <h1 className="text-2xl">{data.lesson.title}</h1>
            <p className="mt-4 text-justify text-gray-400">
              {data.lesson.description}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://discord.com/"
              className="flex items-center justify-center gap-[10px] bg-purple rounded hover:bg-violet-900 transition w-[235] px-[14px] py-[17px]"
            >
              <DiscordLogo /> Comunidade do discord
            </a>
            <a
              href={data.lesson.challenge.url? data.lesson.challenge.url: ""}
              className="flex items-center justify-center gap-[10px] border text-blue-300 border-blue-300 rounded hover:bg-blue-300 hover:text-gray-900 transition w-[235px] px-[14px] py-[17px]"
            >
              <Lightning /> Acesse o desafio
            </a>
          </div>
        </div>
        <div className="flex mt-4 gap-4">
          <img
            className="rounded-full w-12 h-12 border-2 border-blue-300"
            src={data.lesson.teacher.avatarURL}
            alt="Avatar"
          />
          <div className="flex flex-col w-2/5 text-justify">
            <strong>{data.lesson.teacher.name}</strong>
            <span>{data.lesson.teacher.bio}</span>
          </div>
        </div>
        <div className="flex mt-20 gap-8">
          <a
            href=""
            className="hover:contrast-[1.03] transition flex items-center justify-center rounded bg-gray-800"
          >
            <div className="py-12 px-6 bg-purple overflow-hidden">
              <FileArrowDown size={30} />
            </div>
            <div className="px-6 w-fit">
              <strong>Material complementar</strong>
              <p>
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="py-12 pr-6">
              <CaretRight />
            </div>
          </a>
          <a
            href=""
            className="hover:contrast-[1.03] flex items-center justify-center rounded bg-gray-800"
          >
            <div className="py-12 px-6 bg-purple overflow-hidden">
              <Image size={30} />
            </div>
            <div className="px-6 w-fit">
              <strong>Wallpapers exclusivos</strong>
              <p>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="py-12 pr-6">
              <CaretRight />
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
