console.log("You are awesome if you can see this!");


/* Automatically add the target property to all links */
const links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
    links[i].target = "_blank";
}