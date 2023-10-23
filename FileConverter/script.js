

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
        // const li = document.createElement('li');
        // li.classList.add('file-list');
        // li.innerHTML = `
        
        //                 `;
        // selectedFiles.appendChild(li);

        // Delete any of the Uploaded files
        const deleteButton = li.querySelector('.close-button');
        deleteButton.addEventListener('click', () => {
          li.remove();
        });
    };
}



//========= Display type of format user selected ========//
// const formatList = document.getElementById('format-list');
// const textInput = document.querySelector('.select-convertor');

// let selectedLabel = false;
// if(formatList){
//     formatList.querySelectorAll('li').forEach( listItem => {
//         listItem.addEventListener('click', (e) => {
//             const label = listItem.querySelector('span').textContent;
//             if(textInput.textContent !== label){
//               e.preventDefault();
//               textInput.textContent = label;
//               selectedLabel = true;
//             }
//         });
//     })
// }

//========= Display type of format user selected ========//
const formatList = document.getElementById('format-list');
const textInput = document.querySelector('.select-convertor');

// Display the selected format on the screen
// if (formatList) {
//   formatList.querySelectorAll('li').forEach(listItem => {
//     listItem.addEventListener('click', (e) => {
//       const label = listItem.querySelector('span').textContent;
//       textInput.textContent = label;
//     });
//   });
// }

//====== activate the pop up format-menu for format selection =======//

const popUpFormat = document.querySelector(".conversion");
const activateDropDown = document.querySelector(".dropdown-menu");

if (popUpFormat) {
  popUpFormat.addEventListener("click", (e) => {
    // console.log("hi");

    // activateDropDown.classList.add("activate-dropdown");
    
  });

  // Add an event listener to the activateDropDown element to remove the div when the user clicks outside of it.
  activateDropDown.addEventListener("click", (e) => {
    // Prevent the event from bubbling up to the parent element.
    e.stopPropagation();

    // Remove the activate-dropdown class from the div.
    // activateDropDown.classList.remove("activate-dropdown");

  });
}

//====== activate the pop up format-menu for format selection =======//
// Display the list of format
// const convEls = document.querySelector('.conversion');
// const activatePopup =  document.querySelector('.dropdown-menu');
// const mainstr = document.querySelector('body');


// document.addEventListener('click', (e) => {
//   if (e.target === convEls) {
//     activatePopup.classList.add('activate-dropdown');
//   } else {
//     activatePopup.classList.remove('activate-dropdown');
//   }
// });









//========= Display type of format user selected ========//

// Display the selected format on the screen
if (formatList) {
  formatList.querySelectorAll('li').forEach(listItem => {
    listItem.addEventListener('click', (e) => {
      const label = listItem.querySelector('span').textContent;
      textInput.textContent = label;
    });
  });
}

//====== activate the pop up format-menu for format selection =======//
// Display the list of format
const convEls = document.querySelector('.conversion');
const activatePopup =  document.querySelector('.dropdown-menu');
const mainstr = document.querySelector('body');

document.addEventListener('click', (e) => {
  if (e.target === convEls) {
    // Check if the popup is already visible
    if (!activatePopup.classList.contains('activate-dropdown')) {
      // Add the activate-dropdown class to the popup
      activatePopup.classList.add('activate-dropdown');
    }
  } else {
    // Remove the activate-dropdown class from the popup
    activatePopup.classList.remove('activate-dropdown');
  }
});



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