const panel = document.querySelectorAll('.panel')

panels.array.forEach(panel => {
    panel.addEventListener('click', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
});

function removeActiveClasses(){
    panel.forEach(panel =>{
        panels.classList.remove('active')
    })
}