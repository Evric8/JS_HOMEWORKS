'use strict';

(function () {
    const btn = document.querySelector("#form .btn");
    const inputs = document.querySelectorAll("input, textarea, select");
    const data = {};

    const mySubmit = () => {
        inputs.forEach((input) => {
            if (input.value.trim() === "") return null;
            data[input.name] = input.value;
        });

        localStorage.setItem("dataList", JSON.stringify(data));
    };

    btn.addEventListener("click", mySubmit);
})();