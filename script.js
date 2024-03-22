document.getElementById("darkModeToggle")
.addEventListener("change",function(){
    document.body.classList.toggle('dark-mode');
});

function toggleDetails(id){
    var details = document.getElementById('details + id');
    details.style.display = details.style.display === 'block' ? 'none':'block';
}
