/**
 * Zathaya Soft Theme - Main JavaScript
 * Converted from Next.js to Drupal 10.5.1
 */

(function ($, Drupal) {
  'use strict';

  /**
   * Main theme behavior.
   */
  Drupal.behaviors.zathayaSoft = {
    attach: function (context, settings) {
      
      // Mobile menu toggle
      $('.mobile-menu-button', context).once('mobile-menu').on('click', function() {
        $('.mobile-menu').toggleClass('hidden');
        
        // Toggle icon
        var icon = $(this).find('svg');
        if ($('.mobile-menu').hasClass('hidden')) {
          icon.html('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />');
        } else {
          icon.html('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />');
        }
      });

      // Close mobile menu when clicking outside
      $(document).on('click', function(e) {
        if (!$(e.target).closest('.mobile-menu, .mobile-menu-button').length) {
          $('.mobile-menu').addClass('hidden');
          $('.mobile-menu-button svg').html('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />');
        }
      });

      // Smooth scrolling for anchor links
      $('a[href^="#"]', context).once('smooth-scroll').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 1000, 'easeInOutCubic');
        }
      });

      // Statistics counter animation
      $('.counter', context).once('counter').each(function() {
        var $this = $(this);
        var countTo = parseInt($this.data('count'), 10);
        
        // Check if element is in viewport
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              animateCounter($this, countTo);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        
        observer.observe($this[0]);
      });

      // Counter animation function
      function animateCounter($element, countTo) {
        $({ countNum: 0 }).animate({
          countNum: countTo
        }, {
          duration: 2500,
          easing: 'easeOutCubic',
          step: function() {
            $element.text(Math.floor(this.countNum) + '+');
          },
          complete: function() {
            $element.text(countTo + '+');
          }
        });
      }

      // Portfolio filter functionality
      $('.portfolio-filter button', context).once('portfolio-filter').on('click', function() {
        var filter = $(this).data('filter');
        var $button = $(this);
        
        // Update active button
        $('.portfolio-filter button').removeClass('active bg-blue-600 text-white').addClass('border-blue-300 text-blue-600');
        $button.removeClass('border-blue-300 text-blue-600').addClass('active bg-blue-600 text-white');
        
        // Filter portfolio items
        if (filter === 'all') {
          $('.portfolio-item').fadeIn(400);
        } else {
          $('.portfolio-item').each(function() {
            var $item = $(this);
            if ($item.data('category') === filter) {
              $item.fadeIn(400);
            } else {
              $item.fadeOut(400);
            }
          });
        }
      });

      // Form validation and enhancement
      $('form.contact-form', context).once('contact-form').each(function() {
        var $form = $(this);
        
        // Real-time validation
        $form.find('input, textarea, select').on('blur', function() {
          validateField($(this));
        });

        // Form submission
        $form.on('submit', function(e) {
          var isValid = true;
          
          $form.find('[required]').each(function() {
            if (!validateField($(this))) {
              isValid = false;
            }
          });
          
          if (!isValid) {
            e.preventDefault();
            showMessage('Please fill in all required fields correctly.', 'error');
            
            // Focus on first error field
            $form.find('.error').first().focus();
          } else {
            // Show loading state
            $form.find('button[type="submit"]').prop('disabled', true).text('Sending...');
          }
        });
      });

      // Field validation function
      function validateField($field) {
        var value = $field.val().trim();
        var isValid = true;
        var errorMessage = '';

        // Remove previous error
        $field.removeClass('error').next('.error-message').remove();

        // Check if required field is empty
        if ($field.prop('required') && !value) {
          isValid = false;
          errorMessage = 'This field is required.';
        }

        // Email validation
        if ($field.attr('type') === 'email' && value) {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
          }
        }

        // Phone validation
        if ($field.attr('type') === 'tel' && value) {
          var phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
          if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number.';
          }
        }

        // Show error if validation failed
        if (!isValid) {
          $field.addClass('error');
          $field.after('<div class="error-message text-red-500 text-sm mt-1">' + errorMessage + '</div>');
        }

        return isValid;
      }

      // Message display function
      function showMessage(message, type) {
        var messageClass = type === 'error' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-green-100 text-green-700 border-green-200';
        var $message = $('<div class="message ' + messageClass + ' p-4 rounded-lg border mb-4">' + message + '</div>');
        
        // Remove existing messages
        $('.message').remove();
        
        // Add new message
        $('main .content').prepend($message);
        
        // Auto-hide after 5 seconds
        setTimeout(function() {
          $message.fadeOut(300, function() {
            $(this).remove();
          });
        }, 5000);
      }

      // Scroll-based animations
      function initScrollAnimations() {
        var $animateElements = $('.fade-in-up');
        
        if ($animateElements.length === 0) return;

        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              $(entry.target).addClass('animate');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        $animateElements.each(function() {
          observer.observe(this);
        });
      }

      // Initialize scroll animations
      initScrollAnimations();

      // Card hover effects
      $('.card, .service-card, .portfolio-card, .team-card, .testimonial-card', context)
        .once('card-hover')
        .hover(
          function() {
            $(this).addClass('hover-effect');
          },
          function() {
            $(this).removeClass('hover-effect');
          }
        );

      // Lazy loading for images
      $('img[data-src]', context).once('lazy-load').each(function() {
        var $img = $(this);
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });
        observer.observe(this);
      });

      // Back to top button
      var $backToTop = $('<button class="back-to-top fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform translate-y-16 opacity-0 z-50" title="Back to top"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg></button>');
      
      if ($('.back-to-top').length === 0) {
        $('body').append($backToTop);
      }

      // Show/hide back to top button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
          $('.back-to-top').removeClass('translate-y-16 opacity-0').addClass('translate-y-0 opacity-100');
        } else {
          $('.back-to-top').removeClass('translate-y-0 opacity-100').addClass('translate-y-16 opacity-0');
        }
      });

      // Back to top click handler
      $('.back-to-top').on('click', function() {
        $('html, body').animate({
          scrollTop: 0
        }, 800, 'easeInOutCubic');
      });

      // Preloader (if exists)
      $(window).on('load', function() {
        $('.preloader').fadeOut(300);
      });
      
      // Service card interaction
      $('.service-card', context).once('service-interaction').hover(
        function() {
          $(this).find('.service-icon').addClass('scale-110');
        },
        function() {
          $(this).find('.service-icon').removeClass('scale-110');
        }
      );

      // Portfolio card interaction
      $('.portfolio-card', context).once('portfolio-interaction').hover(
        function() {
          $(this).find('.portfolio-image').addClass('scale-105');
        },
        function() {
          $(this).find('.portfolio-image').removeClass('scale-105');
        }
      );

      // Team card interaction
      $('.team-card', context).once('team-interaction').hover(
        function() {
          $(this).find('.team-image').addClass('scale-110');
        },
        function() {
          $(this).find('.team-image').removeClass('scale-110');
        }
      );

      // Add easing functions for jQuery animations
      $.easing.easeInOutCubic = function(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
      };

      $.easing.easeOutCubic = function(x) {
        return 1 - Math.pow(1 - x, 3);
      };
    }
  };

  /**
   * Contact form behavior.
   */
  Drupal.behaviors.contactForm = {
    attach: function (context, settings) {
      // Enhanced contact form handling
      $('.webform-submission-contact-form', context).once('enhanced-contact').each(function() {
        var $form = $(this);
        
        // Add custom classes to form elements
        $form.find('input, textarea, select').addClass('form-input');
        $form.find('label').addClass('form-label');
        $form.find('.form-submit').addClass('btn-primary w-full');
        
        // Add loading spinner on submit
        $form.on('submit', function() {
          var $submitBtn = $(this).find('.form-submit');
          var originalText = $submitBtn.text();
          
          $submitBtn.prop('disabled', true).html(
            '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">' +
            '<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>' +
            '<path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>' +
            '</svg>' +
            'Sending...'
          );
          
          // Re-enable button after 3 seconds (in case of errors)
          setTimeout(function() {
            $submitBtn.prop('disabled', false).text(originalText);
          }, 3000);
        });
      });
    }
  };

})(jQuery, Drupal);