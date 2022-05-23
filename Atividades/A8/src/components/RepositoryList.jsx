import { Counter } from "./Counter"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

const repository = [
    {
        id: 1,
        name: "Meu Github",
        description: "Veja onde guardo os códigos deste projeto",
        link: "https://github.com/MQ-J"
    },
    {
        id: 2,
        name: "Cadastro de Entregadores",
        description: "Veja um projeto de lei para diminuir os casos de ladrões disfarçados de entregadores",
        link: "https://www.al.sp.gov.br/propositura/?id=1000437950"
    }
]

export function RepositoryList() {
    return (
        <>
        <section className="card repository-list">
            <h4>Lista de repositórios</h4>
            <ul>
                {repository.map((r) => 
                    <RepositoryItem key={r.id} repository={r} />
                )}
            </ul>
        </section>
        <div className="card">
            <Counter />
        </div>
        </>
    )
}