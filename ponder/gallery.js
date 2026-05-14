const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    // Code to show modal  - Use event parameter 'e'   
    if (e.target.src){
        let modalImgSrc = e.target.src;
        if (modalImgSrc.includes("sm")) {
            modalImgSrc = modalImgSrc.replace("sm", "full");
        }
        modalImage.src = modalImgSrc;
        modal.showModal();
    }
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});