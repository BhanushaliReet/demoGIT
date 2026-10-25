// Ensure DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector(".cta-btn");

  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      console.log("CTA button clicked!");
    });
  }
});