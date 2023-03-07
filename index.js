const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, wording) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${wording} gift!`;
    }

    return messages;

}

function countDown(numberForCountingDown) {
    let i = numberForCountingDown;
    while (i >= 0) {
        console.log(i);
        i --;
    }
}
