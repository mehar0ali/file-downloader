const fileInput = document.querySelector("input")
const downloadBtn = document.querySelector("button")

downloadBtn.addEventListener("click", (e) =>{
    e.preventDefault() // preventing from submitting
    downloadBtn.innerHTML = "Downloading File...."
    fetchFile(fileInput.value);
});

function fetchFile(url){
    //fetching file & returing  response as blob
    fetch(url).then(res => res.blob()).then(file =>{
        let tempURL = URL.createObjectURL(file)
        
        let aTag = document.createElement("a") //Create a tag in HTML body
        aTag.href = tempURL;    // add file url in a tag
        // aTag.download = url.replace(/^.*[\\\/]/, ''); // add download file name
        aTag.download = "filename"
        document.body.appendChild(aTag) // add aTag in body
        aTag.click() // download on click
        aTag.remove() // remove 
        URL.revokeObjectURL(tempURL);
        downloadBtn.innerHTML = "Download File"
    })
}