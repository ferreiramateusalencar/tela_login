function darkMode(){
    document.querySelector('#style').href = 'css/dark.css';
}
function lightMode(){
    document.querySelector('#style').href = 'css/light.css';
}

function colorMode(valor){
    if (valor === 'Dark'){
        lightMode();
        document.querySelector('#btn-mododark').value='Light';
    } else{
        darkMode();
        document.querySelector('#btn-mododark').value='Dark';
        }
}
