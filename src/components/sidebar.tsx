import { gql, useQuery } from "@apollo/client";
import Lesson from "./lesson";

const GET_LESSONS_QUERY = gql` 
query  {
  lessons {
    id
    lessonType
    slug
    title
    availableAt
  }
}
`

interface iResponse {
  lessons: {
    id: string,
    lessonType: 'class' | 'live',
    slug: string,
    title: string,
    availableAt: string
  }[]
}

export default function Sidebar() {
  const { data } = useQuery<iResponse>(GET_LESSONS_QUERY)

  return (
    <aside className="w-[348px] border-l border-gray-600 flex flex-col p-8">
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
