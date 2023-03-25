function showMessage() {
    console.log('Я учу JavaScript!');
}
showMessage();

let showMessage2 = function(name) {
    console.log(name + ' учит JavaScript!');
};
showMessage2('Оля');

let showMessage3 = () => console.log('Все учат JavaScript!');
showMessage3();