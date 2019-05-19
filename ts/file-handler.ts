class XMLHttpReqHandler {
    req: XMLHttpRequest;

    constructor(file: string, func) {
        this.req = new XMLHttpRequest();

        this.req.onload = () => func(this.req.responseText);
        this.req.open("GET", "assets/jsons/" + file + ".json");
        this.req.send();
    }
}