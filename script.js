document.addEventListener('DOMContentLoaded', () => {
    // CARROSSEL
    const track = document.querySelector('.gallery-track');
    const slides = Array.from(track.children);
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const typingText = document.getElementById('typingText');
    const message = "Como eu sei que você ama essas bobeirinhas bem bregas, preparei essa homenagem especialmente para você!";
    const startDate = new Date(2021, 10, 6, 16, 0, 0);
    let currentIndex = 0;
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

    function updateTimeTogether() {
        const now = new Date();
        let diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        diff -= years * (1000 * 60 * 60 * 24 * 365.25);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);

        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);

        const minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);

        const seconds = Math.floor(diff / 1000);

        document.getElementById("timeTogether").innerHTML =
            `Juntos há ${years} anos,<br> ${days} dias,<br> ${hours} horas,<br> ${minutes} minutos e<br> ${seconds} segundos 💖`;

    }

    // Atualiza automaticamente a cada segundo
    setInterval(updateTimeTogether, 1000);
    updateTimeTogether();
});
