// Get the modal
var modal = document.getElementById("myModal");
            
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block";
    event.preventDefault();
}

function closeModal(){
    location.reload(); //Doing a mimic that a form has been sent and reloading the page
}