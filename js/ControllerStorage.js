import { local } from "./ModelDocument.js"

export function storage(photos){
    if (JSON.parse(localStorage.getItem(local)) !== null) {
        localStorage.removeItem('local')
    }
    localStorage.setItem(local, JSON.stringify(photos));

    // window.location.href="p3.html"
    document.location.href="pageTwo.html"
}