const targetList = document.querySelector("tbody");
const targetBox = document.querySelector(".tile");

async function populateMacros() {
  const customRequest = await fetch("/api/macros");
  const macrosData = await customRequest.json();

  macrosData.forEach((meal) => {
    const appendItem = document.createElement("tr");
    appendItem.innerHTML = `
    <th>${meal["meal_id"]}</th>
    <td>${meal["meal_name"]}</td>
    <td>${meal["calories"]}</td>
    <td>${meal["carbs"]}g</td>
    <td>${meal["sodium"]}mg</td>
    <td>${meal["protein"]}g</td>
    <td>${meal["fat"]}g</td>
    <td>${meal["cholesterol"]}mg</td>`;
    targetList.append(appendItem);
  });
}

//  This function fetches all dining halls and then populates the neraby restaurants on the home page
async function populateRestaurants() {
  const diningRequest = await fetch("/api/dining");
  const diningData = await diningRequest.json();

  diningData["data"].forEach((restaurant) => {
    const appendItem = document.createElement("div");
    appendItem.classList.add("tile", "has-text-centered", "is-parent", "is-3");
    appendItem.innerHTML = `
    <article class="tile is-child box has-background-link-dark ">
    <span class="subtitle has-text-light">${restaurant["hall_name"]}</span>
    <br />
    <span class="has-text-light">${restaurant["hall_location"]}</span>
    </article>`;
    targetBox.append(appendItem);
  });
}

function windowActions() {
  console.log("window loaded");
  populateMacros();
  populateRestaurants();
}

window.onload = windowActions;
