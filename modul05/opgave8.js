// En funktion der tager et array med tekst som input. Funktionen skal returnerer summen af længderne på alle tekster i arrayet.

function sumOfTekst(array) {
    let sum = 0;
    for (let a of array) {
        sum = sum + a.length;
    }
    return sum;
}

let tekst = ["hej", "med", "dig", "i", "dag"];
console.log(sumOfTekst(tekst));

// En funktion der tager to arrays, og returnerer et nyt langt array hvor elementer fra de to arrays er sat sammen. Fx bliver [1, 2, 3] og [4, 5, 6] til [1, 2, 3, 4, 5, 6].

function concatenate(array1, array2) {
    let result = [];
    for (let a of array1) {
        result.push(a);
    }
    for (let a of array2) {
        result.push(a);
    }
    return result;
} 
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
console.log(concatenate(a1, a2));

// En funktion der tager to arrays med samme længde, og hvor begge indeholder tal. Funktionen skal returnerer et nyt array hvor tallene er lagt parvis sammen. Fx hvis du har [1, 2, 3] + [4, 5, 6], så giver det [5, 7, 9] når de er lagt sammen.
function arraySum(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        result[i] = array1[i] + array2[i];
    }
    return result;
}
a1 = [5, 5, 5];
a2 = [1, 2, 3];
console.log(arraySum(a1, a2));

// En funktion der tager et array med tekst som input. Funktionen skal returnere den længste tekst i arrayet.
function længsteTekst(array) {
    let største = array[0];
    for (let a of array) {
        if (a.length > største.length) {
            største = a;
        }
    }
    return største;
}
tekst = ["hejsa", "med", "dig", "i", "æblekage"];
console.log(længsteTekst(tekst));
tekst = ["hejsa", "æblekage", "dig", "i", "123"];
console.log(længsteTekst(tekst));

