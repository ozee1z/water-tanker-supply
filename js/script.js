//Creating the accordion
var acc = document.getElementsByClassName("accordion");
var i = 0;

for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
      this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    })
}
//End of accordion

//Start of Tawk.to Script
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60b4cf026699c7280da9de0f/1f714haoe';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
//End of Tawk.to Script