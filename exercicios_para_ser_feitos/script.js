document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion-button");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", function() {
            // Close all other accordions
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== this) {
                    otherAccordion.classList.remove("active");
                    const content = otherAccordion.nextElementSibling;
                    content.style.maxHeight = null;
                    // Reset padding when closing
                    if (content.style.paddingTop !== "0px") {
                        content.style.paddingTop = "0px";
                        content.style.paddingBottom = "0px";
                    }
                }
            });

            // Toggle the clicked accordion
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.paddingTop = "0px";
                content.style.paddingBottom = "0px";
            } else {
                content.style.paddingTop = "15px";
                content.style.paddingBottom = "20px";
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});