const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "200");
svg.setAttribute("height", "200");

// Crear el círculo y establecer sus atributos
const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", "100"); // establecer la coordenada x del centro
circle.setAttribute("cy", "100"); // establecer la coordenada y del centro
circle.setAttribute("r", "50"); // establecer el radio del círculo

// Agregar el círculo al elemento SVG
svg.appendChild(circle);

// Convertir el elemento SVG a una cadena XML
const serializer = new XMLSerializer();
const svgString = serializer.serializeToString(svg);

// Crear un objeto Blob con la cadena XML
const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });

// Crear un objeto URL para el Blob
const url = URL.createObjectURL(blob);

// Crear un enlace de descarga con el objeto URL
const link = document.createElement("a");
link.setAttribute("href", url);
link.setAttribute("download", "circulo.svg");

// Hacer clic en el enlace de descarga para guardar el archivo
link.click();

// Liberar el objeto URL
URL.revokeObjectURL(url);