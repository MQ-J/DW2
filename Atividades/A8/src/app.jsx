import { RepositoryList } from './components/repositoryList'
import './styles/global.scss'
import { ListaCli } from './components/ListaCli'

export function App(){
    return(
        <>
        <h1>Módulos da matéria de DW2:</h1>
        <br />
        <RepositoryList />
        <hr />

        <h1>Demais módulos</h1>
        <br />
        <ListaCli />
        </>
    )
}