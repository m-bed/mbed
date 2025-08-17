// Array to hold your media (images and videos)
// IMPORTANT: For local files, ensure these images are in the SAME folder
// as your index.html file, or in a subfolder relative to it.
// Direct absolute paths like C:\Users\... will NOT work due to browser security.
const mediaItems = [
    { src: 'Paintings/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg', type: 'image', alt: 'Mona Lisa by Leonardo da Vinci', name: 'Mona Lisa', tags: ['Art', 'Renaissance', 'Painting', 'Leonardo da Vinci'] },
    { src: 'Paintings/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', type: 'image', alt: 'The Starry Night by Vincent van Gogh', name: 'The Starry Night', tags: ['Art', 'Post-Impressionism', 'Painting', 'Landscape', 'Vincent Van Gogh'] },
    { src: 'Paintings/Gustav_Klimt_046.jpg', type: 'image', alt: 'Portrait of Adele Bloch-Bauer I by Gustav Klimt', name: 'Adele Bloch-Bauer I', tags: ['Art', 'Symbolism', 'Painting', 'Portrait', 'Gustav Klimt'] },
    { src: 'Paintings/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg', type: 'image', alt: 'The Last Supper by Leonardo da Vinci', name: 'The Last Supper', tags: ['Art', 'Renaissance', 'Painting', 'Religious', 'Leonardo da Vinci'] },
    { src: 'Paintings/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg', type: 'image', alt: 'The Kiss by Gustav Klimt', name: 'The Kiss', tags: ['Art', 'Symbolism', 'Painting', 'Gustav Klimt'] },
    { src: 'Paintings/Edvard_Munch,_1893,_The_Scream,_oil,_tempera_and_pastel_on_cardboard,_91_x_73_cm,_National_Gallery_of_Norway.jpg', type: 'image', alt: 'The Scream by Edvard Munch', name: 'The Scream', tags: ['Art', 'Expressionism', 'Painting', 'Edvard Munch'] },
    { src: 'Paintings/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg', type: 'image', alt: 'American Gothic by Grant Wood', name: 'American Gothic', tags: ['Art', 'Regionalism', 'Painting', 'Portrait', 'Grant Wood'] },
    { src: 'Paintings/GirlBeforeAMirror.jpg', type: 'image', alt: 'Girl Before a Mirror by Pablo Picasso', name: 'Girl Before a Mirror', tags: ['Art', 'Cubism', 'Painting', 'Portrait', 'Pablo Picasso'] },
    { src: 'Paintings/Las_Meninas,_by_Diego_Velázquez,_from_Prado_in_Google_Earth.jpg', type: 'image', alt: 'Las Meninas by Diego Velázquez', name: 'Las Meninas', tags: ['Art', 'Baroque', 'Painting', 'Portrait', 'Diego Velázquez'] },
    { src: 'Paintings/Vincent_Van_Gogh_-_Three_Sunflowers_F453.jpg', type: 'image', alt: 'Three Sunflowers by Vincent van Gogh', name: 'Three Sunflowers', tags: ['Art', 'Still Life', 'Painting', 'Vincent Van Gogh'] },
    { src: 'Paintings/Frank_Weston_Benson,_The_Dining_Room_Table,_1919.jpg', type: 'image', alt: 'The Dining Room Table by Frank Weston Benson', name: 'The Dining Room Table', tags: ['Art', 'American Impressionism', 'Painting', 'Still Life', 'Frank Weston Benson'] },
    // New images added here
    { src: 'Paintings/Lady_with_an_Ermine_-_Leonardo_da_Vinci_(adjusted_levels).jpg', type: 'image', alt: 'Lady with an Ermine by Leonardo da Vinci', name: 'Lady with an Ermine', tags: ['Art', 'Renaissance', 'Painting', 'Leonardo da Vinci', 'Portrait'] },
    { src: 'Paintings/1665_Girl_with_a_Pearl_Earring.jpg', type: 'image', alt: 'Girl with a Pearl Earring by Johannes Vermeer', name: 'Girl with a Pearl Earring', tags: ['Art', 'Baroque', 'Painting', 'Portrait', 'Johannes Vermeer'] },
    { src: 'Paintings/The_Night_Watch_-_HD.jpg', type: 'image', alt: 'The Night Watch by Rembrandt van Rijn', name: 'The Night Watch', tags: ['Art', 'Baroque', 'Painting', 'Rembrandt', 'Group Portrait'] },
    { src: 'Paintings/Pieter_Bruegel_the_Elder_-_Landscape_with_the_Fall_of_Icarus_-_Brussels,_Royal_Museums_of_Fine_Arts_of_Belgium_-_Google_Arts_&_Culture.jpg', type: 'image', alt: 'Landscape with the Fall of Icarus by Pieter Bruegel the Elder', name: 'Landscape with an Icarus', tags: ['Art', 'Renaissance', 'Painting', 'Landscape', 'Mythology', 'Pieter Bruegel the Elder'] },
    { src: 'Paintings/The_School_of_Athens__by_Raffaello_Sanzio_da_Urbino.jpg', type: 'image', alt: 'The School of Athens by Raphael', name: 'The School of Athens', tags: ['Art', 'Renaissance', 'Painting', 'Fresco', 'Raphael', 'Philosophy'] },
    { src: 'Paintings/The_Madonna_of_Port_Lligat.jpg', type: 'image', alt: 'The Madonna of Port Lligat by Salvador Dalí', name: 'The Madonna of Port Lligat', tags: ['Art', 'Surrealism', 'Painting', 'Salvador Dalí', 'Religious'] }
];

