// Function to fetch categories
const fetchCategory = async () => {
    const url = 'http://localhost:8080/api/v1/category/all-categories';
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// Function to populate dropdown menu with categories
const populateDropdown = async () => {
    // Fetch categories
    const categories = await fetchCategory();

    // Select the dropdown element
    const selectElement = document.getElementById('categories');

    // Clear existing options
    selectElement.innerHTML = '';

    // Create and append options to the dropdown
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id; // Set value to category id
        option.textContent = category.name; // Set text to category name
        selectElement.appendChild(option);
    });

};

// Call the function to populate the dropdown menu
populateDropdown();