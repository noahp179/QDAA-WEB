const galleryContainer = document.querySelector('.gallery-container');
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
        this.timer = null; // Add timer property
        this.currentIndex = 0; // Add this line to track current index
    }

    updateGallery() {
        this.carouselArray.forEach((el, i) => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5', 'gallery-item-6', 'gallery-item-7', 'gallery-item-8', 'gallery-item-9');
            let newClass = `gallery-item-${((i + this.currentIndex) % this.carouselArray.length) + 1}`;
            el.classList.add(newClass);
        });
    }

    setCurrentState() {
        this.currentIndex = (this.currentIndex + 1) % this.carouselArray.length;
        this.updateGallery();
    }

    startAutoRotation(interval) {
        this.timer = setInterval(() => {
            this.setCurrentState();
        }, interval);
    }

    stopAutoRotation() {
        clearInterval(this.timer);
    }
}

const example = new Carousel(galleryContainer, galleryItems);
example.startAutoRotation(1500); // Start auto-rotation every 3 seconds