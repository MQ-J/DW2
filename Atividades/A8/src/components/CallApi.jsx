export function CallApi(){

    let clients

    fetch(`http://127.0.0.1:8000/api/pessoas/index`)
    .then( response => response.json())
    .then( response => clients = response.data[0])

    // console.log(clients)
    
    return(
        <p> a </p>
    )
}