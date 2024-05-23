document.addEventListener("DOMContentLoaded", function() {
    let loadMoreBtn = document.querySelector("#load-more");
    let currentItem = 8;

    loadMoreBtn.addEventListener("click", function() {
        let boxes = document.querySelectorAll(".box-container .box");
        for (let i = currentItem; i < currentItem + 4; i++) {
            if (boxes[i]) {
                boxes[i].style.display = "grid";
            }
        }
        currentItem += 4;
        if (currentItem >= boxes.length) {
            loadMoreBtn.style.display = "none";
        }
    });
});

