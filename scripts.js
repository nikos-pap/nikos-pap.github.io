let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the icons class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the icons class
    }
}


function set_skills() {
    let skills_list = document.getElementsByClassName("skill-bar");

    for (var i = skills_list.length - 1; i >= 0; i--) {
        let rating = skills_list[i].getAttribute("rating");
        let bar = document.createElement("div");
        bar.classList.add("skill-bar");
        skills_list[i].appendChild(bar);
        for (var j = 0; j < 5; j++) {
            let node = document.createElement("div");
            node.classList.add("skill-section");
            if (j < rating) {
                node.classList.add("active-section");
            } else {
                node.classList.add("inactive-section");
            }
            bar.appendChild(node);
        }
    }
}
