import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/logo";
import { useCreateSubscriberMutation } from "../graphql/generated";


export default function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, {loading}] = useCreateSubscriberMutation()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    navigate("/event");
  }

  return (
    <div className=" flex flex-col gap-10 justify-between bg-blur bg-purple bg-cover w-full max-h-screen overflow-hidden px-28 pt-28">
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center gap-4 text-center lg:py-10 lg:items-baseline lg:text-left">
          <Logo width="200" height="35" />
          <div className="w-[420px]">
            <strong className="text-4xl ">Inscreva-se já no evento</strong>
            <p className="mt-2">
              Aqui você terá acesso a todas as aulas exclusívas que serão
              lançadas durante a semana, além de materiais extras e desafios
              para pôr em prática todo o aprendizado adquirido durante as aulas
            </p>
          </div>
        </div>
        <div className="bg-opacity-25 p-8 border-2 border-gray-500 rounded bg-gray-800 w-[420px] flex flex-col items-center justify-center gap-3">
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
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-screen rounded bg-cover bg-top w-full h-[420px] border-x border-t border-gray-400"></div>
      </div>
    </div>
  );
}
