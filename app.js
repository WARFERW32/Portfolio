// project cards open and close functions

let projects = document.querySelectorAll('.project-card');
let projectsWrap = document.querySelectorAll('.project-wrapper');
console.log(projectsWrap);

projects.forEach((card, index) => {

    let closeBtn = card.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        projectsWrap.forEach((item, i) => {
        item.classList.remove('blur')   
        })
        card.classList.remove('active')
    })

   card.addEventListener('click', (e) => {
    
    console.log(e.target);
    if(e.target.classList != 'close-btn'){
        projectsWrap.forEach((item, i) => {
            if(i != index){
                item.classList.add('blur')
            }
        })
        card.classList.add('active')
    }
    
   }) 
})