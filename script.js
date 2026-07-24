// ==========================
// Navbar Background on Scroll
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#000";
    } else {
        header.style.background = "rgba(0,0,0,0.45)";
    }
});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }

    });

});

// ==========================
// FAQ Accordion
// ==========================

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const answer = button.nextElementSibling;

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

        }else{

            document.querySelectorAll(".faq-answer").forEach(item=>{
                item.style.maxHeight = null;
            });

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});

// ==========================
// Search
// ==========================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup",()=>{

    const value = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".movie-card");

    cards.forEach(card=>{

        const title = card.innerText.toLowerCase();

        if(title.includes(value)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

});

// ==========================
// Email Validation
// ==========================

const emailButton=document.querySelector(".email-box button");

emailButton.addEventListener("click",()=>{

    const email=document.querySelector(".email-box input").value;

    if(email===""){

        alert("Please enter your email.");

        return;
    }

    alert("Welcome to StreamVerse!");

});

// ==========================
// Movie Card Animation
// ==========================

const cards=document.querySelectorAll(".movie-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

// ==========================
// Scroll To Top Button
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});