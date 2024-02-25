/*cette fct prend la valeur du bouton cliqué et l'ajoute à l'affichage de la calculatrice*/ 
function addToDisplay(value) {
    document.getElementById("display").value += value;
}

/* Elle efface le contenu de l'affichage de la calculatrice lorsque l'utilisateur clique sur le bouton "C"*/
function clearDisplay() {
    document.getElementById("display").value = "";
}

/*Cette fonction est appelée lorsque l'utilisateur clique sur le bouton "=" pour effectuer le calcul. Elle récupère le contenu de l'affichage, l'évalue en utilisant la fonction JavaScript eval() (qui évalue une chaîne de caractères comme du code JavaScript), puis affiche le résultat dans l'affichage */
function calculate() {
    var display = document.getElementById("display").value;
    var result;
    try {
        result = eval(display);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
//valeur absolue
function absoluteValue() {
    var display = document.getElementById("display").value;
    var result = Math.abs(parseFloat(display));
    document.getElementById("display").value = result;
}

//factoriel
function factorial() {
    var display = document.getElementById("display").value;
    var num = parseFloat(display);
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    document.getElementById("display").value = result;
}

//trigonometry
function trigFunction(func) {
    var display = document.getElementById("display").value;
    var result;

    if (func === 'sin') {
        result = Math.sin(parseFloat(display));
    } else if (func === 'cos') {
        result = Math.cos(parseFloat(display));
    } else if (func === 'tan') {
        result = Math.tan(parseFloat(display));
    } else if (func === 'csc') {
        result = 1 / Math.sin(parseFloat(display));
    } else if (func === 'sec') {
        result = 1 / Math.cos(parseFloat(display));
    } else if (func === 'cot') {
        result = 1 / Math.tan(parseFloat(display));
    } else if (func === 'sinh') {
        result = Math.sinh(parseFloat(display));
    } else if (func === 'cosh') {
        result = Math.cosh(parseFloat(display));
    } else if (func === 'tanh') {
        result = Math.tanh(parseFloat(display));
    }
    
    document.getElementById("display").value = result;
}

        //inverse
function inverseTrigFunction(func) {
    var display = document.getElementById("display").value;
    var result;
    if (func === 'arcsin') {
        result = Math.asin(parseFloat(display));
    } else if (func === 'arccos') {
        result = Math.acos(parseFloat(display));
    } else if (func === 'arctan') {
        result = Math.atan(parseFloat(display));
    }
    document.getElementById("display").value = result;
    }
        

// Fonction pour effacer le dernier élément du champ d'affichage
function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Utilisation de la méthode slice pour supprimer le dernier caractère
}

/*calculer*/
function calculate() {
    var display = document.getElementById('display');
    var equation = display.value;
    var result = eval(equation); // Utilisation de la fonction eval pour évaluer l'équation
    display.value = result;
}


// menu
function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

//curseur
function moveCursorLeft() {
    var inputElement = document.getElementById("display");
    var selectionStart = inputElement.selectionStart;
    inputElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
}

function moveCursorRight() {
    var inputElement = document.getElementById("display");
    var selectionStart = inputElement.selectionStart;
    inputElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
}