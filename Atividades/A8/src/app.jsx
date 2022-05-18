import { ShowApi } from './components/ShowApi'
import { RepositoryList } from './components/repositoryList'
import './styles/global.scss'

export function App(){
    return(
        <>
        <h1>Módulo das listas:</h1>
        <br />
        <RepositoryList />
        <hr />

        <h1>Módulo das API's</h1>
        <br />
        <ShowApi />
        </>
    )
}