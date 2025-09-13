# Zathaya Soft - Drupal 10.5.1 Conversion Guide

## Overview
This guide will help you convert the Next.js website to Drupal 10.5.1 using HTML Twig templates.

## Prerequisites
- Drupal 10.5.1 installed
- Composer for dependency management
- Web server (Apache/Nginx)
- MySQL/PostgreSQL database

## Step 1: Create Custom Theme

### 1.1 Theme Structure
Create a custom theme in `themes/custom/zathaya_soft/`:

```
themes/custom/zathaya_soft/
├── css/
│   ├── style.css
│   └── components.css
├── js/
│   ├── script.js
│   └── components.js
├── templates/
│   ├── page.html.twig
│   ├── node.html.twig
│   ├── block.html.twig
│   └── field.html.twig
├── images/
├── zathaya_soft.info.yml
├── zathaya_soft.libraries.yml
└── zathaya_soft.theme
```

### 1.2 Theme Info File (zathaya_soft.info.yml)
```yml
name: 'Zathaya Soft'
type: theme
description: 'Professional website theme for Zathaya Soft'
package: Custom
core_version_requirement: ^10.5
base theme: stable9

libraries:
  - zathaya_soft/global-styling
  - zathaya_soft/global-scripts

regions:
  header: Header
  navigation: Navigation
  highlighted: Highlighted
  help: Help
  content: Content
  sidebar_first: 'Left Sidebar'
  sidebar_second: 'Right Sidebar'
  footer: Footer
```

### 1.3 Libraries File (zathaya_soft.libraries.yml)
```yml
global-styling:
  css:
    theme:
      css/style.css: {}
      css/components.css: {}
      https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap: { type: external }
      https://cdn.tailwindcss.com: { type: external }

global-scripts:
  js:
    js/script.js: {}
    js/components.js: {}
  dependencies:
    - core/jquery
    - core/drupal
```

## Step 2: Content Types Setup

### 2.1 Required Content Types

1. **Service** (machine name: service)
   - Title (text)
   - Description (text, long)
   - Features (text, multiple values)
   - Image (image field)
   - Price Packages (paragraph reference)
   - Published status

2. **Portfolio** (machine name: portfolio)
   - Title (text)
   - Description (text, long)
   - Category (taxonomy reference)
   - Image (image field)
   - Client Name (text)
   - Completion Date (date)
   - Results (text, multiple values)
   - Tags/Technologies (taxonomy reference, multiple)
   - Published status

3. **Team Member** (machine name: team_member)
   - Name (text)
   - Role (text)
   - Description (text, long)
   - Image (image field)
   - Skills (taxonomy reference, multiple)
   - Published status

4. **Testimonial** (machine name: testimonial)
   - Client Name (text)
   - Company (text)
   - Content (text, long)
   - Rating (integer, 1-5)
   - Published status

### 2.2 Taxonomy Vocabularies

1. **Portfolio Categories** (machine name: portfolio_categories)
   - Website
   - E-commerce
   - Landing Page
   - Mobile App

2. **Technologies** (machine name: technologies)
   - React/Next.js
   - Node.js
   - TypeScript
   - MongoDB
   - etc.

3. **Skills** (machine name: skills)
   - UI/UX Design
   - Project Management
   - Frontend Development
   - Backend Development
   - etc.

## Step 3: Twig Templates

### 3.1 Main Page Template (templates/page.html.twig)
```twig
<!DOCTYPE html>
<html{{ html_attributes }}>
<head>
  {{ head }}
  <title>{{ head_title }}</title>
  {{ css }}
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body{{ attributes }}>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <a href="{{ path('<front>') }}" class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Zathaya Soft
            </a>
          </div>
          {{ page.header }}
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      {% if messages %}
        <div class="messages">
          {{ messages }}
        </div>
      {% endif %}
      
      {{ page.content }}
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      {{ page.footer }}
    </footer>
  </div>
  
  {{ js }}
</body>
</html>
```

### 3.2 Homepage Template (templates/page--front.html.twig)
```twig
{% extends "page.html.twig" %}

{% block content %}
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Transformasi Digital untuk
            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Bisnis Anda
            </span>
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            Wujudkan website impian Anda dengan teknologi terdepan. 
            Solusi web development profesional yang menghadirkan hasil luar biasa untuk bisnis Anda.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="{{ path('entity.webform.canonical', {'webform': 'contact'}) }}" 
               class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-md text-center">
              Konsultasi Gratis
            </a>
            <a href="{{ path('view.portfolio.page_1') }}" 
               class="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg border rounded-md text-center">
              Lihat Portfolio
            </a>
          </div>
        </div>
        <div class="relative">
          <img src="{{ file_url(hero_image.entity.uri.value) }}" 
               alt="Hero Image" 
               class="w-full h-96 object-cover rounded-2xl shadow-2xl">
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  {{ drupal_view('services', 'block_1') }}

  <!-- Testimonials -->
  {{ drupal_view('testimonials', 'block_1') }}
{% endblock %}
```

### 3.3 Service Node Template (templates/node--service.html.twig)
```twig
<article class="service-card border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-white rounded-lg">
  <div class="p-6">
    <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <div class="w-6 h-6 bg-white rounded"></div>
    </div>
    
    <h3 class="text-xl font-bold text-gray-900 mb-3">
      {{ node.title.value }}
    </h3>
    
    <div class="text-gray-600 mb-6">
      {{ node.body.value|raw }}
    </div>

    {% if node.field_features %}
      <ul class="space-y-2 mb-6">
        {% for feature in node.field_features %}
          <li class="flex items-center text-sm text-gray-600">
            <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            {{ feature.value }}
          </li>
        {% endfor %}
      </ul>
    {% endif %}

    {% if node.field_image %}
      <img src="{{ file_url(node.field_image.entity.uri.value) }}" 
           alt="{{ node.field_image.alt }}"
           class="w-full h-48 object-cover rounded-lg mb-4">
    {% endif %}
  </div>
</article>
```

