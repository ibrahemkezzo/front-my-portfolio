
// Main JavaScript file for the portfolio website
class PortfolioWebsite {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.currentTheme = localStorage.getItem('theme') || this.getPreferredTheme();
    
    this.init();
  }
  
  init() {
    this.initializeTheme();
    this.initializeLanguage();
    this.initializeNavigation();
    this.initializePortfolioFilters();
    this.initializeContactForm();
    this.initializeScrollEffects();
    this.initializeFooter();
    this.initializeAnimations();
  }
  
  // Theme Management
  getPreferredTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  initializeTheme() {
    document.body.setAttribute('data-theme', this.currentTheme);
    this.updateThemeIcons();
    
    // Theme toggle buttons
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    [themeToggle, mobileThemeToggle].forEach(button => {
      if (button) {
        button.addEventListener('click', () => this.toggleTheme());
      }
    });
  }
  
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
    this.updateThemeIcons();
  }
  
  updateThemeIcons() {
    // Icons are handled via CSS based on data-theme attribute
  }
  
  // Language Management
  initializeLanguage() {
    updatePageTranslations(this.currentLanguage);
    
    const languageToggle = document.getElementById('language-toggle');
    const mobileLanguageToggle = document.getElementById('mobile-language-toggle');
    
    [languageToggle, mobileLanguageToggle].forEach(button => {
      if (button) {
        button.addEventListener('click', () => this.toggleLanguage());
      }
    });
  }
  
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', this.currentLanguage);
    updatePageTranslations(this.currentLanguage);
  }
  
  // Navigation
  initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Mobile menu toggle
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
      });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Close mobile menu if open
          if (mobileMenu) {
            mobileMenu.classList.remove('active');
          }
        }
      });
    });
  }
  
  // Portfolio Filters
  initializePortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
          const category = item.getAttribute('data-category');
          
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            // Add fade in animation
            item.style.animation = 'fadeIn 0.5s ease';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Contact Form
  initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message')
        };
        
        // Simulate form submission (replace with actual submission logic)
        this.handleFormSubmission(data);
      });
    }
  }
  
  handleFormSubmission(data) {
    // Show loading state
    const submitButton = document.querySelector('#contact-form button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
        <path d="M21 12a9 9 0 11-6.219-8.56"/>
      </svg>
      Sending...
    `;
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      // Show success message (you can replace this with actual form handling)
      this.showFormMessage('success', 'Message sent successfully! I\'ll get back to you soon.');
      
      // Reset form
      document.getElementById('contact-form').reset();
      
      // Reset button
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }, 2000);
  }
  
  showFormMessage(type, message) {
    // Create and show a simple notification
    const notification = document.createElement('div');
    notification.className = `form-notification ${type}`;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 16px 24px;
      background: ${type === 'success' ? '#10b981' : '#ef4444'};
      color: white;
      border-radius: 8px;
      z-index: 1000;
      animation: fadeIn 0.3s ease;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
      notification.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }
  
  // Scroll Effects
  initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      '.hero-content, .hero-visual, .about-content, .skills-content, .service-card, .portfolio-item, .contact-info, .contact-form'
    );
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Footer
  initializeFooter() {
    // Update current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  }
  
  // Animations
  initializeAnimations() {
    // Add CSS animation classes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      .animate-spin {
        animation: spin 1s linear infinite;
      }
      
      .form-notification {
        animation: fadeIn 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioWebsite();
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    // Restart animations when page becomes visible
    const animatedElements = document.querySelectorAll('[style*="animation"]');
    animatedElements.forEach(element => {
      const animation = element.style.animation;
      element.style.animation = 'none';
      element.offsetHeight; // Force reflow
      element.style.animation = animation;
    });
  }
});

// Handle window resize
window.addEventListener('resize', () => {
  // Close mobile menu on resize
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && window.innerWidth >= 768) {
    mobileMenu.classList.remove('active');
  }
});

// Utility functions for Laravel Blade integration
window.PortfolioUtils = {
  // Function to update portfolio items dynamically
  updatePortfolioItems: function(items) {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    items.forEach(item => {
      const portfolioItem = document.createElement('div');
      portfolioItem.className = 'portfolio-item';
      portfolioItem.setAttribute('data-category', item.category);
      
      portfolioItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="portfolio-overlay">
          <div class="portfolio-content">
            <h3 class="portfolio-title">${item.title}</h3>
            <p class="portfolio-tech">Technologies: ${item.technologies.join(', ')}</p>
            <a href="${item.link}" class="portfolio-link">
              <span data-key="portfolio.viewproject">View Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7,7 17,7 17,17"/>
              </svg>
            </a>
          </div>
        </div>
      `;
      
      portfolioGrid.appendChild(portfolioItem);
    });
    
    // Update translations for new elements
    updatePageTranslations(localStorage.getItem('language') || 'en');
  },
  
  // Function to show notifications
  showNotification: function(type, message) {
    const website = new PortfolioWebsite();
    website.showFormMessage(type, message);
  },
  
  // Function to update contact information
  updateContactInfo: function(contactData) {
    const contactMethods = document.querySelectorAll('.contact-method span');
    if (contactMethods.length >= 3) {
      contactMethods[0].textContent = contactData.email;
      contactMethods[1].textContent = contactData.phone;
      contactMethods[2].textContent = contactData.address;
    }
  }
};
