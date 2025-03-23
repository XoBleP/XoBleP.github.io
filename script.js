const friends = [
    { avatar: "Cerdise.jpg", name: "Cerdise" },
    { avatar: "Levin.jpg", name: "Ян Лев!н" },
    { avatar: "Arbyz.mp4", name: "ДаркМист" },
    { avatar: "cvefinder.jpg", name: "cvefinder паліцейски" },
    { avatar: "ceven.jpg", name: "𝙘𝙚𝙫𝙚𝙣" },
    { avatar: "galaktik.jpg", name: "галактиков паліцейски" },
    { avatar: "saturn.jpg", name: "🪐 sᴀᴛᴜʀɴ / +𝟦 𝖬𝖲𝖪 🔰" },
    { avatar: "cult.jpg", name: "᛭ Cultovik ᛭" },
    { avatar: "onlu.jpg", name: "I am OnlySmertnik" },
    { avatar: "trip.jpg", name: "Tripadonka ✟ #WhitePride" }
];

let currentIndex = 0;
const avatarElement = document.getElementById("current-avatar");
const nameElement = document.getElementById("current-name");

function showNextFriend() {
    const friend = friends[currentIndex];

    // Если это видео
    if (friend.avatar.endsWith(".mp4")) {
        avatarElement.innerHTML = `
            <video class="avatar" autoplay muted loop>
                <source src="${friend.avatar}" type="video/mp4">
                Ваш браузер не поддерживает видео.
            </video>
        `;
    } else {
        // Если это изображение
        avatarElement.innerHTML = `<img src="${friend.avatar}" alt="${friend.name}" class="avatar">`;
    }

    nameElement.textContent = friend.name;

    // Переход к следующему другу
    currentIndex = (currentIndex + 1) % friends.length;
}

// Показываем первого друга сразу
showNextFriend();

// Меняем друзей каждые 2 секунды
setInterval(showNextFriend, 2000);
