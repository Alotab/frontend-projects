const container = document.querySelectorAll(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");

// js code to show/hide password and change icon

pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventlistener("click", ()=>{
        pwFields.forEach(pwField =>{
            if(pwField.type === "password"){
                pwField.type = "text";
            }else{
                pwField.type = "password";
            }
        })
    })
})