let currentMediaIndex = 0;
const body = document.body;
const galleryContainer = document.getElementById('galleryContainer');
const mainMediaDisplayArea = document.getElementById('mainMediaDisplayArea');
const thumbnailNav = document.getElementById('thumbnailNav');
const thumbnailWrapper = document.getElementById('thumbnailWrapper');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
const themeToggle = document.getElementById('themeToggle');
const sunIcon = themeToggle.querySelector('.sun-icon');
const moonIcon = themeToggle.querySelector('.moon-icon');
const appName = document.querySelector('.app-name');
const themeSubmenu = document.getElementById('themeSubmenu');
const searchInput = document.getElementById('searchInput');
const searchContainer = document.querySelector('.search-container');
const searchButton = document.getElementById('searchButton');
const mediaNameButton = document.getElementById('mediaNameButton');
const galleryNameButton = document.getElementById('galleryNameButton');
const gallerySubmenu = document.getElementById('gallerySubmenu');
const tagsDisplay = document.getElementById('tagsDisplay');
const tagGalleryView = document.getElementById('tagGalleryView');
const tagGalleryTitle = document.getElementById('tagGalleryTitle');
const infoButton = document.getElementById('infoButton'); // Get info button
const infoModalOverlay = document.getElementById('infoModalOverlay'); // Get modal overlay
const modalCloseButton = infoModalOverlay.querySelector('.modal-close-button'); // Get modal close button
const addFileButton = document.getElementById('addFileButton'); // Get add file button
const galleryNameButtonContainer = document.getElementById('galleryNameButtonContainer'); // Get gallery name button container
const downloadAllButton = document.getElementById('downloadAllButton');


// Function to calculate how many thumbnails can fit in the wrapper
function calculateMaxThumbnails() {
    // Get the actual computed width of the thumbnailWrapper
    const wrapperWidth = thumbnailWrapper.offsetWidth;
    const thumbnailWidth = 80; // 5rem = 80px
    const thumbnailGap = 12; // 0.75rem = 12px
    const effectiveThumbnailWidth = thumbnailWidth + thumbnailGap;

    // Estimate the maximum number of thumbnails that can fit
    let maxCount = Math.floor((wrapperWidth + (thumbnailGap / 2)) / effectiveThumbnailWidth);

    // Subtract 2 from the maxCount to allow more space
    maxCount = Math.max(1, maxCount - 2); // Ensure it's at least 1, and never negative

    // Ensure not more than total items
    return Math.min(mediaItems.length, maxCount);
}

