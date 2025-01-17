// Path to the text file containing image URLs
const imageTextFile = 'images.txt';

const gallery = document.getElementById('gallery');

// Fetch the text file and generate the gallery
fetch(imageTextFile)
  .then(response => response.text())
  .then(data => {
    // Split the file contents into an array of URLs (assuming one URL per line)
    const imageUrls = data.split('\n').filter(url => url.trim() !== '');

    // Generate gallery items dynamically
    imageUrls.forEach((url, index) => {
      // Create the anchor tag for each image
      const link = document.createElement('a');
      link.href = url; // Set the href for downloading
      link.download = `url`; // Set download filename
      link.target = '_blank'; // Open in new tab if viewed

      // Create the image tag
      const img = document.createElement('img');
      img.src = url;
      img.alt = `Party picture ${index + 1}`;
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
    });
  })
  .catch(error => console.error('Error fetching the image list:', error));