## Step 4: Views Configuration

### 4.1 Services View
- Display: Block
- Format: Unformatted list
- Fields: Custom service card template
- Filter: Published = Yes
- Sort: Weight, Title

### 4.2 Portfolio View
- Display: Page with path /portfolio
- Format: Grid (3 columns)
- Fields: Image, Title, Description, Category, Tags
- Filters: Published = Yes, Category (exposed)
- Sort: Completion Date (DESC)

### 4.3 Team Members View
- Display: Block
- Format: Grid (4 columns)
- Fields: Image, Name, Role, Skills
- Filter: Published = Yes

### 4.4 Testimonials View
- Display: Block
- Format: Unformatted list
- Fields: Content, Client Name, Company, Rating
- Filter: Published = Yes
- Sort: Created (DESC)

## Step 5: Custom CSS Integration

### 5.1 Tailwind CSS Setup
Add Tailwind CSS via CDN or install locally:

```css
/* css/style.css */
@import url('https://cdn.tailwindcss.com');

/* Custom styles */
.hero-gradient {
  background: linear-gradient(135deg, #3B82F6 0%, #4F46E5 100%);
}

.text-gradient {
  background: linear-gradient(135deg, #3B82F6 0%, #4F46E5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### 5.2 Component Styles
```css
/* css/components.css */

/* Header Navigation */
.main-nav {
  @apply flex items-center space-x-8;
}

.main-nav a {
  @apply text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200;
}

/* Cards */
.service-card {
  @apply bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6;
}

.portfolio-card {
  @apply bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300;
}

/* Buttons */
.btn-primary {
  @apply bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-200;
}

.btn-secondary {
  @apply border border-blue-300 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-all duration-200;
}
```

## Step 6: JavaScript Functionality

### 6.1 Main JavaScript (js/script.js)
```javascript
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.zathayaSoft = {
    attach: function (context, settings) {
      
      // Mobile menu toggle
      $('.mobile-menu-button', context).once('mobile-menu').on('click', function() {
        $('.mobile-menu').toggleClass('hidden');
      });

      // Smooth scrolling for anchor links
      $('a[href^="#"]', context).once('smooth-scroll').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 1000);
        }
      });

      // Statistics counter animation
      $('.counter', context).once('counter').each(function() {
        var $this = $(this);
        var countTo = $this.data('count');
        
        $({ countNum: 0 }).animate({
          countNum: countTo
        }, {
          duration: 2000,
          easing: 'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
      });

      // Portfolio filter
      $('.portfolio-filter button', context).once('portfolio-filter').on('click', function() {
        var filter = $(this).data('filter');
        
        $('.portfolio-filter button').removeClass('active');
        $(this).addClass('active');
        
        if (filter === 'all') {
          $('.portfolio-item').fadeIn(300);
        } else {
          $('.portfolio-item').hide();
          $('.portfolio-item[data-category="' + filter + '"]').fadeIn(300);
        }
      });

      // Form validation and enhancement
      $('form.contact-form', context).once('contact-form').on('submit', function(e) {
        var isValid = true;
        
        $(this).find('[required]').each(function() {
          if (!$(this).val()) {
            isValid = false;
            $(this).addClass('error');
          } else {
            $(this).removeClass('error');
          }
        });
        
        if (!isValid) {
          e.preventDefault();
          alert('Please fill in all required fields.');
        }
      });
    }
  };

})(jQuery, Drupal);
```

## Step 7: Webform Configuration

### 7.1 Contact Form Setup
Create a webform with ID "contact" containing:
- Name (required, textfield)
- Email (required, email)
- Phone (required, tel)
- Company (textfield)
- Service (required, select with options)
- Budget (select with options)
- Message (required, textarea)

### 7.2 Form Display
```twig
<!-- templates/webform.html.twig -->
<div class="contact-form-wrapper bg-white p-8 rounded-lg shadow-lg">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Konsultasi Gratis</h2>
  <p class="text-gray-600 mb-8">Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam</p>
  
  {{ form }}
</div>
```

## Step 8: Menu Configuration

### 8.1 Main Navigation Menu
Create a menu with items:
- Home (/)
- Layanan (/services)
- Portfolio (/portfolio)
- Tentang Kami (/about)
- Kontak (/contact)

### 8.2 Footer Menu
Create footer menu with:
- Company links
- Service links
- Legal pages

## Step 9: Block Configuration

### 9.1 Custom Blocks
- Hero block (for homepage)
- Statistics block (counter)
- CTA blocks (call-to-action)
- Contact information block

### 9.2 Block Placement
- Header: Logo + Main menu
- Content: Dynamic content
- Footer: Footer menu + contact info

## Step 10: Deployment Steps

1. Upload theme to `themes/custom/zathaya_soft/`
2. Enable theme in admin
3. Create content types and fields
4. Import sample content
5. Configure views and blocks
6. Set up webforms
7. Configure menus
8. Test responsive design
9. Optimize performance
10. Go live!

## Additional Notes

### Performance Optimization
- Enable caching
- Optimize images
- Minify CSS/JS
- Enable compression

### SEO Configuration
- Install SEO modules (Metatag, Pathauto)
- Configure URL aliases
- Set up XML sitemap
- Add structured data

### Maintenance
- Regular Drupal updates
- Content management training
- Backup strategy
- Security monitoring

This conversion maintains all the visual design and functionality of the original Next.js website while leveraging Drupal's content management capabilities.