// Function to display the selected media (main single image view)
function displayMedia(index) {
    console.log(`[displayMedia] Called with requested index: ${index}`);
    // Ensure mainMediaDisplayArea is visible and tagGalleryView is hidden
    mainMediaDisplayArea.style.display = 'flex';
    tagGalleryView.style.display = 'none';

    // Show arrows and tags for main view
    prevArrow.style.display = 'block';
    nextArrow.style.display = 'block';
    tagsDisplay.style.display = 'flex';


    if (index < 0) {
        index = mediaItems.length - 1;
        console.log(`[displayMedia] Adjusted index to (loop-around): ${index}`);
    } else if (index >= mediaItems.length) {
        index = 0;
        console.log(`[displayMedia] Adjusted index to (loop-around): ${index}`);
    }
    currentMediaIndex = index;

    // Clear ONLY the content of the dedicated mainMediaDisplayArea
    while (mainMediaDisplayArea.firstChild) {
        mainMediaDisplayArea.removeChild(mainMediaDisplayArea.firstChild);
    }
    console.log(`[displayMedia] Ensured mainMediaDisplayArea is empty by removing all children.`);

    const item = mediaItems[currentMediaIndex];
    console.log(`[displayMedia] Will now attempt to display: "${item.name}" at currentMediaIndex: ${currentMediaIndex}`);
    let mediaElement;

    if (item.type === 'image') {
        mediaElement = document.createElement('img');
        mediaElement.src = item.src;
        mediaElement.alt = item.alt;
        mediaElement.onload = () => {
            // No class added for opacity, it's 1 by default
        };
        mediaElement.onerror = (e) => {
            console.error(`[displayMedia] Error loading image: ${item.src}. Please ensure the file exists and the path is correct.`);
            if (!e.target.dataset.placeholderSet) {
                e.target.src = `https://placehold.co/1280x720/cccccc/000000?text=Image+Load+Error`;
                e.target.alt = 'Image failed to load (check path)';
                e.target.dataset.placeholderSet = 'true';
            }
        };
    } else if (item.type === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.src = item.src;
        mediaElement.controls = true;
        mediaElement.autoplay = true;
        mediaElement.loop = true;
        mediaElement.alt = item.alt;
        mediaElement.onloadeddata = () => {
            // No class added for opacity
        };
        mediaElement.onerror = (e) => {
            console.error(`[displayMedia] Error loading video: ${item.src}. Please ensure the file exists and the path is correct.`);
            const errorMessage = document.createElement('p');
            errorMessage.classList.add('text-red-500', 'text-center');
            errorMessage.textContent = 'Video failed to load (check path).';
            mainMediaDisplayArea.appendChild(errorMessage);
        };
    }

    if (mediaElement) {
        mainMediaDisplayArea.appendChild(mediaElement);
        console.log(`[displayMedia] Successfully appended new media element with src: ${mediaElement.src} to mainMediaDisplayArea.`);
    }


    // Call createThumbnails here to ensure the active thumbnail is rendered correctly
    // This implicitly calls updateThumbnailHighlight inside
    createThumbnails();
    // Update mediaNameButton to include the current item's name and the download icon
    mediaNameButton.innerHTML = `
        <span>${item.name || 'Untitled Media'}</span>
        <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
        </svg>
    `;

    displayTags(item.tags); // Display tags for the current item
}

