// Configuration
const imageFolder = 'images/';
const startIndex = 264;
const totalImages = 349; // Update this to the number of images in your folder
const fileExtension = '.jpg';

const gallery = document.getElementById('gallery');

// Generate gallery items dynamically
for (let i = startIndex; i <= totalImages; i++) {
  const src = `${imageFolder}ariel_musatov_${i}${fileExtension}`;
  
  // Create the anchor tag for each image
  const link = document.createElement('a');
  link.href = src; // Set the href for downloading
  link.download = `pic${i}${fileExtension}`; // Set download filename
  link.target = '_blank'; // Open in new tab if viewed
  
  // Create the image tag
  const img = document.createElement('img');
  img.src = src;
  img.alt = `Party picture ${i}`;
  img.loading = "lazy";
  link.appendChild(img);

  // Create the download icon inside the anchor tag
  const downloadIcon = document.createElement('span');
  downloadIcon.classList.add('download-icon'); // Add the class for styling
  
  // Add the Font Awesome download icon (use a simple icon tag)
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-download'); // Add Font Awesome download icon classes
  downloadIcon.appendChild(icon);

  // Append the download icon to the anchor tag
  link.appendChild(downloadIcon);

  // Append the anchor tag to the gallery
  gallery.appendChild(link);
}
