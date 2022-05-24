import { useEffect, useState } from "react";
import api from "../services/api";
import '../styles/criacli.scss'

export function CriaCli() {

    const [add, setAdd] = useState(false);

    const [nome, setNome]= useState("")

    const [sobrenome, setSobrenome]= useState("")

    function newClient(event) {
        if ((!event.target.nome.value) || (!event.target.sobrenome.value)) {
            event.preventDefault();
        }
        
        setNome(event.target.nome.value)
        setSobrenome(event.target.sobrenome.value)

        setAdd(true)

        // deixa o evento do formulário rolar,
        // para atualizar a página e a lista de clientes
    }

    useEffect(() => {
        if(add) {
            api.post(`/pessoas/create?nome=${nome}&sobrenome=${sobrenome}`)
            .then((response) => console.log(response))
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });
        }
    }, [add]);

    return(
        <div className="card add-clients">
            <form onSubmit={function (event) {
                newClient(event);
            }}>

                <div className="input-group">
                    <label htmlFor="nome">Nome:</label>
                    <br />
                    <input type="text" id="nome" name="nome"/>
                </div>

                <div className="input-group">
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <br />
                    <input type="text" id="sobrenome" name="sobrenome"/>
                </div>
                
                <div className="button"><button type="submit">Novo Cliente</button></div>
            </form>
        </div>
    )
}