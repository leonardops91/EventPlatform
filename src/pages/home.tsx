import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($email: String!, $name: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export default function Home() {
  const navigate = useNavigate()
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    navigate('/event')
  }

  return (
    <div className="border border-red-500 flex flex-col gap-10 justify-between bg-blur bg-purple bg-cover w-full max-h-screen overflow-hidden px-[112px] pt-[112px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <Logo width="200" height="35" />
          <div className="w-[420px] ">
            <strong className="text-4xl">Inscreva-se já no evento</strong>
            <p className="mt-2">
              Aqui você terá acesso a todas as aulas exclusívas que serão
              lançadas durante a semana, além de materiais extras e desafios
              para pôr em prática todo o aprendizado adquirido durante as aulas
            </p>
          </div>
        </div>
        <div className="bg-opacity-25 p-8 border-2 border-gray-500 rounded bg-gray-800 w-[420px] flex flex-col items-center justify-center gap-3">
          <strong className="text-2xl mb-3">Inscreva-se no evento</strong>
          <form className="flex flex-col w-full gap-3" onSubmit={handleSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              className="bg-neutral-900 rounded-md p-5"
              type="text"
              placeholder="Digite seu nome"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-900 rounded-md p-5"
              type="text"
              placeholder="Digite seu email"
            />
            <button
              disabled={loading}
              className="disabled:opacity-50 bg-purple rounded-md p-5 hover:bg-violet-900 transition"
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-screen rounded bg-cover w-full h-[420px] border-x border-t border-gray-400"></div>
      </div>
    </div>
  );
}
