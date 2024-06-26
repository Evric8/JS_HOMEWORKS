export const list = document.querySelector('[data-list]')

export const local = "local";

export const arrFromStorage = (JSON.parse(localStorage.getItem(local)))
console.log(arrFromStorage);