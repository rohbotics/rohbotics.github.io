let getSourceFromService = {
    "github": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-github.svg",
    "linkedin": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-linkedin.svg",
    "facebook": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-facebook.svg",
    "cv": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-cv.png",
    "leetcode": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-leetcode.png",
    "youtube": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-youtube.svg",
    "telegram": "assets/icons/Font_Awesome_5_brands_telegram.svg",
    "behance": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-behance.svg",
    "devianart": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-devianart.svg",
    "dribble": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-dribble.svg",
    "dropbox": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-dropbox.svg",
    "evernote": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-evernote.svg",
    "google-plus": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-google-plus.svg",
    "instagram": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-instagram.svg",
    "pinterest": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-pinterest.svg",
    "product-hunt": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-product-hunt.svg",
    "skype": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-skype.svg",
    "slack": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-slack.svg",
    "spotify": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-spotify.svg",
    "twitter": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-twitter.svg",
    "vimeo": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-vimeo.svg",
    "wordpress": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-wordpress.svg",
};

interface Social {
    link: string;
    title: string;
    service: string;
}

class SingleSocial {
    social: Social;

    public constructor(social: Social) {
        this.social = social;
    }

    public generate() {
        let a = document.createElement("a");

        a.href = this.social.link;
        a.appendChild(this.generateSocialCell());

        return a;
    }

    private generateSocialCell() {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let span = document.createElement("span");

        div.classList.add("social-cell", "slide-left");
        img.src = getSourceFromService[this.social.service];
        span.innerText = this.social.title;

        div.appendChild(img);
        div.appendChild(span);
        return div;
    }
}

class Nav {
    cells: Social[];

    public constructor() {
        this.cells = [];
    }

    public addSocial(social: Social) {
        this.cells.push(social);
    }

    generate() {
        let nav = document.createElement("nav");
        nav.classList.add("social-grid");

        for (let singleCell of this.cells) {
            let newCell: SingleSocial = new SingleSocial(singleCell);
            nav.appendChild(newCell.generate());
        }

        return nav;
    }
}

let handler = new XMLHttpReqHandler("socials", makeJobs);

function makeJobs(str: string) {
    let socials: Social[] = JSON.parse(str);
    let body = document.getElementsByTagName("body");
    let newNav: Nav = new Nav();

    socials.forEach((val) => {
       newNav.addSocial(val);
    });

    for (let single of body) {
        single.appendChild(newNav.generate());
    }

    slideDOM();
}
