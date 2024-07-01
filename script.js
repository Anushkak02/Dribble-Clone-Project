document.addEventListener("click", clickFunction);

function clickFunction() {
    const likeIcon = document.getElementsByClassName('bi-heart-fill')[0];
    const likeCountElement = document.getElementById('like-count');

    // Ensure the likeIcon element exists
    if (likeIcon) {
        likeIcon.classList.add('liked');

        // Ensure the likeCountElement exists and get the current count
        if (likeCountElement) {
            let count = parseInt(likeCountElement.textContent) || 0;
            count += 1;
            likeCountElement.textContent = count;
        }
    }
}
    
