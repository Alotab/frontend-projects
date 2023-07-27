// const dropEl = document.querySelector(".drop-down");
const dropEl = document.querySelector(".drop-down");
const dropdownEl = document.querySelector('.drop-down-list');




dropEl.addEventListener('click', () => {
    console.log('hi');
    dropdownEl.classList.add('active');


    document.addEventListener('mousedown', (e) => {
        e.preventDefault();
        dropdownEl.classList.remove('active');
    });
  
})


//======================PROCESS FILES ============================//


const todoFilename = document.querySelector('.file-name');
const label = document.querySelector("label[for='my-file-input']");
const input = document.querySelector("#my-file-input");

// const details = input.files[0];
// const names = input.name;
// const size = input.size;
// const lastModified = input.lastModified;

let fileList = [];
function handleFileSelect(event){
    const files = event.target.files[0];


    //create a todo list
    // const fileTodoLi = document.createElement('li');
    // const todofileName = document.createElement('p');
    // todofileName.textContent = files.name;
    // fileTodoLi.appendChild(todofileName)

    const filename = files.name;
    const filesize = files.size;
    const realsizeMegabyte = filesize / 1048576;
    const realsizekb = filesize / 1024;

    
    const result = document.getElementById('files-list');

    fileList.push(files);

    // const row = fileList.forEach((fii)=> {
    //     console.log(fii.name);
    // });

    let isFirstTime = false;
    
    // fileList.forEach((file) => { 
    //     if(!isFirstTime) {
    //         const li = document.createElement('li');

    //         li.innerHTML =  `
    //         <p>${file.name}</p>
    //          <div class="scroll-pick"></div>
    //          <div class="file-size">${file.size}<span>KB</span></div>
    //          <div class="close-button">x</div>
    //         `;
    //         result.innerHTML += li.textContent;
    //     } 
       
       
    // });

    // for (var i =0; i < fileList.length; i++) {
    //     const li = document.createElement('li');
    //     li.innerHTML =  `
    //                     <p>${fileList[i].name}</p>
    //                     <div class="scroll-pick"></div>
    //                     <div class="file-size">${fileList[i].size}<span>KB</span></div>
    //                     <div class="close-button">x</div>
    //                     `;
    //     result.innerHTML += li.textContent;
    // }



    //add file name to list
    // document.getElementById('files-list').appendChild(fileTodoLi);
}

// document.getElementById('my-file-input').addEventListener('change', handleFileSelect);



// function uploadFile() {
//     const fileInput = document.getElementById("my-file-input");
//     const file = fileInput.files[0];
//     console.log(file)
//     if(file.type ===  "application/pdf"){
//         console.log('pdf');
//     } else{
//         console.log('new file');
//     }
//     console.log(file.name)
// }


// label.addEventListener('click', () => {
//     console.log(input.files[0]);

  
//     todoFilename.innerText=names;


    
// })




// function handleFile(event){
//     const file = event.target.files[0];

    
// }
// dropEl.addEventListener('click', () => { 
//     dropdownEl.classList.toggle('drop-down-list')
// })





//////=========chatgpt removes previous file
const fileInputt = document.getElementById('file-input');
const form = document.getElementById('file-form');
const selectedFiles = document.getElementById('files-list');


fileInputt.addEventListener('change', (event) => {
    selectedFiles.innerHTML=``;


    for (var i=0; i < event.target.files.length; i++) {
        let file = event.target.files[i];
        let reader = new FileReader();

        reader.onload = (event) => {
            const li = document.createElement('li');
            li.innerHTML =    `
                            <p>${file.name}</p>
                            <div class="scroll-pick"></div>
                            <div class="file-size">${file.size}<span>KB</span></div>
                            <div class="close-button">x</div>
                            `;
            selectedFiles.appendChild(li);
        };

        reader.readAsDataURL(file);


    }
})



let files = [];

function handleFileSelection(evt) {
    let files = evt.target.files;  // filelist object


    //loop through the filelist object and add each file to the array
    for (var i=0; i < files.length; i++) {
        files.push(files[i]);
    }
    


    let fileList = document.getElementById('files-list');
    fileList.innerHTML = ``;
    for (var i = 0, f; f = files[i]; i++) {
        let lst = document.createElement('li');

        lst.innerHTML += `
            <p>${f.name}</p>
            <div class="scroll-pick"></div>
            <div class="file-size">${f.size}<span>KB</span></div>
            <div class="close-button">x</div>
        `;
        // fileList.appendChild(lst);
    }

}

document.getElementById('file-input').addEventListener('change', handleFileSelect, false);
