// Task 1
const changeBase = () => {
    let digit = Number(prompt('Введите число'));
    let base = Number(prompt('Введите систему счисления'));
    digit >= 0 && base > 1 && base <= 36 ?
    console.log(parseInt(`${digit}`,base)) : console.log('Некорректный ввод!');
}

// Task 2
const sumAndQuotient = () => {
    let first = prompt();
    if (parseInt(first)) {
        let  second = prompt();
        if (parseInt(second)) {
            console.log(Number(first) + Number(second), Number(first) / Number(second))
        } else {
            console.log('Некорректный ввод!');
        }
    } else {
        console.log('Некорректный ввод!');
    }
}
