import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'
import { ListaCli } from './components/ListaCli'
import { CriaCli } from './components/CriaCli'

export function App(){
    return(
        <>
        <div className='sectionA'>
            <h2>Módulos da matéria de DW2:</h2>
            <RepositoryList />
        </div>

        <div className='sectionB'>
            <h2>Demais módulos</h2>
            <ListaCli />
            <CriaCli />
        </div>
        </>
    )
}