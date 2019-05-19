interface ProjectDesc {
    title: string;
    imgUrl: string;
    date: string;
    description: string;
}

class Project {
    desc: ProjectDesc;

    constructor(desc: ProjectDesc) {
        this.desc = desc;
    }

    public generate() {
        let project = document.createElement("div");
        let innerDiv = document.createElement("div");

        project.classList.add("single-project");
        innerDiv.classList.add("project");

        innerDiv.appendChild(this.generateImg());
        innerDiv.appendChild(this.generateDesc());
        project.appendChild(innerDiv);

        return project;
    }

    private generateImg() {
        let img = document.createElement("div");
        img.classList.add("img-container");
        img.style.backgroundImage = "url(\"" + this.desc.imgUrl + "\")";

        return img;
    }

    private generateDesc() {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");

        div.classList.add("text");

        h3.innerHTML = this.desc.title;
        h4.innerHTML = this.desc.date;
        p.innerHTML = this.desc.description;

        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(p);

        return div;
    }
}

class Projects {
    projects: Project[];

    constructor() {
        this.projects = [];
    }

    public add(project: Project) {
        this.projects.push(project);
    }

    public generate() {
        let div = document.createElement("div");

        this.projects.forEach((value) => {
            div.appendChild(value.generate());
        });

        return div;
    }
}

let handler = new XMLHttpReqHandler("projects", makeProjects);

function makeProjects(str: string) {
    let projects: ProjectDesc[] = JSON.parse(str);
    let dom = document.getElementById("projects-timeline");
    let aux = new Projects();

    projects.forEach((value) => {
        aux.add(new Project(value));
    });

    dom.appendChild(aux.generate());
    slideDOM();
}