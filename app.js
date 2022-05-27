document.getElementById("count-el").innerText = 0;



let countEl = document.getElementById(`count-el`)

let count = 0;

function increment() {
    
    count += 1
    countEl.textContent = count
}

saveEl= document.getElementById(`save-el`)


function save() {
    let salvados = count + ` - `;
    saveEl.textContent += salvados
    
}

function reset() {
    
    count = 0;
    countEl.textContent = 0;


}



// let guardado = document.getElementById(`Guardados`);

// function save() {
//     guardado.innerText = count
// };




// let welcomeEl = document.getElementById(`welcome-el`);
// let name = `Araldi Ulises Garcia Feliz`;
// let greeting = `Hi, my name is `;
// console.log(welcomeEl)

// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText= welcomeEl.innerText + ` Espero estes bien.`



// myGreeting = greeting + name +`!`
// console.log(myGreeting)

// (a = a +  b ) = (a +=b)



// let myAge = 32;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);