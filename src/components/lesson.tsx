import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link, useParams } from "react-router-dom";

interface iProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export default function Lesson(props: iProps) {
  const { slug } = useParams<{ slug: string }>();
  const isLessonActive = slug === props.slug;
  const isAvailable = isPast(props.availableAt);
  const formatedAvailableAt = format(
    props.availableAt,
    "iiii ' • ' d ' de ' MMMM ' • ' H'h'mm",
    { locale: ptBR }
  );

  return (
    <div className={!isAvailable || isLessonActive ? 'pointer-events-none' : '' }>
      <Link to={`/event/lesson/${props.slug}`} className="group">
        <span className="text-gray-400 mb-2 block">
          {formatedAvailableAt.toString()}
        </span>
        <div
          className={`border border-gray-600 rounded-[4px] p-4 group-hover:border-purple ${
            isLessonActive ? "bg-purple" : ""
          }`}
        >
          <header className="flex justify-between">
            {isAvailable ? (
              <span className="flex gap-2 text-blue-300 items-center text-sm">
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="flex gap-2 text-orange-300 items-center text-sm">
                <Lock size={20} />
                Em breve
              </span>
            )}
            <span
              className={`border border-purple rounded-md text-purple py-0.5 px-2 text-sm ${
                isLessonActive ? " text-white border-white" : ""
              }`}
            >
              {props.type === "live" ? "Ao vivo" : "Aula prática"}
            </span>
          </header>
          <strong className="mt-4 block">{props.title}</strong>
        </div>
      </Link>
    </div>
  );
}
