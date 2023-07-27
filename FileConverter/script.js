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
// const filename = files.name;
// const filesize = files.size;
// const realsizeMegabyte = filesize / 1048576;
// const realsizekb = filesize / 1024;



////online 
const fileIn = document.getElementById('file-input');
const selectedFiles = document.getElementById('files-list')

fileIn.onchange = () => {
    const selectFiles = [...fileIn.files];
    for (const f of selectFiles){

        const li = document.createElement('li');
        li.innerHTML =    `
                        <p>${f.name}</p>
                        <div class="scroll-pick"></div>
                        <div class="file-size">${f.size}<span>KB</span></div>
                        <div class="close-button"><i class="ri-close-line"></i></div>
                        `;
        selectedFiles.appendChild(li);


        // Delete any of the Uploaded files
        const deleteButton = li.querySelector('.close-button');
        deleteButton.addEventListener('click', () => {
        //   console.log('delete');
          li.remove();
        });
    };
};
