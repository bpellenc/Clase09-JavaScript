function stringjs(){
    //2. Strings
    //a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
    var string7 = "Hola mundo";
    var string8 = string7.toUpperCase();
    console.log(string8);

    //b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
    //string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
    var string9 = "Hola mundo";
    var string10 = string9.substring(0, 5);
    console.log(string10);

    //c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
    //string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
    var string11 = "Hola mundo";
    var string12 = string11.substring(string11.length - 3);
    console.log(string12);

    //d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
    //string con la primera letra en mayúscula y las demás en minúscula. Guardar el
    //resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
    var string13 = "Hola mundo";
    var string14 = string13.substring(0, 1).toUpperCase() + string13.substring(1).toLowerCase();
    console.log(string14);

    //e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
    //blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
    var string15 = "Hola mundo";
    var string16 = string15.indexOf(" ");
    console.log(string16);

    //f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
    //algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
    //generar un nuevo string que tenga la primera letra de ambas palabras en
    //mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
    var string17 = "Hola mundo";
    var string18 = string17.substring(0, 1).toUpperCase() + string17.substring(1).toLowerCase();
    console.log(string18);
}