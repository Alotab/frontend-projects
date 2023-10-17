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
        li.innerHTML =    `
                        <p>${f.name}</p>
                        <div class="select-conversion-container">
                            <span>to</span>
                            <div class="conversion">
                                <button class="select-convertor">
                                    <div class="enclose">
                                        <div class="dot-read">...</div>
                                        <div class="confirmed-selection">
                                            <!-- <span>PNG</span> -->
                                        </div>
                                        <i class="ri-arrow-down-s-line"></i>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div class="status">
                            <span class="spining-ready">Ready</span>
                            <span class="spining-finish">Finished</span>
                            <i class="ri-refresh-line"></i>
                        </div>
                    
                        <div class="file-size">${f.size}<span>KB</span></div>
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


  
  