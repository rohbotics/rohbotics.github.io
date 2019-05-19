class MenuItem {
    fileLink: string;
    label: string;

    constructor(fileLink: string, label: string) {
        this.fileLink = fileLink;
        this.label = label;
    }

    public generate() {
        let div = document.createElement("div");

        div.innerText = this.label;
        div.addEventListener("click", () => {
            navigateTo(this.fileLink);
        });

        return div;
    }
}

class Menu {
    items: MenuItem[];

    constructor() {
        this.items = [];
    }

    public addItem(fileLink: string, label: string) {
        this.items.push(new MenuItem(fileLink, label));
    }

    public copyItem(item: MenuItem) {
        this.items.push(item);
    }

    public generate() {
        let nav = document.createElement("nav");
        nav.classList.add("index-menu", "center-text", "slide-bottom-children");

        for (let item of this.items) {
            nav.appendChild(item.generate());
        }

        return nav;
    }
}

let bodys: any = document.getElementsByClassName("main-body");
let menu: Menu = new Menu();
let singleBody;

menu.addItem("about", "About me");
menu.addItem("experience", "Experience");
menu.addItem("projects", "projects");

for (let body of bodys) {
    body.prepend(menu.generate());
    singleBody = body;
}

function parseScroll() {
    let navbars: any = document.getElementsByClassName("index-menu");
    let padding = document.getElementById("add-padding") as HTMLElement;

    for (let navbar of navbars) {
        let offset = navbar.scrollHeight;
        let navcpy = navbar as HTMLElement;

        if (window.pageYOffset > offset) {
            navcpy.classList.add("sticky-menu");
            navcpy.style.width = (5 + singleBody.clientWidth).toString() + "px";
            padding.style.paddingTop = "150px";
        } else {
            navcpy.classList.remove("sticky-menu");
            navcpy.style.width = "100%";
            padding.style.paddingTop = "0";
        }
    }
}

window.onscroll = function() {
    parseScroll();
};