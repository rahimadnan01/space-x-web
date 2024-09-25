// variables
let cursor = document.querySelector(".cursor");
let destinationImage = document.querySelector(".destination-left");
let destination_nav = document.querySelectorAll(".right-nav ul li");
let crew_coursel = document.querySelectorAll(".coursel-1");
let crew_left = document.querySelector(".crew-left-coursel");
let tech_btns = document.querySelectorAll(".tech-left-buttons .left-btn");
const currentPage = window.location.pathname;
const body = document.body;
const navLinks = document.querySelectorAll(".nav-link");
let nav_logo = document.querySelector(".mobile-nav-icon");
let mobile_nav_section = document.querySelector("#mobile-nav");
let mobile_cross_icon = document.querySelector(".cross_icon");
let flag = 0;

// for background images
let backgroundPicture = () => {
  if (currentPage.includes("index.html")) {
    body.style.backgroundImage = "url('assets/Hi Res Render - 1.png')";
  } else if (currentPage.includes("destination.html")) {
    body.style.backgroundImage = "url('assets/Hi Res Render - 2.png')";
  } else if (currentPage.includes("crew.html")) {
    body.style.backgroundImage = "url('assets/Bitmap_3.jpg')";
  } else if (currentPage.includes("technology.html")) {
    body.style.backgroundImage = "url('assets/Hi Res Render - 4.png')";
  }
};
backgroundPicture();

// function for mouse animation
document.addEventListener("mousemove", function (event) {
  cursor.style.top = event.clientY + "px";
  cursor.style.left = event.clientX + "px";
});
// Data arrays
let destination_pictures = [
  {
    url: "assets/Destination - A - Moon.png",
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
  },
  {
    url: "assets/Destination - B - Mars.png",
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
  },
  {
    url: "assets/Destination - C - Europa.png",
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
  },
  {
    url: "assets/Destination - D - Titan.png",
    name: " TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 years",
  },
];

// function for destination nav
destination_nav.forEach((item, index) => {
  item.addEventListener("click", () => {
    destinationImage.style.backgroundImage = `url('${destination_pictures[index].url}')`;
    document.querySelector(".destination-name").textContent =
      destination_pictures[index].name;
    document.querySelector(".description").textContent =
      destination_pictures[index].description;
    document.querySelector(".distance").textContent =
      destination_pictures[index].distance;
    document.querySelector(".time").textContent =
      destination_pictures[index].time;
  });
});

// crew data
let crew_pictures = [
  {
    post: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    url: "assets/crew-1.png",
  },
  {
    post: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    url: "assets/crew-2.png",
  },
  {
    post: "PILOT",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    url: "assets/crew-3.png",
  },
  {
    post: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    url: "assets/crew-4.png",
  },
];

// function for coursel
function resetBackground() {
  crew_coursel.forEach((div) => {
    div.style.backgroundColor = "gray";
  });
}

crew_coursel.forEach((item, index) => {
  item.addEventListener("click", () => {
    resetBackground();
    item.style.backgroundColor = "white";
    document.querySelector(".crew-post").textContent =
      crew_pictures[index].post;
    document.querySelector(".crew-name").textContent =
      crew_pictures[index].name;
    document.querySelector(".crew-description").textContent =
      crew_pictures[index].description;
    document.querySelector(
      ".crew-right-img"
    ).style.backgroundImage = `url('${crew_pictures[index].url}')`;
  });
});

// technology data
let tech_data = [
  {
    heading: "THE TERMINOLOGY…",
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    url: "assets/Technology Image - A.jpg",
  },
  {
    heading: "THE TERMINOLOGY…",
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    url: "assets/Technology Image - B.jpg",
  },
  {
    heading: "THE TERMINOLOGY…",
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.!",
    url: "assets/Technology Image - C.jpg",
  },
];

function resetBackground_2() {
  tech_btns.forEach((div) => {
    div.style.backgroundColor = "transparent";
    div.style.color = "white";
  });
}

tech_btns.forEach((item, index) => {
  item.addEventListener("click", () => {
    resetBackground_2();
    item.style.backgroundColor = "white";
    item.style.color = "#0B0D17";
    document.querySelector(".data-1").textContent = tech_data[index].heading;
    document.querySelector(".data-2").textContent = tech_data[index].name;
    document.querySelector(".data-3").textContent =
      tech_data[index].description;
    document.querySelector(
      ".technology-right"
    ).style.backgroundImage = `url('${tech_data[index].url}')`;
  });
});

// function for nav animation

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.parentElement.style.borderRight = "5px solid #ffff";
  }
});

// function for mobile nav
let mobile_nav = ()=>{
 
    nav_logo.addEventListener("click",()=>{
      mobile_nav_section.style.right="0"
    })
    mobile_cross_icon.addEventListener("click",()=>{
    mobile_nav_section.style.right="-270px"
    })
}
mobile_nav()