// Function to perform search and display filtered results in the tag gallery view
function performSearch(query) {
    console.log(`[performSearch] Called with query: "${query}"`);

    if (!query || query.trim() === '') {
        // If query is empty, revert to main gallery view
        console.log(`[performSearch] Query is empty, reverting to main gallery.`);
        displayMedia(currentMediaIndex); // Show the currently selected media
        return;
    }

    // Hide main gallery elements
    mainMediaDisplayArea.style.display = 'none';
    prevArrow.style.display = 'none';
    nextArrow.style.display = 'none';
    tagsDisplay.style.display = 'none';

    // Set the title for the tag gallery view
    tagGalleryTitle.textContent = `Results for: "${query}"`;
    console.log(`[performSearch] Setting tag gallery title to: "${tagGalleryTitle.textContent}"`);

    // Show tag gallery view
    tagGalleryView.style.display = 'grid'; // Ensure it's grid for responsive layout

    // Clear previous content in tag gallery view except for the title
    let currentChildren = Array.from(tagGalleryView.children);
    currentChildren.forEach(child => {
        if (child !== tagGalleryTitle) {
            child.remove();
        }
    });
    console.log('[performSearch] Cleared previous tag gallery content.');

    const lowerCaseQuery = query.toLowerCase();
    const filteredItems = mediaItems.filter(item => {
        const matchesName = item.name && item.name.toLowerCase().includes(lowerCaseQuery);
        const matchesTag = item.tags && item.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery));
        return matchesName || matchesTag;
    });
    console.log(`[performSearch] Found ${filteredItems.length} items for query "${query}".`);

    if (filteredItems.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = `No items found matching: "${query}"`;
        noResultsMessage.classList.add('text-center', 'text-gray-500', 'col-span-full', 'py-8');
        tagGalleryView.appendChild(noResultsMessage);
        console.log(`[performSearch] No items found, displaying message.`);
        return;
    }

    // Ensure title is first child
    if (tagGalleryView.firstChild !== tagGalleryTitle) {
        tagGalleryView.prepend(tagGalleryTitle);
        console.log('[performSearch] Prepended tag gallery title.');
    }

    filteredItems.forEach((item, index) => {
        const thumbnailWrapper = document.createElement('div');
        thumbnailWrapper.classList.add('relative', 'group', 'overflow-hidden', 'rounded-lg', 'shadow-md'); /* Container for each thumbnail */

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.classList.add('tag-gallery-thumbnail'); // Apply new styling
        img.onerror = (e) => {
            console.error(`[performSearch] Error loading tag gallery thumbnail: ${item.src}.`);
            if (!e.target.dataset.placeholderSet) {
                e.target.src = `https://placehold.co/200x150/cccccc/000000?text=Thumb+Error`;
                e.target.dataset.placeholderSet = 'true';
            }
        };

        const titleOverlay = document.createElement('div');
        titleOverlay.classList.add('absolute', 'bottom-0', 'left-0', 'right-0', 'bg-gradient-to-t', 'from-black', 'to-transparent', 'text-white', 'p-2', 'text-sm', 'font-semibold', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-300');
        titleOverlay.textContent = item.name;

        thumbnailWrapper.appendChild(img);
        thumbnailWrapper.appendChild(titleOverlay);

        // Add click listener to display the selected item in the main gallery
        thumbnailWrapper.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling up to galleryContainer
            const originalIndex = mediaItems.indexOf(item);
            console.log(`[performSearch - thumbnailClick] Clicked thumbnail for item: "${item.name}", its original index is: ${originalIndex}`);
            searchInput.value = ''; // Clear search bar
            displayMedia(originalIndex); // Display the selected media
        });

        tagGalleryView.appendChild(thumbnailWrapper);
    });
}

