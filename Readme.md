### Homework #1

Description #29

Вам потрібно створити реалізацію функції padString, яка приймає 4 
аргументи:

1.Рядок
2.Число, яке визначає довжину рядка, який ми хочемо отримати після 
виконання функції.
3.Символ (рядок довжиною в 1 символ), яким буде доповнюватися рядок, 
якщо це необхідно.
4.Параметр булевого типу (true або false), який визначає, додавати 
символи зліва чи справа (за замовчуванням - справа).

Обов'язково при написанні функції необхідно перевірити аргументи, які 
ми передали, і якщо в якихось аргументів відсутні, то повернути з 
функції рядок з помилкою (return 'помилка'). Повідомлення про помилку 
повинно бути різним в залежності від того, на якому умові перевірки 
воно не пройшло.

Результат виклику функції потрібно вивести в консоль - після завершення 
функції.

Наприклад:

Виклик padString('hello', 8) поверне рядок hello***

А виклик padString('hello', 6, '*', false) поверне рядок *hello

Виклик padString('hello', 2) поверне 'he' - якщо число менше, ніж 
розмір введеного рядка, рядок потрібно обрізати за допомогою методу 
substr.