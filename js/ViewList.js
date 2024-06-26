import { albums } from './ModelAlbums.js';

import { list } from './ModelDocument.js';

import { lists } from './ControllerList.js';

async function paintingList(){
    const gallerys = await albums()
    for(const row of gallerys){
        const li = document.createElement('li');
        li.innerHTML = row.title
        li.classList.add('li2')
        const rowId = row.id;
        li.setAttribute('data-id', `${rowId}`)
        list.append(li)
    }
    lists(list)
}

paintingList()