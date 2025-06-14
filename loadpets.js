const pets = [
  {"name": "Buddy","type": "Dog","age": 3,"images": "images/dogs/dog01.jpg"},
  {"name": "Lupin","type": "Dog","age": 2, "images":"images/dogs/dog02.jpg"},
  {"name": "Bonnie","type": "Dog","age": 2, "images":"images/dogs/dog03.jpg"},
  {"name": "Whiskers","type": "Cat","age": 3, "images":"images/cats/cat01.jpg"},
  {"name": "lupa","type": "Cat","age": 4, "images":"images/cats/cat02.jpg"},
  {"name": "Mittens","type": "Cat", "age": 2,"images": "images/cats/cat03.jpg"},
  {"name": "Talko","type": "Bird", "age": 1,"images": "images/dogs/birds/bird01.jpg"},
  {"name": "Berry","type": "Bird", "age": 2,"images": "images/dogs/birds/bird02.jpg"},
  {"name": "Pari","type": "Capybara", "age": 2,"images": "images/capybaras/capybara01.jpg"},
  {"name": "Gufi","type": "CCapybara", "age": 4,"images": "images/capybaras/capybara02.jpg"}
  
]; 

function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');

    if (!petList) {
        console.error('Error: Element with ID "pet-list" not found.');
        return; 
    }
    pets.forEach(pet => {
      const petDiv = document.createElement('div');
      petDiv.className = 'pet';
      petDiv.innerHTML = `
        <img src="${pet.images}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button onclick="adoptPet()">Adopt Now</button> 
      `;
      petList.appendChild(petDiv);
    });
    console.log('Pets loaded successfully.');
}
document.addEventListener('DOMContentLoaded', loadPets);