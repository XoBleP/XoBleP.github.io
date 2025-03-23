document.addEventListener('DOMContentLoaded', function() {
    const friends = document.querySelectorAll('.friend');
    let currentIndex = 0;

    function showNextFriend() {
        // Скрываем текущего друга
        friends[currentIndex].classList.remove('active');

        // Переходим к следующему другу
        currentIndex = (currentIndex + 1) % friends.length;

        // Показываем следующего друга
        friends[currentIndex].classList.add('active');
    }

    // Показываем первого друга сразу
    friends[currentIndex].classList.add('active');

    // Меняем друзей каждые 2 секунды
    setInterval(showNextFriend, 2000);
});
