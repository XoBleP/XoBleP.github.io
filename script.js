const friends = [
    { avatar: "Cerdise.jpg", name: "Cerdise" },
    { avatar: "Levin.jpg", name: "Ян Лев!н" },
    { avatar: "Arbyz.mp4", name: "ДаркМист" },
    { avatar: "cvefinder.jpg", name: "cvefinder паліцейски" },
    { avatar: "ceven.jpg", name: "𝙘𝙚𝙫𝙚𝙣" },
    { avatar: "galaktik.jpg", name: "галактиков паліцейски" },
    { avatar: "saturn.jpg", name: "🪐 sᴀᴛᴜʀɴ / +𝟦 𝖬𝖲𝖪 🔰" },
    { avatar: "cult.jpg", name: "᛭ Cultovik ᛭" },
    { avatar: "Onlu.jpg", name: "I am OnlySmertnik" },
    { avatar: "trip.jpg", name: "Tripadonka ✟ #WhitePride" }
];

let currentIndex = 0;
const avatarElement = document.getElementById("current-avatar");
const nameElement = document.getElementById("current-name");

function showNextFriend() {
    const friend = friends[currentIndex];

    // Очищаем содержимое avatarElement
    avatarElement.innerHTML = "";

    // Если это видео
    if (friend.avatar.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.className = "avatar";
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        const source = document.createElement("source");
        source.src = friend.avatar;
        source.type = "video/mp4";
        video.appendChild(source);
        avatarElement.appendChild(video);
    } else {
        // Если это изображение
        const img = document.createElement("img");
        img.src = friend.avatar;
        img.alt = friend.name;
        img.className = "avatar";
        avatarElement.appendChild(img);
    }

    // Обновляем имя
    nameElement.textContent = friend.name;

    // Переход к следующему другу
    currentIndex = (currentIndex + 1) % friends.length;
}

// Показываем первого друга сразу
showNextFriend();

// Меняем друзей каждые 2 секунды
setInterval(showNextFriend, 2000);
