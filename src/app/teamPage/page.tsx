import Header from "../../components/Header";
import Footer from "../../components/Footer";

const teamMembers = [
  {
    name: "Anderson da Silva Passos",
    photo: "/images/anderson.png",
    description: "Estudante de Ciência da Computação.",
  },
  {
    name: "Francisco Colatino Lima",
    photo: "/images/francisco.jpg",
    description: "Estudante de Ciência da Computação.",
  },
  {
    name: "Jônatas Duarte Vital Leite",
    photo: "/images/jonatas.png", 
    description: "Estudante de Ciência da Computação.",
  },
  {
    name: "Thallys Asafe Ribeiro Alcantara",
    photo: "/images/thallys.png", 
    description: "Estudante de Ciência da Computação.",
  },
  {
    name: "Rayane Quézia Lima Duarte",
    photo: "/images/rayane.png", 
    description: "Estudante de Ciência da Computação.",
  },
];

const TeamPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-6 ">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Nossa Equipe
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
              <p className="text-gray-500 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>
            Agradecemos imensamente os ensinamentos do nosso professor Arary, que
            nos ensinou a refletir criticamente sobre a Filosofia e
            ensionou sobre os conceitos da filosofia científica.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;