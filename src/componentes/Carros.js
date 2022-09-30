import React from 'react';

const Carros = ({props}) => {
    return (
        <div className={"teste"}>
            <ul>
                {props.map((carro, id) => (
                    <div className={"carro"}>
                        <li >
                            <p className="nome">{carro.modelo}</p>
                            <p className="km">Km: {carro.km}</p>
                            <p className="cor">Cor: {carro.cor}</p>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Carros;