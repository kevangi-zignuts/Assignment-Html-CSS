// Toggle for nav menu
const toggle = ()=>{
    document.getElementById('nav').classList.toggle('navActive');
};

// Scrollbar for Best selling product section 
let scrollContainer = document.querySelector(".slider");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 535;
});
backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 535;
});

// Scrollbar for Testimonial section 
let scrollTestimonials = document.querySelector(".card-slide");
let TestimonialbackBtn = document.getElementById("TestimonialbackBtn");
let TestimonialnextBtn = document.getElementById("TestimonialnextBtn");

TestimonialnextBtn.addEventListener("click", () => {
    scrollTestimonials.scrollLeft += 524;
});
TestimonialbackBtn.addEventListener("click", () => {
    scrollTestimonials.scrollLeft -= 524;
});

scrollTestimonials.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollTestimonials.scrollLeft += evt.deltaY;
});


let chair = document.getElementById("chair");
let bed = document.getElementById("bed");
let sofa = document.getElementById("sofa");
let lamp = document.getElementById("lamp");

chair.style.display = 'flex';
bed.style.display = 'none';
sofa.style.display = 'none';
lamp.style.display = 'none';


function showChair(){
    chair.style.display = 'flex';
    bed.style.display = 'none';
    sofa.style.display = 'none';
    lamp.style.display = 'none';
}

function showBed(){
    chair.style.display = 'none';
    bed.style.display = 'flex';
    sofa.style.display = 'none';
    lamp.style.display = 'none';
}

function showSofa(){
    chair.style.display = 'none';
    bed.style.display = 'none';
    sofa.style.display = 'flex';
    lamp.style.display = 'none';
}

function showLamp(){
    chair.style.display = 'none';
    bed.style.display = 'none';
    sofa.style.display = 'none';
    lamp.style.display = 'flex';
}

