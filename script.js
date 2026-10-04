// Actualiza estos datos cuando tengas tus enlaces definitivos.
const CONTACT = {
  whatsapp: "522212486842", // México (52) + número de 10 dígitos.
  instagram: "https://instagram.com/aletzdw"
};

const instagramLink = document.querySelector("[data-instagram]");
instagramLink.href = CONTACT.instagram;
instagramLink.target = "_blank";
instagramLink.rel = "noopener noreferrer";
document.querySelector("#year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  nav.classList.toggle("open", !isOpen);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
}));

const requestDialog = document.querySelector(".request-dialog");
const requestForm = document.querySelector("#tattoo-request");
const referenceInput = requestForm.elements.reference;
const fileName = document.querySelector(".file-name");
const formError = document.querySelector(".form-error");

document.querySelectorAll("[data-open-form]").forEach(button => {
  button.addEventListener("click", () => requestDialog.showModal());
});
document.querySelector(".dialog-close").addEventListener("click", () => requestDialog.close());
requestDialog.addEventListener("click", event => {
  if (event.target === requestDialog) requestDialog.close();
});
referenceInput.addEventListener("change", () => {
  fileName.textContent = referenceInput.files[0]?.name || "Puedes agregar una imagen desde tu celular o computadora.";
});

requestForm.addEventListener("submit", async event => {
  event.preventDefault();
  if (!requestForm.reportValidity()) {
    formError.hidden = false;
    return;
  }
  formError.hidden = true;
  const fields = new FormData(requestForm);
  const reference = referenceInput.files[0];
  const lines = [
    "Hola, Aletz. Quiero cotizar un tatuaje:",
    `Nombre: ${fields.get("name")}`,
    `Zona del cuerpo: ${fields.get("placement")}`,
    `Tamaño aproximado: ${fields.get("size")}`,
    `Idea: ${fields.get("description")}`,
    reference ? `Referencia: ${reference.name}` : "Referencia: no adjunté imagen"
  ];
  const text = lines.join("\n");

  if (reference && navigator.canShare && navigator.share && navigator.canShare({ files: [reference] })) {
    try {
      await navigator.share({ title: "Solicitud de tatuaje para Aletz Grm", text, files: [reference] });
      requestDialog.close();
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  if (reference) {
    document.querySelector(".form-status").textContent = "Tu mensaje está listo. Adjunta la imagen seleccionada en el chat de WhatsApp.";
  } else {
    requestDialog.close();
  }
});

const carousel = document.querySelector("[data-carousel]");
if (carousel) {
  const slides = [...carousel.querySelectorAll("[data-slide]")];
  const dots = [...carousel.querySelectorAll("[data-carousel-dot]")];
  const slideNumber = carousel.parentElement.querySelector("[data-carousel-index]");
  let activeSlide = 0;

  function showSlide(index) {
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      const active = position === activeSlide;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot, position) => {
      const active = position === activeSlide;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", String(active));
    });
    slideNumber.textContent = String(activeSlide + 1).padStart(2, "0");
  }

  carousel.querySelector("[data-carousel-prev]").addEventListener("click", () => showSlide(activeSlide - 1));
  carousel.querySelector("[data-carousel-next]").addEventListener("click", () => showSlide(activeSlide + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
  carousel.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") showSlide(activeSlide - 1);
    if (event.key === "ArrowRight") showSlide(activeSlide + 1);
  });
  let touchStartX = null;
  carousel.addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  carousel.addEventListener("touchend", event => {
    if (touchStartX === null) return;
    const swipeDistance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(swipeDistance) > 45) showSlide(activeSlide + (swipeDistance < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });
}
