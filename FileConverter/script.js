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


const fileIn = document.getElementById('file-input');
const selectedFiles = document.getElementById('files-list')

let fileList = [];

function handleFilesSelected(){
    const selectFiles = [...fileIn.files];
    for (const f of selectFiles){
        fileList.push(f);
        // console.log(fileList);
        const li = document.createElement('li');
        li.classList.add('file-list');
        li.innerHTML = `
        <p>albertsssssssssss.jpb</p>
        <div class="select-conversion-container">
            <span>to</span>
            <div class="conversion">
                <button class="select-convertor">
                    
                    <div class="enclose">
                        <div class="dropdown-menu select-choice-container select-format show">
                            <div class="format-search">
                                <input class="form-search" type="text" placeholder="Search">
                                <i class="ri-search-line search-icon"></i>
                                <i class="ri-close-fill search-reset"></i>
                            </div> 
                    
                            <div class="wrapper">
                                <ul class="types">
                                    <li class="current">Image</li>
                                    <li class="current">Document</li>
                                    <li class="current">Ebook</li>
                                    <li class="current">Font</li>
                                    <li class="current">Vector</li>
                                </ul>
                                <div class="formats">
                                    <div class="format-inner">
                                        <ul id="format-list">
                                            <li class="current format-btn btn-secondary"><span>PNG</span></li>
                                            <li class="current format-btn btn-secondary"><span>GIF</span></li>
                                            <li class="current format-btn btn-secondary"><span>BEEP</span></li>
                                            <li class="current format-btns btn-secondarys"><span>JPG</span></li>
                                            
                                            <li class="current format-btns btn-secondarys"><span>JPEG</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- <div class="confirmed-selection"> -->
                            <!-- <span>JPEG</span> -->
                        <!-- </div> -->
                        <!-- <i class="ri-arrow-down-s-line"></i> -->
                    </div>
                </button>
            </div>
        </div>

        <div class="status">
            <span class="spining-ready">Ready</span>
            <span class="spining-finish">Finished</span>
            <i class="ri-refresh-line"></i>
        </div>

        <div class="file-size">23.98<span>KB</span></div>
        <div class="download-link">
            <a href="">Download</a>
        </div>
        <div class="close-button">
            <i class="ri-close-line"></i>
        </div>
        
                        `;
        selectedFiles.appendChild(li);

        // Delete any of the Uploaded files
        const deleteButton = li.querySelector('.close-button');
        deleteButton.addEventListener('click', () => {
        //   console.log('delete');
          li.remove();
        });
    };
}


// Convert any File 
function convertFiles(){
    // Get the file types of the files in the file list
    const fileTypes = fileList.map(file => file.type);

    // Check if all files are PDF files
    if(fileTypes.every(type => type === 'application/pdf')) {
        // Convert the files to CSV files
        const csvFiles = fileList.map(file => convertPDFToCSV(file));
        console.log(csvFiles);
        // Download the CSV files
        // csvFiles.forEach(csvFile => downloadCSVFile(csvFile));
     
    } else {
        console.log('The files you entered are not PDF ....');
    }
    
}

document.getElementById('file-input').addEventListener('change', handleFilesSelected, false);
// document.querySelector('.convert').addEventListener('click', convertFiles);


// Convert PDF -> CSV
async function convertPDFToCSV(file){
    const csvFile = new Blob([file], {'type': 'application/csv'});
    // console.log(csvFile);
   
    // Download the CSV file
    return csvFile;
}


function downloadCSVFile(csvFile) {
    // get filename
    const filename = csvFile.name;

    // Create a link to download the CSVFile
    const donwloadLinkParent = document.querySelector('.download-link');
    const link = document.createElement('a');
    link.href = URL.createObjectURL(csvFile);
    link.download = filename;

    donwloadLinkParent.appendChild(link);

    link.click();
}



//====== activate the dropdown-meu for format selection =======//
const dropDownListEl = document.querySelector(".conversion button");
const activateDropDown = document.querySelector(".dropdown-menu")

if(dropDownListEl){
    dropDownListEl.addEventListener("click", (e) => {
        console.log('hi')
        activateDropDown.classList.add('activate-dropdown');
        e.stopPropagation()
    
        document.addEventListener('click', (e) => {
    
            if(!dropDownListEl.contains(e.target)){
                activateDropDown.classList.remove('activate-dropdown');
            }
            
        })
    })
}



//========= Get type of format from user click ========//

const list = document.getElementById('format-list');
const testInput = document.querySelector('.confirmed-selection span');

if(list){
    list.querySelectorAll('li').forEach( listItem => {
        listItem.addEventListener('click', () => {
            const label = listItem.querySelector('span').textContent;
            testInput.textContent = label
            // console.log(label)
        })
    
       
    })
}


