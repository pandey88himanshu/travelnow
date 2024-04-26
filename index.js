
// testimonial_logic_start

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.style.display = 'block';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

function changeTestimonial(offset) {
  currentIndex = (currentIndex + offset + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

showTestimonial(currentIndex);

//testimonial_logic_ends

//contact_us_form_validation_starts
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

//contact_us_form_validation_ends
let close = document.querySelector('#close')
let open = document.querySelector('#open')
let links = document.querySelector('.link');
open.addEventListener('click', ()=>{
  links.style.display='block'
  links.style.left='-10px';
  close.style.display='block'
  open.style.display='none';
})
close.addEventListener('click',()=>{
  links.style.left='1000px';
  close.style.display='none'
  open.style.display='block';
})