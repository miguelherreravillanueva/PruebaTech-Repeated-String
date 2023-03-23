/*
Lilah tiene una cadena, s, de letras minúsculas en inglés que se repite infinitamente en ambas direcciones. Se le pide que encuentre el número de ocurrencias de la letra 'a' en los primeros n caracteres de esta cadena infinita.

Por ejemplo, si s = 'abcac' y n = 10, la cadena infinita se convierte en 'abcacabcac' y la respuesta sería 3 (ya que 'a' aparece 3 veces en los primeros 10 caracteres de la cadena infinita).

Para resolver este problema, podemos utilizar la siguiente estrategia:

1. Contar el número de ocurrencias de la letra 'a' en la cadena s completa.
2. Calcular el número de veces que s se repite completamente en los primeros n caracteres.
3. Calcular el número de ocurrencias de la letra 'a' en los caracteres restantes (si los hay).
*/

function repeatedString(s, n) {
    // Contar el número de ocurrencias de 'a' en s
    const countA = s.split('').reduce((acc, curr) => {
        if (curr === 'a') acc++;
        return acc;
    }, 0);

    // Calcular el número de veces que s se repite en los primeros n caracteres
    const fullRepetitions = Math.floor(n / s.length);

    // Calcular el número de caracteres restantes
    const remainder = n % s.length;

    // Contar el número de ocurrencias de 'a' en los caracteres restantes
    const countARemainder = s.slice(0, remainder).split('').reduce((acc, curr) => {
        if (curr === 'a') acc++;
        return acc;
    }, 0);

    // Devolver el número total de ocurrencias de 'a'
    return countA * fullRepetitions + countARemainder;
}

/*
En este código, primero contamos el número de ocurrencias de la letra 'a' en la cadena s completa utilizando el método reduce. Luego, calculamos el número de veces que s se repite completamente en los primeros n caracteres utilizando la función Math.floor. A continuación, calculamos el número de caracteres restantes utilizando el operador %.

Finalmente, contamos el número de ocurrencias de la letra 'a' en los caracteres restantes utilizando el método reduce, y devolvemos el número total de ocurrencias de 'a' multiplicando el número de ocurrencias en s completo por el número de repeticiones completas de s, y sumando el número de ocurrencias en los caracteres restantes.

Este código tiene una complejidad temporal de O(n) y una complejidad espacial de O(1), lo que lo hace muy eficiente para cadenas muy largas y valores grandes de n.
*/
