
const settingsMenu = document.querySelector(".settings-menu");
const darkBtn = document.getElementById("dark-btn");



// show the menu bar by toggling over the user icon in the right side of the navbar
const settingsMenuToggle = () =>{
    settingsMenu.classList.toggle("settings-menu-height");
}

//change to Dark Mode
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    //update the local storage when user click on the button
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark")
    }
    else{
        localStorage.setItem("theme", "light");
    }
}


if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}

