import {DB_KEY} from './constants.js';

const Model = {
    _currentId: 1,

    getById(id){
        const data = this.getData();
        return data.find((item) => {
            return item.id === id;
        })
    },

    getData(){
        const data = JSON.parse(localStorage.getItem(DB_KEY));
        if(data === null) return [];

        return data;
    },

    setData(data){
        const saveData = this.getData();
        if(saveData.length > 150){
            throw new Error('No capasity in DB_Key')
        }

        const dataToSave = {...data, id: this.currentId};
        saveData.push(dataToSave)
        localStorage.setItem(DB_KEY, JSON.stringify(saveData));
        this.currentId += 1;

        return this.getData().at(-1);
    },

    removeData(id){
        const saveData = this.getData();
        const index = saveData.findIndex((item) => {
            return Number(item.id) === Number(id);
        });
        const removedItem = saveData.splice(index, 1);

        localStorage.setItem(DB_KEY, JSON.stringify(saveData));

        const updatedData = this.getData();
        
        return !updatedData.some((item) => {
            return item.id === removedItem.id;
        });
    },

    init(){
        const data = this.getData();
        if(!data.length) return;
        this.currentId = ++data.at(-1).id;
    },

    get currentId(){
        return this._currentId;
    },

    set currentId(value){
        if(typeof value !== 'number'){
            throw new Error('id should be a number')
        }
        this._currentId = value;
    },
}

export default Model;