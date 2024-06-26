export async function albums (){
    const gallery = await fetch(`https://jsonplaceholder.typicode.com/albums`
    )
    return gallery.json()
}