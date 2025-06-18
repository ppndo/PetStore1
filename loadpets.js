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
  petList.on("click", ".adopt-btn", adoptPet);
  $('input[name="pet-type"]').on("change", function () {
    filterPets();

  });
}

function filterPets() {
  const types = $('input[name="pet-type"]:checked')
    .map(function () {
      return $(this).val(); 
    })
    .get(); 

  let filteredPets = [];
  if (types.length === 0) {
    filteredPets = [];
  } else {
    filteredPets = pets.filter((pet) => types.includes(pet.type));
  }

  const petList = $("#pet-list");
  petList.empty(); 
  if (filteredPets.length === 0) {
    petList.append($('<p>').addClass('no-pets-message').text('No pets match your current selection.'));
    return; 
  }
  filteredPets.forEach((pet) => {
    const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.images}" alt="${pet.name}"> <h3>${pet.name} - ${pet.type}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn" onclick="adoptPet()">Adopt Now</button> `);
    petList.append(petItem);
  });
}
$(document).ready(function() {
    filterPets();
    $('input[name="pet-type"]').on('change', filterPets);
});

document.addEventListener('DOMContentLoaded', loadPets);