import { Counter } from "./Counter"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useState, useEffect } from "react"

export function RepositoryList() {

    const [repositories, setRepositories] = useState([])

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