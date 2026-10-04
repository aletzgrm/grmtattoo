# GRM Tattoo — Aletz Grm

Primera versión de una página estática para presentar el trabajo de Aletz Grm y recibir solicitudes de cotización. Está hecha con HTML, CSS y JavaScript sin frameworks; puede publicarse en GitHub Pages o Cloudflare Pages.

## Archivos

- `index.html`: secciones, textos y estructura de la página.
- `trabajos.html`: galería ampliada, abre desde “Ver más trabajos”.
- `styles.css`: identidad visual y diseño adaptable a móvil y escritorio.
- `script.js`: menú móvil, año automático y enlaces de contacto.
- `images/logo-grm-contorno.png`: logo de Aletz con contorno blanco para fondos oscuros.
- `images/aletz-trabajando.jpg`: foto recortada y optimizada de Aletz tatuando para “Detrás de la tinta”.
- `images/tatuaje-blackwork-01.jpg`: pieza blackwork protagonista.
- `images/tatuaje-fine-line-01.jpg`: pieza fine line recortada para mostrar el tatuaje de cerca.
- `images/tatuaje-ornamental-01.jpg`: pieza ornamental destacada.
- `images/tatuaje-diseno-original-01.jpg`: pieza de diseño original.
- `images/grm-trabajo-video-01.mp4`: video H.264/AAC para reproducir en navegadores modernos, mostrado con controles en la galería ampliada.
- `images/grm-hero-01.jpg` a `images/grm-hero-03.jpg`: imágenes del carrusel principal.

## Datos por personalizar

En `script.js`, cambia `CONTACT.whatsapp` por el número real con código de país (México: `52` + número) y `CONTACT.instagram` por el enlace real. Reemplaza las piezas conceptuales y el bloque del artista en `index.html` por fotografías propias, con autorización de sus clientes.

El formulario de cotización prepara un mensaje con nombre, estilo, zona, tamaño y descripción. Si el navegador/dispositivo admite compartir archivos, también ofrece enviar la imagen elegida desde el menú nativo; de lo contrario abre WhatsApp con el mensaje y la persona adjunta la foto manualmente. El envío de imágenes desde el sitio requiere publicarlo por HTTPS (por ejemplo, GitHub Pages o Cloudflare Pages).

Actualiza también ubicación, horarios, descripción y estilos si hace falta. El precio de referencia está en `$600 MXN`.

## Publicación gratuita

En GitHub, sube estos archivos a un repositorio y activa **Settings → Pages → Deploy from a branch**. En Cloudflare Pages puedes conectar el repositorio y usar la raíz del proyecto como directorio de publicación; no requiere comando de compilación.
