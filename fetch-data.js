const apiUrl = "https://jsonplaceholder.typicode.com/users";
const dataContainer = document.getElementById("api-data");

async function fetchUserData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    console.log("Users fetched successfully: ", users);

    if (users && users.length > 0) {
      // Clear existing data in the dataContainer
      dataContainer.innerHTML = "";
      const userList = document.createElement("ul");
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
      dataContainer.appendChild(userList);
    }
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
    console.error("Failed to load user data.", error);
  }
}

document.addEventListener('DOMContentLoaded', fetchUserData)
