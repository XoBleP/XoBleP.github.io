document.addEventListener('DOMContentLoaded', function() {
    const friendsList = document.querySelector('.friends-list');
    const friends = document.querySelectorAll('.friend');
    const friendWidth = friends[0].offsetWidth + 20; // Ширина одного друга + отступ
    let scrollPosition = 0;

    function autoScroll() {
        scrollPosition += friendWidth;
        if (scrollPosition >= friendsList.scrollWidth) {
            scrollPosition = 0; // Возвращаемся в начало
        }
        friendsList.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }

    setInterval(autoScroll, 3000); // Листание каждые 3 секунды
});