function updateThumbnailHighlight() {
    // Remove active class from all thumbnails first
    // Ensure we only query within the thumbnailWrapper to avoid issues if other thumbs exist elsewhere
    thumbnailWrapper.querySelectorAll('.thumbnail-item').forEach(thumb => {
        thumb.classList.remove('active');
    });

    // Find the current thumbnail and add active class
    const currentThumb = thumbnailWrapper.querySelector(`[data-index="${currentMediaIndex}"]`);
    if (currentThumb) {
        currentThumb.classList.add('active');
        // The scrollIntoView is called here, but its effectiveness depends on the parent having overflow:auto/scroll
        currentThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

function nextMedia() {
    displayMedia(currentMediaIndex + 1);
}

function previousMedia() {
    displayMedia(currentMediaIndex - 1);
}

function createThumbnails() {
    thumbnailWrapper.innerHTML = ''; // Clear existing thumbnails

    const maxVisibleCount = calculateMaxThumbnails();
    let startIndex;

    if (mediaItems.length <= maxVisibleCount) {
        // If all items fit, show all
        startIndex = 0;
    } else {
        // Calculate startIndex to center the current media
        const centerOffset = Math.floor(maxVisibleCount / 2);

        // Try to center the currentMediaIndex
        startIndex = currentMediaIndex - centerOffset;

        // Clamp startIndex to ensure it's within valid bounds
        startIndex = Math.max(0, startIndex); // Ensure not negative
        startIndex = Math.min(startIndex, mediaItems.length - maxVisibleCount); // Ensure window doesn't go past the end
    }

    const endIndex = startIndex + maxVisibleCount;

    const visibleMediaItems = mediaItems.slice(startIndex, endIndex);

    visibleMediaItems.forEach((item, relativeIndex) => {
        const actualIndex = startIndex + relativeIndex; // This is the index in the original mediaItems array
        const thumbnailDiv = createSingleThumbnail(item, actualIndex);
        thumbnailWrapper.appendChild(thumbnailDiv);
    });
    updateThumbnailHighlight(); // Ensure highlight is correct after re-creation
}

// Helper function for creating a single thumbnail
function createSingleThumbnail(item, actualIndex) {
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.classList.add('thumbnail-item');
    thumbnailDiv.dataset.index = actualIndex; // Store actual index

    if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = `Thumbnail for ${item.alt}`;
        img.onerror = (e) => {
            console.error(`Error loading thumbnail: ${item.src}.`);
            if (!e.target.dataset.placeholderSet) {
                e.target.src = `https://placehold.co/80x60/dddddd/333333?text=Thumb+Error`;
                e.target.dataset.placeholderSet = 'true';
            }
        };
        thumbnailDiv.appendChild(img);
    } else if (item.type === 'video') {
        const videoIcon = document.createElement('div');
        videoIcon.classList.add('video-overlay');
        videoIcon.innerHTML = '▶';
        thumbnailDiv.appendChild(videoIcon);
    }

    thumbnailDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        displayMedia(actualIndex); // Use actual index for display
        searchInput.value = '';
    });
    return thumbnailDiv;
}

// Modified function to display tags as clickable buttons
function displayTags(tags) {
    tagsDisplay.innerHTML = ''; // Clear previous tags
    tagsDisplay.style.display = 'flex'; // Ensure tags are visible for the main view

    // Create and append the 'Tags' label
    const tagsLabel = document.createElement('span');
    tagsLabel.classList.add('tags-label'); // Apply the new styling class
    tagsLabel.textContent = 'Tags'; // Changed text to "Tags:"
    tagsDisplay.appendChild(tagsLabel);

    if (tags && tags.length > 0) {
        tags.forEach(tagText => {
            const tagButton = document.createElement('button');
            tagButton.classList.add('tag-pill');
            tagButton.textContent = tagText;
            tagButton.addEventListener('click', (e) => {
                e.stopPropagation();
                searchInput.value = tagText; // Populate search bar
                performSearch(tagText); // Trigger search immediately
            });
            tagsDisplay.appendChild(tagButton);
        });
    }
}

function toggleTheme() {
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcons(isDarkMode);
}

function updateThemeIcons(isDarkMode) {
    if (isDarkMode) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = (savedTheme === 'dark' || !savedTheme);
    if (isDarkMode) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
    updateThemeIcons(isDarkMode);
}

// --- Image Preloading Function ---
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const mediaItem = mediaItems.find(item => item.src === url);
        if (mediaItem && mediaItem.type === 'image') {
            const img = new Image();
            img.src = url;
            img.onerror = () => {
                console.warn(`Preload failed for: ${url}. Please verify path and filename.`);
            };
        }
    });
}

