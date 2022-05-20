import { RepositoryItem } from "./RepositoryItem"

const repository = [
    {
        name: "Meu Github",
        description: "Veja onde guardo os códigos deste projeto",
        link: "https://github.com/MQ-J"
    },
    {
        name: "Cadastro de Entregadores",
        description: "Veja um projeto de lei para diminuir os casos de ladrões disfarçados de entregadores",
        link: "https://www.al.sp.gov.br/propositura/?id=1000437950"
    }
]

export function RepositoryList() {
    return (
        <>
            <section className="repository-list">
                <h4>Lista de repositórios</h4>
                <ul>
                    <RepositoryItem repository={repository[0]} />
                    <RepositoryItem repository={repository[1]} />
                </ul>
            </section>
        </>
    )
}