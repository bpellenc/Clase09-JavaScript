function arraysjs(){
    //3. Arrays
    //a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    //"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses[4] + " " + meses[10]);

    //b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses.sort());

    //c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    meses.unshift("Mes de inicio");
    meses.push("Mes de fin");
    console.log(meses);

    //d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    meses.shift();
    meses.pop();
    console.log(meses);

    //e. Invertir el orden del array (utilizar reverse).
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses.reverse());

    //f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses.join("-"));

    //g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses.slice(4, 10));
}
