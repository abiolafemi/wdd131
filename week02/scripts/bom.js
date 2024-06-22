// Declare variable to hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

// Function to add a chapter to the list
button.addEventListener('click', function() {

// Check if input value is empty
if (input.value.trim() !='') {
    // Create a new li element
    const li = document.createElement('li');

    // Create a delete button
    const deleteButton = document.createElement('button');

    // Populate the li element's textContent with the input value
    li.textContent = input.value;

    // Populate the delete button textContent with a ❌
    deleteButton.textContent = '❌';

    // Addd a class to the delete button for styling purposes
    deleteButton.classList.add('delete');

    // Append the delete button to the li element
    li.append(deleteButton);

    // Append the li element to the unordered list
    list.append(li);

    // Clear the input field
    input.value = '';

    // Add an event listener to the delete button to remove the chapter
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
    });
} else {
    alert('Please enter a book and chapter.');
}
});


