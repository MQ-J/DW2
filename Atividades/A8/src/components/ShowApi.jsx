import { CallApi } from "./CallApi";

export function ShowApi(){
    
    return(
        <>
        <CallApi />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>0</td>
                    <td>Teste</td>
                    <td>Testado</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}