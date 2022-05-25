import { useEffect, useState } from "react";
import api from "../services/api";
import '../styles/listaCli.scss'

export function ListaCli() {

    // para filtrar os clientes
    const [filter, setFilter] = useState(false)
    const [nome, setNome] = useState("")

    // para mostrar todos os clientes
    const [client, setClient] = useState([]);

    function filtraClient(event) {
        if (!event.target.nome.value) {
            setFilter(false)
            event.preventDefault();
        } else {
            setFilter(true)

            setNome(event.target.nome.value)
    
            event.preventDefault();
        }
    }

    // De primeira ele pesquisa sem filtro, mas refaz a pesquisa caso:
        // usuário digite nome para pesquisa (muda o nome)
        // usuário apague o nome para pesquisa (muda o filtro para falso)

    useEffect(() => {
        if (!filter) {
            api.get("/pessoas/index")
                .then((response) => setClient(response.data.data))
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        } else {
            api.get(`/pessoas/shownome/${nome}`)
                .then((response) => setClient(response.data.data))
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        }
    }, [nome, filter]);


    return (
        <div className="clients">
            <div className="card client-show">
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
                            <tr key={c?.id}>
                                <td> {c?.id} </td>
                                <td> {c?.nome}</td>
                                <td> {c?.sobrenome}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="card client-search">

                <h4>Filtrar</h4>

                <form onSubmit={(event) =>
                    filtraClient(event)
                } autocomplete="off">

                    <div className="input-group">
                        <label htmlFor="nome">Nome:</label>
                        <br />
                        <input type="text" id="nome" name="nome" />
                    </div>

                    <div className="button"><button type="submit">Filtrar</button></div>
                </form>
            </div>
        </div>
    )
}