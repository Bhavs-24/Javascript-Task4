 window.onload = function () {
    var fileupload = document.getElementById('file_upload');
    var filepath = document.getElementById('file_path');
    var button = document.getElementById('btn_fileupload');

    button.onclick = function (){
        fileupload.click();
    };
    fileupload.onchange = function(){
    var filename = fileupload.value.split('\\')[fileupload.value.split('\\').length - 1];
    filepath.innerHTML = "<b>Uploaded Resume </b>" + filename;
    };
};

function onSubmit(){
    alert("Successfully submitted!");
    return true;
}

