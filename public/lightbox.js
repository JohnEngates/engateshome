// Lightbox functionality for image viewing with gallery support
(function() {
  // Gallery data storage
  let currentGallery = [];
  let currentIndex = 0;

  // Create lightbox elements
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img class="lightbox-image" src="" alt="">
      <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
      <button class="lightbox-prev" aria-label="Previous image">‹</button>
      <button class="lightbox-next" aria-label="Next image">›</button>
      <div class="lightbox-caption"></div>
      <div class="lightbox-counter"></div>
    </div>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .lightbox {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 9999;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .lightbox.active {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
    }

    .lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .lightbox-image {
      max-width: 100%;
      max-height: 85vh;
      object-fit: contain;
      cursor: default;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    }

    .lightbox-close {
      position: absolute;
      top: -40px;
      right: -40px;
      background: none;
      border: none;
      color: #fff;
      font-size: 40px;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease;
    }

    .lightbox-close:hover {
      transform: scale(1.1);
    }

    .lightbox-prev,
    .lightbox-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.6);
      border: none;
      color: #fff;
      font-size: 60px;
      cursor: pointer;
      width: 60px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      border-radius: 4px;
    }

    .lightbox-prev {
      left: 20px;
    }

    .lightbox-next {
      right: 20px;
    }

    .lightbox-prev:hover,
    .lightbox-next:hover {
      background-color: rgba(0, 0, 0, 0.8);
      transform: translateY(-50%) scale(1.1);
    }

    .lightbox-prev.hidden,
    .lightbox-next.hidden {
      display: none;
    }

    .lightbox-caption {
      color: #fff;
      text-align: center;
      margin-top: 20px;
      font-size: 14px;
      max-width: 600px;
      opacity: 0.8;
    }

    .lightbox-counter {
      position: absolute;
      top: 20px;
      left: 20px;
      color: #fff;
      font-size: 14px;
      opacity: 0.8;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 5px 10px;
      border-radius: 4px;
    }

    .lightbox-counter.hidden {
      display: none;
    }

    @media (max-width: 768px) {
      .lightbox-close {
        top: 10px;
        right: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
      }

      .lightbox-prev,
      .lightbox-next {
        font-size: 40px;
        width: 50px;
        height: 70px;
      }

      .lightbox-prev {
        left: 10px;
      }

      .lightbox-next {
        right: 10px;
      }

      .lightbox-content {
        max-width: 100%;
        max-height: 100%;
      }

      .lightbox-image {
        max-height: 80vh;
      }

      .lightbox-counter {
        top: 60px;
        left: 10px;
      }
    }
  `;

  // Add to DOM
  document.head.appendChild(style);
  document.body.appendChild(lightbox);

  // Get lightbox elements
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxClose = lightbox.querySelector('.lightbox-close');
  const lightboxPrev = lightbox.querySelector('.lightbox-prev');
  const lightboxNext = lightbox.querySelector('.lightbox-next');
  const lightboxCounter = lightbox.querySelector('.lightbox-counter');

  // Function to update lightbox display
  function updateLightbox() {
    if (currentGallery.length === 0) return;
    
    const current = currentGallery[currentIndex];
    lightboxImage.src = current.src;
    lightboxImage.alt = current.alt;
    lightboxCaption.textContent = current.caption || current.alt;
    
    // Update navigation visibility
    if (currentGallery.length > 1) {
      lightboxPrev.classList.remove('hidden');
      lightboxNext.classList.remove('hidden');
      lightboxCounter.classList.remove('hidden');
      lightboxCounter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
    } else {
      lightboxPrev.classList.add('hidden');
      lightboxNext.classList.add('hidden');
      lightboxCounter.classList.add('hidden');
    }
  }

  // Function to open lightbox
  function openLightbox(src, alt, caption, gallery = null, index = 0) {
    if (gallery && gallery.length > 0) {
      currentGallery = gallery;
      currentIndex = index;
    } else {
      currentGallery = [{src, alt, caption}];
      currentIndex = 0;
    }
    
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Function to close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      lightboxImage.src = '';
      lightboxCaption.textContent = '';
      currentGallery = [];
      currentIndex = 0;
    }, 300);
  }

  // Navigation functions
  function showPrevious() {
    if (currentGallery.length > 1) {
      currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      updateLightbox();
    }
  }

  function showNext() {
    if (currentGallery.length > 1) {
      currentIndex = (currentIndex + 1) % currentGallery.length;
      updateLightbox();
    }
  }

  // Event listeners
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox || e.target === lightboxClose) {
      closeLightbox();
    }
  });

  lightboxPrev.addEventListener('click', function(e) {
    e.stopPropagation();
    showPrevious();
  });

  lightboxNext.addEventListener('click', function(e) {
    e.stopPropagation();
    showNext();
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    switch(e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        showPrevious();
        break;
      case 'ArrowRight':
        showNext();
        break;
    }
  });

  // Prevent image dragging
  lightboxImage.addEventListener('dragstart', function(e) {
    e.preventDefault();
  });

  // Initialize clickable images
  function initializeLightbox() {
    // First, handle specific multi-image containers
    const multiImageContainers = document.querySelectorAll('.whitehouse-photos, .nyse-bell-photos, .wozniak-photos, .achievement-photos');
    
    multiImageContainers.forEach(container => {
      const images = container.querySelectorAll('.clickable');
      if (images.length > 1) {
        const gallery = Array.from(images).map(img => {
          const caption = container.querySelector('.image-caption')?.textContent || 
                         img.closest('div')?.querySelector('.image-caption')?.textContent ||
                         img.alt;
          return {
            src: img.src,
            alt: img.alt,
            caption: caption
          };
        });
        
        images.forEach((img, index) => {
          const link = img.closest('a');
          if (link) {
            link.setAttribute('data-lightbox-initialized', 'true');
            link.addEventListener('click', function(e) {
              e.preventDefault();
              openLightbox(img.src, img.alt, gallery[index].caption, gallery, index);
            });
          }
        });
      }
    });
    
    // Then handle all remaining clickable images as singles
    const allClickableImages = document.querySelectorAll('.clickable');
    
    allClickableImages.forEach(img => {
      const parentLink = img.closest('a');
      if (!parentLink || parentLink.hasAttribute('data-lightbox-initialized')) return;
      
      parentLink.setAttribute('data-lightbox-initialized', 'true');
      parentLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Look for caption in various places
        const caption = img.closest('.appearance-image, .timeline-image, .tv-image, .speaking-hero, .whitehouse-hero-photo, .achievement-highlight')
          ?.querySelector('.image-caption, .photo-caption')?.textContent || 
          img.closest('div')?.querySelector('.image-caption, .photo-caption')?.textContent ||
          img.alt;
          
        openLightbox(img.src, img.alt, caption);
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLightbox);
  } else {
    initializeLightbox();
  }
})();