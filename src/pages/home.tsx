import { ApolloError } from "@apollo/client";
import { NetworkError } from "@apollo/client/errors";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/logo";
import {
  useCreateSubscriberMutation,
} from "../graphql/generated";

export default function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isUnknownError, setIsUnknownError] = useState(false)


  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      await createSubscriber({
        variables: {
          name,
          email,
        },
      });
    } catch (error: any) {
      if(error.networkError.statusCode != 400){
        setIsUnknownError(true)
        return
      }
    }

    navigate("/event");
  }

  return (
    <div className=" flex flex-col gap-10 justify-between bg-blur bg-purple bg-cover w-full min-h-screen overflow-hidden pt-7 sm:pt-28 sm:px-28">
      <div className="flex flex-col items-center justify-center sm:gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center gap-4 text-center lg:py-10 lg:items-baseline lg:text-left">
          <Logo width="200" height="35" />
          <div className="w-[420px]">
            <strong className="text-2xl sm:text-4xl ">
              Inscreva-se já no evento
            </strong>
            <p className="mt-4 px-10 sm:px-0">
              Aqui você terá acesso a todas as aulas exclusívas que serão
              lançadas durante a semana, além de materiais extras e desafios
              para pôr em prática todo o aprendizado adquirido durante as aulas
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[420px] gap-3 p-10 sm:p-8 sm:bg-opacity-25 sm:border-2 sm:border-gray-500 sm:rounded sm:bg-gray-800  ">
          <strong className="text-2xl mb-3">Inscrição do evento</strong>
          <form className="flex flex-col w-full gap-3" onSubmit={handleSubmit}>
            <input
              required
              disabled={loading}
              onChange={(e) => setName(e.target.value)}
              className="bg-neutral-900 rounded-md p-5 disabled:opacity-50"
              type="text"
              placeholder="Digite seu nome"
            />
            <input
              required
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-900 rounded-md p-5 disabled:opacity-50"
              type="text"
              placeholder="Digite seu email"
            />
            <button
              disabled={loading}
              className="disabled:opacity-50 bg-purple rounded-md p-5 hover:bg-violet-900 transition flex items-center justify-center h-16"
              type="submit"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-x-2 border-white rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                "Garantir minha vaga"
              )}
            </button>
          </form>
        <span className="text-center">{isUnknownError && 'Um erro inesperado aconteceu, tente novamente'}</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-screen rounded bg-cover bg-top w-full h-[420px] border-x border-t border-gray-400 hidden lg:block"></div>
      </div>
    </div>
  );
}
