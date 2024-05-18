import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
  const listaDeEstudiantes = [
    { nombre: "Angie" },
    { nombre: "Sebastian" },
    { nombre: "Omar" },
    { nombre: "Gustavo" },
    { nombre: "Jorge" },
    { nombre: "Valentina" },
    { nombre: "Luis" },
    { nombre: "Cesar" },
    { nombre: "Alexis" },
    { nombre: "Jose" },
    { nombre: "Omar" },
    { nombre: "Jorge" },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="container mx-auto row gap-2 justify-content-center">
          {listaDeEstudiantes.map((estudiante, index) => {
            return (
              <Card
                nombre={estudiante.nombre}
                key={`estudiante-${estudiante}-${index}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
console.log("Something changed!");
export default Home;
