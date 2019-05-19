function slideDOM() {

    let topSliders: any = document.getElementsByClassName("slide-top");
    const baseTimeout = 100;
    let timeout: number = 0;

    for (let slider of topSliders) {
        setTimeout(() => {
            if (!slider.classList.contains("slide-top-animated")) {
                slider.classList.add("slide-top-animated");
            }
        }, timeout);

        for (let innerSlider of slider.children) {
            setTimeout(() => {
                if (!innerSlider.classList.contains("slide-bottom-animated")) {
                    innerSlider.classList.add("slide-bottom-animated");
                }
            }, timeout);
        }

        timeout += baseTimeout;
    }

    let menu: any = document.getElementsByClassName("index-menu");
    for (let single of menu) {
        for (let child of single.children) {
            child.addEventListener("mouseout", function(event) {
                if (!child.classList.contains("swing-out")) {
                    child.classList.add("swing-out");
                }
            });
        }
    }

    let leftSliders: any = document.getElementsByClassName("slide-left");
    timeout = 0;

    for (let slider of leftSliders) {
        setTimeout(() => {
            if (!slider.classList.contains("slide-left-animated")) {
                slider.classList.add("slide-left-animated");
            }
        }, timeout);

        timeout += baseTimeout;
    }
}

slideDOM();