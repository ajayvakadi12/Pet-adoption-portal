
 //  PET DATA


const pets = [

    {
        id: 1,
        name: "Bruno",
        type: "dog",
        age: 2,
        ageGroup: "young",
        location: "hyderabad",
        locationName: "Hyderabad",
        gender: "Male",
        emoji: "🐕",
        description:
            "Friendly and energetic Labrador who loves playing outdoors."
    },

    {
        id: 2,
        name: "Luna",
        type: "cat",
        age: 3,
        ageGroup: "adult",
        location: "vijayawada",
        locationName: "Vijayawada",
        gender: "Female",
        emoji: "🐈",
        description:
            "Calm and affectionate cat looking for a peaceful home."
    },

    {
        id: 3,
        name: "Max",
        type: "dog",
        age: 1,
        ageGroup: "young",
        location: "visakhapatnam",
        locationName: "Visakhapatnam",
        gender: "Male",
        emoji: "🐶",
        description:
            "Playful puppy with lots of energy and a loving personality."
    },

    {
        id: 4,
        name: "Milo",
        type: "rabbit",
        age: 2,
        ageGroup: "young",
        location: "chennai",
        locationName: "Chennai",
        gender: "Male",
        emoji: "🐰",
        description:
            "Sweet little rabbit who enjoys attention and fresh vegetables."
    },

    {
        id: 5,
        name: "Bella",
        type: "dog",
        age: 6,
        ageGroup: "adult",
        location: "hyderabad",
        locationName: "Hyderabad",
        gender: "Female",
        emoji: "🐕‍🦺",
        description:
            "Gentle and loyal dog who would love a family of her own."
    },

    {
        id: 6,
        name: "Oliver",
        type: "cat",
        age: 8,
        ageGroup: "senior",
        location: "vijayawada",
        locationName: "Vijayawada",
        gender: "Male",
        emoji: "🐈",
        description:
            "Quiet senior cat who enjoys naps and lots of cuddles."
    },

    {
        id: 7,
        name: "Coco",
        type: "rabbit",
        age: 4,
        ageGroup: "adult",
        location: "hyderabad",
        locationName: "Hyderabad",
        gender: "Female",
        emoji: "🐇",
        description:
            "Adorable and curious rabbit who loves exploring."
    },

    {
        id: 8,
        name: "Rocky",
        type: "dog",
        age: 9,
        ageGroup: "senior",
        location: "chennai",
        locationName: "Chennai",
        gender: "Male",
        emoji: "🐕",
        description:
            "Loyal senior dog who enjoys slow walks and human company."
    },

    {
        id: 9,
        name: "Misty",
        type: "cat",
        age: 1,
        ageGroup: "young",
        location: "visakhapatnam",
        locationName: "Visakhapatnam",
        gender: "Female",
        emoji: "🐱",
        description:
            "Playful young cat who loves toys and attention."
    }

];



 //  DOM ELEMENTS


const petGrid = document.getElementById("petGrid");

const resultCount = document.getElementById("resultCount");

const noResults = document.getElementById("noResults");

const searchInput = document.getElementById("search");

const typeFilter = document.getElementById("type");

const ageFilter = document.getElementById("age");

const locationFilter = document.getElementById("location");

const resetBtn = document.getElementById("resetBtn");

const modal = document.getElementById("modal");

const closeModal = document.getElementById("closeModal");

const adoptionForm =
    document.getElementById("adoptionForm");

const selectedPet =
    document.getElementById("selectedPet");

const petIdInput =
    document.getElementById("petId");


  // DISPLAY PETS


