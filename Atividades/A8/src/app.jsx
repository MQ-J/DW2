import { RepositoryList } from './components/repositoryList'
import './styles/global.scss'
import { ListaCli } from './components/ListaCli'

export function App(){
    return(
        <>
        <h1>Módulo das listas:</h1>
        <br />
        <RepositoryList />
        <hr />

        <h1>Demais módulos</h1>
        <br />
        <ListaCli />
        </>
    )
}