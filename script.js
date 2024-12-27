const projects = document.querySelectorAll('.performance_img');

let projects_index = 0;
let intervalId = null;

//เรียกใช้ฟังชั่น
document.addEventListener('DOMContentLoaded',initialize);

function initialize(){
    
    if (projects.length > 0){
        projects[projects_index].classList.add('display_pj');
        intervalId = setInterval(nextSlide,2000);
    }
    
}

function showSlide(index){

    if (index >= projects.length){
        projects_index = 0;
    }
    else if (index < 0){
        projects_index = projects.length - 1;
    }

    projects.forEach(project => {
        project.classList.remove('display_pj');
    });
    projects[projects_index].classList.add('display_pj');
}

function prevSlide(){
    clearInterval(intervalId);
    projects_index--;
    showSlide(projects_index);
}

function nextSlide(){
    projects_index++;
    showSlide(projects_index);
}

