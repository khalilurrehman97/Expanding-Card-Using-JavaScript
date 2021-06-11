const panels = document.querySelectorAll('.panel')
panels.forEach((panel)=>{
panel.addEventListener('click',()=>{
    RemoveOldActiveClasses()
    panel.classList.add('active')
})
})

function RemoveOldActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}