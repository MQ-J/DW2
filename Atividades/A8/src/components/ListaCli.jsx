import { useEffect, useState } from "react";
import api from "../services/api";
import '../styles/listaCli.scss'

export function ListaCli(){

    const [client, setClient] = useState([]);

    useEffect(() => {
    api.get("/pessoas/index")
        .then((response) => setClient(response.data.data))
        .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    return (
        <div className="card clients">
            <h4>Lista de Clientes</h4>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                    </tr>
                </thead>
                <tbody>
                        {client.map((c) => 
                        <tr key = {c?.id}>
                            <td> {c?.id} </td>
                            <td> {c?.nome}</td>
                            <td> {c?.sobrenome}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}