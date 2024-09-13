console.log("IT’S ALIVE!");

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// Add automatic navigation menu
const ARE_WE_HOME = document.documentElement.classList.contains("home");

let pages = [
  { url: "", title: "Home" },
  { url: "projects/index.html", title: "Projects" },
  { url: "contact/index.html", title: "Contact" },
  { url: "resume/index.html", title: "Resume" },
  { url: "https://github.com/jadedeo", title: "GitHub" },
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
  let url = p.url;
  let title = p.title;

  url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;

  let a = document.createElement("a");
  a.href = url;
  a.textContent = title;

  a.classList.toggle(
    "current",
    a.host === location.host && a.pathname === location.pathname
  );

  // or do:
  if (a.host === location.host && a.pathname === location.pathname) {
    a.classList.add("current");
  }

  if (a.host !== location.host) {
    a.target = "_blank";
  }

  console.log(a);

  nav.append(a);
}

// Add 'current' class to active nav link
// let navLinks = $$("nav a");
// console.log("navLinks:", navLinks);

// let currentLink = navLinks.find(
//   (a) => a.host === location.host && a.pathname === location.pathname
// );
// console.log("currentLink:", currentLink);

// currentLink?.classList.add("current");
