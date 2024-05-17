import React from "react";


const Card = () => {
    // const listaDeEstudiantes = [
    //     {nombre: "Angie"}, {nombre:"Sebastian"}, {nombre:"Omar"}, {nombre:"Gustavo"}, {nombre:"Jorge"}, {nombre:"Valentina"}, {nombre:"Luis"}, {nombre:"Cesar"}, {nombre:"Alexis"}, {nombre:"Jose"}, {nombre:"Omar"}, {nombre:"Jorge"}
    // ];

    return (
        <>
            <div className="card col-4" style={{ width: "18rem" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    {/* {listaDeEstudiantes.map((estudiante, index) => {
                        return(
                        <h5 className="card-title" key={`estudiante-${estudiante}-${index}`}>{estudiante.nombre}</h5>
                        )
                    }
                    )} */}
                     <h5 className="card-title">Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
};
export default Card;
