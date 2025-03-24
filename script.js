const friends = [
    { avatar: "Cerdise.jpg", name: "Cerdise" },
    { avatar: "Levin.jpg", name: "Ян Лев!н" },
    { avatar: "Arbyz.mp4", name: "Даркмист" },
    { avatar: "cvefinder.jpg", name: "cvefinder паліцейски" },
    { avatar: "ceven.jpg", name: "𝙘𝙚𝙫𝙚𝙣" },
    { avatar: "galaktik.jpg", name: "галактиков паліцейски" },
    { avatar: "saturn.jpg", name: "🪐 sᴀᴛᴜʀɴ / +𝟦 𝖬𝖲𝖪 🔰" },
    { avatar: "cult.jpg", name: "᛭ Cultovik ᛭" },
    { avatar: "Onlu.jpg", name: "I am OnlySmertnik" },
    { avatar: "trip.jpg", name: "Tripadonka ✟ #WhitePride" },
    { avatar: "int.jpg", name: "Интарк" }, 
    { avatar: "over.jpg", name: "𓆩I'm overheaven𓆪" }, 
    { avatar: "ebyr.jpg", name: "𝙀𝙗𝙮𝙧 #𝙨𝙤𝙛𝙩𝙨 #𝙨𝙤𝙛𝙩 #𝘀𝗼𝗳𝘁𝘀" }, 
];

let currentIndex = 0;
const avatarElement = document.getElementById("current-avatar");
const nameElement = document.getElementById("current-name");

function showNextFriend() {
    const friend = friends[currentIndex];

    
    avatarElement.innerHTML = "";


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
        
        const img = document.createElement("img");
        img.src = friend.avatar;
        img.alt = friend.name;
        img.className = "avatar";
        avatarElement.appendChild(img);
    }

    
    nameElement.textContent = friend.name;

  
    currentIndex = (currentIndex + 1) % friends.length;
}


showNextFriend();


setInterval(showNextFriend, 2000);
