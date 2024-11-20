"use client";

import { useState } from "react";

type Topic = {
  id: number;
  title: string;
  shortDescription: string;
  details: string;
};

const topics: Topic[] = [
  {
    id: 1,
    title: "O Mito da Caverna de Platão",
    shortDescription:
      "Uma metáfora sobre a ignorância e o caminho para a iluminação.",
    details:
      "O Mito da Caverna é uma alegoria apresentada por Platão no livro 'A República'. Ele descreve prisioneiros acorrentados em uma caverna, vendo apenas sombras projetadas na parede, que representam sua realidade. Ao sair da caverna, o indivíduo descobre o mundo real, simbolizando o caminho do conhecimento e da verdade.",
  },
  {
    id: 2,
    title: "O Cogito de Descartes",
    shortDescription: "A base da filosofia moderna: 'Penso, logo existo'.",
    details:
      "René Descartes propôs o 'Cogito, ergo sum' ('Penso, logo existo') como um fundamento inquestionável para a filosofia. Ele argumenta que a própria dúvida é prova da existência de um pensador, estabelecendo a consciência como a base da verdade.",
  },
  {
    id: 3,
    title: "A Alegoria do Super-Homem de Nietzsche",
    shortDescription: "A transcendência do homem para além de seus limites.",
    details:
      "Friedrich Nietzsche introduz o conceito de 'Übermensch' ('Super-Homem') em 'Assim Falou Zaratustra'. Ele representa um ideal de humanidade que supera a moralidade tradicional e cria seus próprios valores, vivendo autenticamente.",
  },
];

export default function Home() {
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  const toggleTopic = (id: number): void => {
    setActiveTopic((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Memorabilia de Filosofia
      </h1>
      <div className="w-full max-w-4xl space-y-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white shadow-md rounded-lg p-4 transition hover:shadow-lg"
          >
            <button
              onClick={() => toggleTopic(topic.id)}
              className="w-full text-left"
            >
              <h2 className="text-2xl font-semibold text-gray-700">
                {topic.title}
              </h2>
              <p className="text-gray-500 mt-1">
                {topic.shortDescription}
              </p>
            </button>
            {activeTopic === topic.id && (
              <div className="mt-4 text-gray-600 border-t pt-4">
                <p>{topic.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}