const toggle = ()=>{
    document.getElementById('nav').classList.toggle('navActive');
};

let scrollContainer = document.querySelector(".slider");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 330;
});
backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 330;
});

let scrollTestimonials = document.querySelector(".card-slide");
let TestimonialbackBtn = document.getElementById("TestimonialbackBtn");
let TestimonialnextBtn = document.getElementById("TestimonialnextBtn");
TestimonialnextBtn.addEventListener("click", () => {
    scrollTestimonials.scrollLeft += 369;
});
TestimonialbackBtn.addEventListener("click", () => {
    scrollTestimonials.scrollLeft -= 369;
});
scrollTestimonials.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollTestimonials.scrollLeft += evt.deltaY;
});