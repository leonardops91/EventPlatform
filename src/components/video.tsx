import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";
import "@vime/core/themes/default.css";
import ReactPlayer from "react-player/youtube";
import { useGetLessonBySlugQuery } from "../graphql/generated";

import Footer from "./footer";

interface iprops {
  lessonSlug: string;
}

export default function Video(props: iprops) {
  const { data } = useGetLessonBySlugQuery({
    variables: { slug: props.lessonSlug },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 p-2">
        <p className="animate-pulse">Carregando</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* video Player  */}
      <div className="bg-black flex justify-center">
        <div className="bg-gray-600 w-full max-w-[1100px] max-h-[75vh] h-full aspect-video">
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${data.lesson.videoId}`}
          />
        </div>
      </div>
      <div className=" p-8">
        {/* Informations, community and challenge */}
        <div className="flex flex-col flex-1 gap-14 md:flex-row">
          <div className="flex flex-1 flex-col ">
            <div className="">
              <h1 className="text-2xl">{data.lesson.title}</h1>
              <p className="mt-4 text-justify text-gray-400">
                {data.lesson.description}
              </p>
            </div>

            {data.lesson.teacher && (
              <div className="flex mt-4 gap-4">
                <img
                  className="rounded-full w-12 h-12 border-2 border-blue-300"
                  src={data.lesson.teacher.avatarURL}
                  alt="Avatar"
                />
                <div className="flex flex-col min-w-2/5 text-justify 2xl:w-2/5">
                  <strong>{data.lesson.teacher.name}</strong>
                  <span>{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://discord.com/"
              className="flex items-center justify-center gap-[10px] bg-purple rounded hover:bg-violet-900 transition min-w-[235] px-[14px] py-[17px]"
            >
              <DiscordLogo /> <span>Comunidade do discord</span>
            </a>
            {data.lesson.challenge && (
              <a
                href={
                  data.lesson.challenge.url ? data.lesson.challenge.url : ""
                }
                className="flex items-center justify-center gap-[10px] border text-blue-300 border-blue-300 rounded hover:bg-blue-300 hover:text-gray-900 transition min-w-[235px] px-[14px] py-[17px]"
              >
                <Lightning /> <span>Acesse o desafio</span>
              </a>
            )}
          </div>
        </div>
        {/* extra materials */}
        <div className="flex flex-col justify-between mt-20 gap-8 lg:flex-row ">
          <a
            href=""
            className="hover:contrast-[1.03] flex flex-1 items-center justify-between rounded bg-gray-800"
          >
            <div className="py-12 px-6 bg-purple overflow-hidden">
              <FileArrowDown size={30} />
            </div>
            <div className="px-6 w-fit text-left flex flex-col flex-1">
              <strong>Material complementar</strong>
              <p>Acesse o material da aula e continue estudando</p>
            </div>
            <div className="py-12 pr-6">
              <CaretRight />
            </div>
          </a>
          <a
            href=""
            className="hover:contrast-[1.03] flex flex-1 items-center justify-between rounded bg-gray-800"
          >
            <div className="py-12 px-6 bg-purple overflow-hidden">
              <Image size={30} />
            </div>
            <div className="px-6 w-fit text-left flex flex-col flex-1">
              <strong>Wallpapers exclusivos</strong>
              <p className="overflow-auto">
                Baixe wallpapers exclusivos da semana e personalize a sua área
                de trabalho
              </p>
            </div>
            <div className="py-12 pr-6">
              <CaretRight />
            </div>
          </a>
        </div>
      </div>
      <div className="hidden xl:block">
        <Footer />
      </div>
    </div>
  );
}
