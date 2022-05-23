import { Counter } from "./Counter"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useState, useEffect } from "react"

interface Repository{
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/mq-j/repos').then(response => response.json()).then(data => setRepositories(data))
    }, [])

    return (
        <>
        <section className="card repository-list">
            <h4>Lista de repositórios</h4>
            <ul>
                {repositories.map( repo => 
                    <RepositoryItem key={repo.id} repository={repo} />
                )}
            </ul>
        </section>
        <div className="card">
            <Counter />
        </div>
        </>
    )
}