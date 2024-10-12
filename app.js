 let currentIndex = 0;
        const images = document.querySelectorAll('#hero .images img');
        const dots = document.querySelectorAll('.carousel-indicators .dot');

        function updateCarousel() {
            images.forEach((img, index) => {
                img.classList.remove('active');
                dots[index].classList.remove('active');
            });

            images[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');

            currentIndex = (currentIndex + 1) % images.length; // Loop back to start
        }
        setInterval(updateCarousel, 5000);