function displayPets(petsToDisplay) {

    petGrid.innerHTML = "";

    resultCount.textContent =
        `Showing ${petsToDisplay.length} ${
            petsToDisplay.length === 1 ? "pet" : "pets"
        }`;


    if (petsToDisplay.length === 0) {

        noResults.style.display = "block";

        return;
    }


    noResults.style.display = "none";


    petsToDisplay.forEach(pet => {

        const card = document.createElement("article");

        card.classList.add("pet-card");


        card.innerHTML = `

            <div class="pet-image">
                ${pet.emoji}
            </div>

            <div class="pet-info">

                <div class="pet-top">

                    <h3 class="pet-name">
                        ${pet.name}
                    </h3>

                    <span class="pet-type">
                        ${capitalize(pet.type)}
                    </span>

                </div>


                <div class="pet-details">

                    <span>
                        🎂 ${pet.age} ${
                            pet.age === 1 ? "year" : "years"
                        }
                    </span>

                    <span>
                        📍 ${pet.locationName}
                    </span>

                    <span>
                        ${pet.gender === "Male" ? "♂" : "♀"}
                        ${pet.gender}
                    </span>

                </div>


                <p class="pet-description">
                    ${pet.description}
                </p>


                <button
                    class="adopt-btn"
                    data-id="${pet.id}"
                >
                    Adopt ${pet.name}
                </button>

            </div>
        `;


        petGrid.appendChild(card);

    });


    addAdoptionListeners();
}




function capitalize(text) {

    return text.charAt(0).toUpperCase() +
        text.slice(1);

}


 //  FILTER PETS


function filterPets() {

    const searchValue =
        searchInput.value
            .toLowerCase()
            .trim();

    const typeValue =
        typeFilter.value;

    const ageValue =
        ageFilter.value;

    const locationValue =
        locationFilter.value;


    const filteredPets = pets.filter(pet => {

        const matchesSearch =
            pet.name
                .toLowerCase()
                .includes(searchValue);


        const matchesType =
            typeValue === "all" ||
            pet.type === typeValue;


        const matchesAge =
            ageValue === "all" ||
            pet.ageGroup === ageValue;


        const matchesLocation =
            locationValue === "all" ||
            pet.location === locationValue;


        return (
            matchesSearch &&
            matchesType &&
            matchesAge &&
            matchesLocation
        );

    });


    displayPets(filteredPets);
}




function resetFilters() {

    searchInput.value = "";

    typeFilter.value = "all";

    ageFilter.value = "all";

    locationFilter.value = "all";

    displayPets(pets);

}


function openAdoptionModal(pet) {

    modal.classList.add("active");

    selectedPet.textContent =
        `You are applying to adopt ${pet.name}.`;

    petIdInput.value = pet.id;

    document.body.style.overflow = "hidden";

}


function closeAdoptionModal() {

    modal.classList.remove("active");

    adoptionForm.reset();

    document.body.style.overflow = "";

}




function addAdoptionListeners() {

    const buttons =
        document.querySelectorAll(".adopt-btn");


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const petId =
                Number(button.dataset.id);

            const pet =
                pets.find(item => item.id === petId);


            if (pet) {

                openAdoptionModal(pet);

            }

        });

    });

}



adoptionForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const petId =
        Number(petIdInput.value);


    const pet =
        pets.find(item => item.id === petId);


    const request = {

        id: Date.now(),

        petId: petId,

        petName: pet.name,

        name:
            document.getElementById("name").value,

        email:
            document.getElementById("email").value,

        phone:
            document.getElementById("phone").value,

        message:
            document.getElementById("message").value,

        submittedAt:
            new Date().toISOString()

    };


    /* Get existing requests */

    const existingRequests =
        JSON.parse(
            localStorage.getItem("adoptionRequests")
        ) || [];


    /* Add new request */

    existingRequests.push(request);


    /* Save */

    localStorage.setItem(
        "adoptionRequests",
        JSON.stringify(existingRequests)
    );


    alert(
        `Thank you ${request.name}! ❤️\n\n` +
        `Your adoption request for ${pet.name} ` +
        `has been submitted successfully.`
    );


    closeAdoptionModal();

});



 //  EVENT LISTENERS


searchInput.addEventListener(
    "input",
    filterPets
);

typeFilter.addEventListener(
    "change",
    filterPets
);

ageFilter.addEventListener(
    "change",
    filterPets
);

locationFilter.addEventListener(
    "change",
    filterPets
);

resetBtn.addEventListener(
    "click",
    resetFilters
);

closeModal.addEventListener(
    "click",
    closeAdoptionModal
);


/* Close modal when clicking outside */

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeAdoptionModal();

    }

});




document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeAdoptionModal();

    }

});




displayPets(pets);