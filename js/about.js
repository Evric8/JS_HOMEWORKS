'use strict';

(function () {
    const about = document.querySelector(".about");
    const ul = document.createElement("ul");
    ul.innerText = "Список даних";
    about.append(ul);

    const dataPars = JSON.parse(localStorage.getItem("dataList"));
    const dataClon = structuredClone(dataPars);
    const arreyDataClon = Object.keys(dataClon);

    if (arreyDataClon.length === 0) {
        alert("Немає даних");
        const liNull = document.createElement("li");
        liNull.innerText = "Немає даних";
        ul.append(liNull);
    }

    arreyDataClon.forEach((item) => {
        const li = document.createElement("li");
        li.append(dataClon[item]);
        ul.append(li);
    });
})();