// --- End Image Preloading Function ---
// Download logic for the entire mediaNameButton
mediaNameButton.addEventListener('click', (e) => {
    // Check if the click originated specifically from the SVG icon inside the button.
    // If it did, we still want to proceed with download.
    // If the user clicks the text, it will also trigger.
    console.log(`[Download] Clicked mediaNameButton or its child. Event target:`, e.target);
    const currentItem = mediaItems[currentMediaIndex];
    if (currentItem) {
        console.log(`[Download] Initiating download for: ${currentItem.src}`);
        const link = document.createElement('a');
        link.href = currentItem.src;
        const filename = currentItem.src.substring(currentItem.src.lastIndexOf('/') + 1);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});

// Event listener for the new Add File Button
addFileButton.addEventListener('click', () => {
    // In a real application, you would implement file upload logic here.
    // This might involve:
    // 1. Opening a file input dialog (e.g., <input type="file"> click())
    // 2. Handling file selection (FileReader API to read local files)
    // 3. Uploading to a server (e.g., using Fetch API or XMLHttpRequest)
    // 4. Updating `mediaItems` array and re-rendering thumbnails/display.
    // For now, we'll just log a message.
    alert('Upload file coming soon!');
    gallerySubmenu.classList.remove('show'); // Hide submenu after clicking
});

// Download logic for the new Download All button
downloadAllButton.addEventListener('click', () => {
    // Confirm with the user before starting multiple downloads
    // if (!confirm('Are you sure you want to download all files? This may trigger multiple download prompts.')) {
    //     gallerySubmenu.classList.remove('show'); // Hide submenu if user cancels
    //     return;
    // }

    // console.log('[Download All] Initiating bulk download.');

    // mediaItems.forEach(item => {
    //     const link = document.createElement('a');
    //     link.href = item.src;
    //     // Get the filename from the source URL
    //     const filename = item.src.substring(item.src.lastIndexOf('/') + 1);
    //     link.download = filename;
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // });

    gallerySubmenu.classList.remove('show'); // Hide submenu after clicking
    alert('Bulk download is a Premium feature only!');
});


// Modified keydown listener for Escape and directing input
document.addEventListener('keydown', (event) => {
    const isSearchInputFocused = (document.activeElement === searchInput);

    if (event.key === 'Escape') {
        // If modal is open, close it first
        if (infoModalOverlay.classList.contains('show')) {
            infoModalOverlay.classList.remove('show');
            event.preventDefault();
            return;
        }
        // If search input has value or is focused, clear and unfocus
        if (searchInput.value !== '' || isSearchInputFocused) {
            searchInput.value = '';
            searchInput.blur();
            performSearch(''); // Clear search results immediately
            event.preventDefault();
            return;
        }
        // If in tag gallery view, close it
        if (tagGalleryView.style.display === 'grid') {
            displayMedia(currentMediaIndex); // Go back to main display
            event.preventDefault();
            return;
        }
    }

    // If not in search input, and a single character key is pressed or backspace, focus search input
    if (!isSearchInputFocused &&
        (event.key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey)) {
        searchInput.focus();
    } else if (!isSearchInputFocused && event.key === 'Backspace') {
        searchInput.focus();
    } else if (!isSearchInputFocused && event.key === 'Enter') {
        searchInput.focus();
        event.preventDefault();
        console.log('Search triggered with:', searchInput.value);
    } else if (isSearchInputFocused && event.key === 'Enter') {
        event.preventDefault();
        performSearch(searchInput.value); // Trigger search on Enter
        console.log('Search triggered from focused input with:', searchInput.value);
    } else if (!isSearchInputFocused && tagGalleryView.style.display === 'none' && !infoModalOverlay.classList.contains('show')) {
        // Only allow gallery navigation if the search input is not focused,
        // tagGalleryView is not active, AND modal is not open
        if (event.key === 'ArrowLeft') {
            previousMedia();
        } else if (event.key === 'ArrowRight') {
            nextMedia();
        }
    }
});

// Event listener for clicks anywhere on the document to unfocus search bar
document.addEventListener('click', (event) => {
    const target = event.target;
    // Ensure the click target is not the download icon itself when it's part of mediaNameButton
    // The `mediaNameButton.contains(target)` check handles clicks on the button's children (span, svg)
    if (target !== searchInput && target !== searchButton && !searchContainer.contains(target) && !mediaNameButton.contains(target)) {
        searchInput.blur();
    }
});

// Add real-time search on input
searchInput.addEventListener('input', () => {
    performSearch(searchInput.value);
});

prevArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    if (tagGalleryView.style.display === 'none' && !infoModalOverlay.classList.contains('show')) { // Only navigate if in main view and modal is not open
        previousMedia();
    }
});
nextArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    if (tagGalleryView.style.display === 'none' && !infoModalOverlay.classList.contains('show')) { // Only navigate if in main view and modal is not open
        nextMedia();
    }
});

