'use strict';

(function () {
    const ulList = document.querySelector
    ("[data-one] ul");
    const list = document.querySelectorAll
    ("[data-one] ul li");
    const added = document.querySelector(
        "[data-two] ul");
    const local = "local";
    let data = [];

    list.forEach((item) => {
        const btnAdd = document.createElement
        ("button");
        btnAdd.textContent = "Додати";
        btnAdd.setAttribute("data-add", "data-add");
        item.append(btnAdd);
        item.setAttribute("data-h6", "data-h6");
    });

    const have = JSON.parse(localStorage.getItem(local));
    if (have) {
        have.forEach((item) => {
            list.forEach((i) => {
                if (item.text === i.firstChild.innerText) {
                    i.lastChild.removeAttribute("data-add");
                    i.lastChild.setAttribute("data-delete", "data-delete");
                }
            });

            const current = item;
            const p = document.createElement
            ("p");
            p.innerHTML = current.text;
            const li = document.createElement
            ("li");
            const btnRemove =
                document.createElement("button");
            btnRemove.textContent = "Видалити";
            btnRemove.setAttribute("data-remove",
                "data-remove");
            li.append(p, btnRemove);
            li.setAttribute("data-li", "data-li");
            li.setAttribute("id", item.id);
            added.append(li);
        });
    }

    const addList = (event) => {
        const currentText =
            event.target.previousElementSibling.textContent;
        const current = event.target;
        current.removeAttribute("data-add");
        current.setAttribute("data-delete", "data-delete");
        const p =
            document.createElement("p");
        p.innerHTML = currentText;
        const li = document.createElement("li");
        const btnRemove =
            document.createElement("button");
        btnRemove.textContent = "Видалити";
        btnRemove.setAttribute("data-remove",
            "data-remove");
        li.append(p, btnRemove);
        li.setAttribute("data-li",
            "data-li");
        added.append(li);

        const obj = {
            id: Date.now(),
            text: p.innerHTML,
            button: btnRemove,
        };

        li.setAttribute("id", obj.id);

        if (JSON.parse(localStorage.getItem(local)) !== null) {
            data = JSON.parse(localStorage.getItem(local));
        }

        data.push(obj);
        localStorage.setItem(local, JSON.stringify(data));
    };

    const deleteList = (event) => {
        const currentText =
            event.target.previousElementSibling.textContent;
        const current = event.target;
        const currentLi = current.closest("[data-li]");
        const h4 =
            ulList.querySelectorAll("h4");

        h4.forEach((item) => {
            const up = item.innerText;
            if (up === currentText) {
                const btnAdd = item.nextElementSibling;
                btnAdd.removeAttribute("data-delete");
                btnAdd.setAttribute("data-add",
                    "data-add");
            }
        });

        const id = Number(currentLi.id);
        currentLi.remove();

        let fromLocal = JSON.parse(localStorage.getItem(local));
        if (fromLocal.length > 0) {
            fromLocal = fromLocal.filter((item) =>
                item.id !== id);
            localStorage.setItem(local, JSON.stringify(fromLocal));
            data = fromLocal;
        }
        if (fromLocal.length === 0) {
            localStorage.removeItem(local);
            data = fromLocal;
        }
    };

    ulList.addEventListener("click", addList);

    added.addEventListener("click", deleteList);
})();
