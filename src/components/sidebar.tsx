import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./lesson";

export default function Sidebar() {
  const { data } = useGetLessonsQuery() 

  return (
    <aside className="min-w-[348px] border-l border-gray-600 flex flex-col p-8 xl:w-[348px]">
      <header className="border-b border-gray-600 pb-8 mb-6">
        <span className=" text-2xl">
          Cronograma de aulas
        </span>
      </header>
      <main className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return <Lesson 
          key={lesson.id}
          availableAt={new Date(lesson.availableAt)} 
          type={lesson.lessonType} 
          title={lesson.title} 
          slug={lesson.slug} />
        })}

      </main>
    </aside>
  );
}
