export function RepositoryItem(props){
    return(
        <li>
            <strong> {props.repository?.name ?? 'tem não man'} </strong>
            <p> {props.repository?.description} </p>
            <a href={props.repository.link}>Acessar o repositório</a>
        </li>
    )
}