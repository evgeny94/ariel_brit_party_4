// Configuration
const fullImageFolder = 'images/'; // Folder for full-resolution images
const thumbnailFolder = 'images/thumbnails/'; // Folder for thumbnails
const startIndex = 264;
const totalImages = 349; // Update this to the number of images in your folder
const fileExtension = '.jpg';

const gallery = document.getElementById('gallery');

// Generate gallery items dynamically
for (let i = startIndex; i <= totalImages; i++) {
  const fullImageSrc = `${fullImageFolder}ariel_musatov_${i}${fileExtension}`;
  const thumbnailSrc = `${thumbnailFolder}ariel_musatov_${i}${fileExtension}`;
  
  // Create the anchor tag for each image
  const link = document.createElement('a');
  link.href = fullImageSrc; // Set the href for downloading the full image
  link.download = `ariel_musatov_${i}${fileExtension}`; // Set download filename
  link.target = '_blank'; // Open in a new tab if clicked

  // Create the image tag for the thumbnail
  const img = document.createElement('img');
  img.src = thumbnailSrc; // Use the thumbnail for display
  img.alt = `Party picture ${i}`;
  img.loading = "lazy"; // Enable lazy loading for performance
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