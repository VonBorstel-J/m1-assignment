const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 




imageIndexes.forEach((i)  => {
    const image = document.createElement('img');
    image.src = `images/dog${i}.jpg`;
    image.alt = `this is the gallery image ${i} for the assignment`;
    image.classList.add('galleryImg');


        //popupstuff
    image.addEventListener('click', () => {
       
        popup.style.transform = `translateY(0)`;
            selectedImage.src = `images/dog${i}.jpg`;
            selectedImage.alt = `this is the gallery image ${i} for the assignment`;
    })

    gallery.appendChild(image);
});

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`; 
});
