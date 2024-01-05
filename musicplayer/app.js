let song = document.getElementById('song');
let loadFileButton = document.getElementById('loadFileButton');
let fileInput = document.getElementById('fileInput');
let loopButton = document.getElementById('loopButton');

loadFileButton.addEventListener('click', function() {
 fileInput.click();
});

fileInput.addEventListener('change', function() {
 let file = fileInput.files[0];
 let url = URL.createObjectURL(file);
 song.src = url;
});

loopButton.addEventListener('click', function() {
 song.loop = !song.loop;
 loopButton.textContent = song.loop ? 'ループ解除' : 'ループ';
});
