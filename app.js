let song = document.getElementById('song');
let loadFileButton = document.getElementById('loadFileButton');
let fileInput = document.getElementById('fileInput');
let loopButton = document.getElementById('loopButton');
let dropArea = document.getElementById('dropArea');

loadFileButton.addEventListener('click', function() {
 fileInput.click();
});

fileInput.addEventListener('change', handleFiles);

function handleFiles(files) {
 let file = files[0];
 let url = URL.createObjectURL(file);
 song.src = url;
}

dropArea.addEventListener('drop', function(event) {
 event.preventDefault();
 handleFiles(event.dataTransfer.files);
});

loopButton.addEventListener('click', function() {
 song.loop = !song.loop;
 loopButton.textContent = song.loop ? 'ループ解除' : 'ループ';
});

function showDropIndicator(isShow) {
 dropArea.style.backgroundColor = isShow ? '#ddd' : '';
}
