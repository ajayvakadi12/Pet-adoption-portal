# PetNest

PetNest is a responsive, client-side pet adoption demo. Visitors can browse sample pet listings, find matches using search and filters, and submit an adoption request.

## Live Demo

[Open PetNest](https://petadoption009.ccbp.tech/)

## Features

- Browse sample dog, cat, and rabbit listings.
- Search by pet name and filter by type, age group, and location.
- Submit an adoption request for a selected pet.
- Save requests in the browser's local storage.
- Responsive layout for desktop and mobile devices.

## Run Locally

This project is a static website with no build step or external dependencies. Open `index.html` in a web browser to use it locally.

## Project Structure

```text
.
├── index.html   # Page structure and adoption form
├── script.js    # Pet listings, filters, and request handling
├── style.css    # Styling and responsive layout
└── README.md    # Project documentation
```

## Adoption Requests

Requests are stored in the current browser profile under the `adoptionRequests` local storage key. They are not sent to a server or shelter and are not synchronized across browsers or devices. Clearing browser site data removes saved requests.

## Updating Pet Listings

Edit the `pets` array in `script.js` to add or update listings. Each listing includes an ID, name, type, age, age group, location, gender, emoji, and description. Update the corresponding filter options in `index.html` if you add new types, age groups, or locations.
