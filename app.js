let song = document.getElementById('song');
let loadFileButton = document.getElementById('loadFileButton');
let fileInput = document.getElementById('fileInput');
let loopButton = document.getElementById('loopButton');

loadFileButton.addEventListener('click', function() {
 fileInput.click();
});

fileInput.addEventListener('change', handleFiles);

function handleFiles(files) {
 let file = files[0];
 let url = URL.createObjectURL(file);
 song.src = url;
}

window.addEventListener('dragover', function(event) {
 event.preventDefault();
}, false);

window.addEventListener('drop', function(event) {
 event.preventDefault();
 handleFiles(event.dataTransfer.files);
}, false);

loopButton.addEventListener('click', function() {
 song.loop = !song.loop;
 loopButton.textContent = song.loop ? 'ループ解除' : 'ループ';
});
