//nav toggle

let links = document.querySelectorAll('.links');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'))
        link.classList.add('active')
    })
})

//toggle navbar in mobile view
const toggleBtn = document.querySelector('.toggle-btn');
const ul = document.querySelector('.nav-links-container');


toggleBtn.addEventListener('click', () => {
    
    toggleBtn.classList.toggle('active');
    ul.classList.toggle('active');
})


// project cards open and close functions

let projects = document.querySelectorAll('.project-card');
let projectsWrap = document.querySelectorAll('.project-wrapper');


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

// project filter function

const tags = document.querySelectorAll('.filter-btn');

tags.forEach(btn => {
    btn.addEventListener('click', () => {
        projects.forEach(card => {
            if(btn.innerHTML.toLowerCase == 'all'){
                card.style.display = 'block';
            } else{
                if(card.getAttribute('data-tags').includes(btn.innerHTML.toLowerCase())){
                    card.style.display = 'none';
                }else{
                    card.style.display = 'block'
                }
            }
        })

        tags.forEach(item => item.classList.remove('active'));
        btn.classList.add('active')
    })
})