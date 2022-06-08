const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const infobox = document.getElementById('infobox');
const infoIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 



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

//This is the script for the infobox 

const openinfoButtons = document.querySelectorAll('[data-info-target]')
const closeinfoButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openinfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info = document.querySelector(button.dataset.infoTarget)
    openinfo(info)
  })
})

overlay.addEventListener('click', () => {
  const info = document.querySelectorAll('.info.active')
  infos.forEach(info => {
    closeinfo(info)
  })
})

closeinfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info = button.closest('.info')
    closeinfo(info)
  })
})

function openinfo(info) {
  if (info == null) return
  info.classList.add('active')
  overlay.classList.add('active')
}

function closeinfo(info) {
  if (info == null) return
  info.classList.remove('active')
  overlay.classList.remove('active')
}