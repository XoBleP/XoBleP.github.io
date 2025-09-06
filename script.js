const friends = [
    { avatar: "Cerdise.jpg", name: "Cerdise" },
    { avatar: "Levin.jpg", name: "Ян Лев!н" },
    { avatar: "cvefinder.jpg", name: "cvefinder" },
    { avatar: "Arbyz.mp4", name: "DarkMyst" }
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
