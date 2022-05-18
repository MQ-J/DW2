import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: "Atividade 1",
    description: "Descrevendo o repositório aqui",
    link: "https://github.com/MQ-J"
}

export function RepositoryList(){
    return(
        <>
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
        <p>sefasejfo</p>
        </>
    )
}