document.addEventListener('DOMContentLoaded', () => {
    // CARROSSEL
    const track = document.querySelector('.gallery-track');
    const slides = Array.from(track.children);
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;
    const typingText = document.getElementById('typingText');
    const message = "Como eu sei que você ama essas bobeirinhas bem bregas, preparei essa homenagem pra você!";
    let i = 0;

    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();

    // ÁUDIO
    const audio = document.getElementById('backgroundAudio');
    const audioBtn = document.getElementById('audioToggle');

    audioBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            audioBtn.textContent = '🔊 Pausar música';
        } else {
            audio.pause();
            audioBtn.textContent = '🔈 Tocar música';
        }
    });

    // CORAÇÕES SIMPLES
    const loveBtn = document.getElementById('loveBtn');
    let heartInterval = null;

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.animationDuration = (3 + Math.random() * 2) + 's';
        heart.textContent = '❤️';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }

    loveBtn.addEventListener('click', () => {
        if (heartInterval) {
            clearInterval(heartInterval);
            heartInterval = null;
            loveBtn.textContent = 'Deixe o amor brilhar ✨';
            loveBtn.classList.remove('active');
        } else {
            heartInterval = setInterval(createHeart, 200);
            loveBtn.textContent = 'Pausar amor 💔';
            loveBtn.classList.add('active');
        }
    });

    function typeWriter() {
        if (i < message.length) {
            typingText.textContent += message.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    setTimeout(typeWriter, 2000);
});
