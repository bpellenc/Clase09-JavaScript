function funtionsjs(){
    //6. Funciones
    //a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
    //Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
    //dicha variable en la consola del navegador.
    function suma(num1, num2) {
        var suma = num1 + num2;
        console.log(suma);
    }
    suma(10, 20);

    //b. A la función suma anterior, agregarle una validación para controlar si alguno de
    //los parámetros no es un número, mostrar una alerta aclarando que uno de los
    //parámetros tiene error y retornar el valor NaN como resultado.
    function suma(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            alert("Uno de los parámetros no es un número");
            return NaN;
        } else {
            var suma = num1 + num2;
            console.log(suma);
        }
    }
    suma(10, 20);
    suma("Hola", "Mundo");
    suma(10, "Mundo");
    suma("Hola", 20);

    //c. Crear una función validate integer que reciba un número como parámetro y
    //devuelva verdadero si es un número entero.
    function validateInteger(num){
        if(num%1 == 0){
            return true;
        }else{
            return false;
        }
    }
    console.log(validateInteger(10));
    console.log(validateInteger("Hola"));
    console.log(validateInteger(10.5));

    //d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
    //números sean enteros. En caso que haya decimales mostrar un alerta con el
    //error y retorna el número convertido a entero (redondeado).
    function suma(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            alert("Uno de los parámetros no es un número");
            return NaN;
        } else {
            var suma = num1 + num2;
            console.log(suma);
        }
    }
    suma(10, 20);
    suma("Hola", "Mundo");
    suma(10, "Mundo");

    //e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
    //dentro de la función suma probando que todo siga funcionando igual
    function validateInteger(num) {
        if (isNaN(num)) {
            return false;
        } else {
            return true;
        }
    }
    function suma(num1, num2) {
        if (validateInteger(num1) && validateInteger(num2)) {
            var suma = num1 + num2;
            console.log(suma);
        }
    }
    suma(10, 20);
    suma("Hola", "Mundo");
    suma(10, "Mundo");
    suma("Hola", 20);
    suma(10.5, 20);
    suma(10, 20.5);
    suma(10.5, 20.5);
    suma(10.5, "Mundo");
}