searchButton.addEventListener('click', (e) => {
    e.stopPropagation();
    performSearch(searchInput.value);
});

themeToggle.addEventListener('click', toggleTheme);

// Event listeners for Information Modal
infoButton.addEventListener('click', () => {
    infoModalOverlay.classList.add('show');
    themeSubmenu.classList.remove('show'); // Hide submenu when modal opens
});

modalCloseButton.addEventListener('click', () => {
    infoModalOverlay.classList.remove('show');
});

infoModalOverlay.addEventListener('click', (event) => {
    // Close modal when clicking outside the modal-content
    if (event.target === infoModalOverlay) {
        infoModalOverlay.classList.remove('show');
    }
});

// Add scrollwheel functionality
galleryContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default page scrolling
    if (tagGalleryView.style.display === 'none' && !infoModalOverlay.classList.contains('show')) { // Only navigate if in main view and modal is not open
        if (event.deltaY < 0) {
            previousMedia();
        } else if (event.deltaY > 0) {
            nextMedia();
        }
    }
});

galleryContainer.addEventListener('click', (event) => {
    // Only handle clicks for main media navigation if tagGalleryView is not active AND modal is not open
    if (tagGalleryView.style.display === 'none' && !infoModalOverlay.classList.contains('show')) {
        // Change to target mainMediaDisplayArea for click logic
        const currentMediaElement = mainMediaDisplayArea.querySelector('img, video');

            if (currentMediaElement) {
            const mediaRect = currentMediaElement.getBoundingClientRect();
            const clickX = event.clientX - mediaRect.left;

            if (clickX < mediaRect.width / 2) {
                previousMedia();
            } else {
                nextMedia();
            }
        } else if (event.target === mainMediaDisplayArea || event.target.classList.contains('initial-message')) { // Check if click is directly on the area or message
            const containerWidth = mainMediaDisplayArea.offsetWidth;
            const clickX = event.clientX - mainMediaDisplayArea.getBoundingClientRect().left;

            if (clickX < containerWidth / 2) {
                previousMedia();
            } else {
                nextMedia();
            }
        }
    }
});

// Event listeners for submenu hover
appName.addEventListener('mouseenter', () => {
    themeSubmenu.classList.add('show');
});

appName.addEventListener('mouseleave', () => {
    themeSubmenu.classList.remove('show');
});

// Add event listeners for the new gallery submenu
galleryNameButtonContainer.addEventListener('mouseenter', () => {
    gallerySubmenu.classList.add('show');
});

galleryNameButtonContainer.addEventListener('mouseleave', () => {
    gallerySubmenu.classList.remove('show');
});

// Add event listener for window resize to re-create thumbnails
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        createThumbnails(); // Re-create thumbnails on resize
    }, 100); // Debounce to prevent excessive calls
});

window.onload = function() {
    applySavedTheme();
    // Call displayMedia first, which will then call createThumbnails
    displayMedia(0);
    // Call preloadImages after initial display
    preloadImages(mediaItems.map(item => item.src));
};
