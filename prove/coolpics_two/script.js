const gallery = document.getElementById('coolpics');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const menuWord = document.getElementById("menu-word");
const menu = document.getElementById("menu");

menu.classList.toggle("hidden");

// Event listener for toggling the menu
menuWord.addEventListener("click", (event) => {
    menu.classList.toggle("hidden");
});

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    // Code to show modal  - Use event parameter 'e'   
    if (e.target.src){
        let modalImgSrc = e.target.src;
        modalImage.src = modalImgSrc;
        modal.showModal();
    }
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
    modalImage.src = "";
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
        modalImage.src = "";
    }
});