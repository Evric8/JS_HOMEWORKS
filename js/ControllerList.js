import {photosFromAlbum} from './ModelPhoto.js'

import {storage} from './ControllerStorage.js'

export function lists(lists){
    lists.addEventListener('click', async (e)=>{
        const current = e.target
        const id = Number(current.getAttribute('data-id'));
        const photo = await photosFromAlbum(id)

        storage(photo)
    })
}