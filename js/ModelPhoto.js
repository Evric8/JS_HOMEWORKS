export async function photosFromAlbum(numberAlbum){
    const gallery = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${numberAlbum}`)
    return gallery.json()
}