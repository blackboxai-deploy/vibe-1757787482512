# 🚀 Zathaya Soft - Complete Website Source Code

**Website Demo**: https://sb-2rkbgt3osn33.vercel.run  
**Download Link**: https://sb-2rkbgt3osn33.vercel.run/download

---

## 📋 Quick Installation Guide

### Step 1: Create Next.js Project
```bash
npx create-next-app@latest zathaya-soft-website --typescript --tailwind --eslint --app
cd zathaya-soft-website
```

### Step 2: Install Dependencies
```bash
npm install @hookform/resolvers @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip class-variance-authority clsx cmdk date-fns embla-carousel-react input-otp lucide-react next-themes react-day-picker react-hook-form react-resizable-panels recharts sonner tailwind-merge vaul zod
```

### Step 3: Setup Components
```bash
npx shadcn@latest init -y
npx shadcn@latest add button card input textarea label select badge accordion alert-dialog aspect-ratio avatar checkbox collapsible command context-menu dialog dropdown-menu hover-card menubar navigation-menu popover progress radio-group scroll-area separator slider switch tabs toggle tooltip
```

### Step 4: Copy Files
Copy all the files below to your project directory.

### Step 5: Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000 to see your website! 🎉

---

## 📁 Complete File Structure

### Root Configuration Files

#### package.json
```json
{
  "name": "zathaya-soft-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "PORT=3000 next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.0.1",
    "@radix-ui/react-accordion": "^1.2.10",
    "@radix-ui/react-alert-dialog": "^1.1.13",
    "@radix-ui/react-aspect-ratio": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.9",
    "@radix-ui/react-checkbox": "^1.3.1",
    "@radix-ui/react-collapsible": "^1.1.10",
    "@radix-ui/react-context-menu": "^2.2.14",
    "@radix-ui/react-dialog": "^1.1.13",
    "@radix-ui/react-dropdown-menu": "^2.1.14",
    "@radix-ui/react-hover-card": "^1.1.13",
    "@radix-ui/react-label": "^2.1.6",
    "@radix-ui/react-menubar": "^1.1.14",
    "@radix-ui/react-navigation-menu": "^1.2.12",
    "@radix-ui/react-popover": "^1.1.13",
    "@radix-ui/react-progress": "^1.1.6",
    "@radix-ui/react-radio-group": "^1.3.6",
    "@radix-ui/react-scroll-area": "^1.2.8",
    "@radix-ui/react-select": "^2.2.4",
    "@radix-ui/react-separator": "^1.1.6",
    "@radix-ui/react-slider": "^1.3.4",
    "@radix-ui/react-slot": "^1.2.2",
    "@radix-ui/react-switch": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.11",
    "@radix-ui/react-toggle": "^1.1.8",
    "@radix-ui/react-toggle-group": "^1.1.9",
    "@radix-ui/react-tooltip": "^1.2.6",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.509.0",
    "next": "15.3.2",
    "next-themes": "^0.4.6",
    "react": "^19.0.0",
    "react-day-picker": "^9.8.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.56.3",
    "react-resizable-panels": "^3.0.1",
    "recharts": "^2.15.3",
    "sonner": "^2.0.3",
    "tailwind-merge": "^3.2.0",
    "vaul": "^1.1.2",
    "zod": "^3.24.4"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.21",
    "eslint": "^9",
    "eslint-config-next": "15.3.2",
    "postcss": "^8.5.3",
    "tailwindcss": "^4.1.6",
    "tw-animate-css": "^1.2.9",
    "typescript": "^5"
  }
}
```

#### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

#### .gitignore
```
# Dependencies
node_modules/
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

---

## 🎨 Website Features

### ✅ Complete Pages:
- **🏠 Homepage** - Hero section dengan animated statistics
- **🔧 Services** - Detail layanan dan paket harga
- **💼 Portfolio** - Showcase proyek dengan filter interaktif
- **👥 About** - Profil perusahaan dan team
- **📞 Contact** - Form kontak dengan validasi
- **📥 Download** - Halaman download source code

### ✅ Technical Features:
- **📱 Responsive Design** - Mobile-first approach
- **🎨 Modern UI** - Tailwind CSS + shadcn/ui components
- **⚡ Performance** - Next.js optimizations
- **🔍 SEO Ready** - Proper meta tags
- **🎭 Animations** - Smooth transitions dan hover effects
- **📝 TypeScript** - Type safety

### ✅ Business Features:
- **💼 Professional Branding** - Consistent blue theme
- **📊 Interactive Elements** - Stats counter, form validation
- **🎯 Conversion Focused** - Clear CTAs dan lead generation
- **📧 Contact Forms** - Ready untuk integration
- **🌐 Multi-page Navigation** - Smooth routing

---

## 🚀 Deployment Ready

Website ini siap untuk deploy ke:
- **Vercel** (Recommended)
- **Netlify** 
- **Railway**
- **Any hosting platform**

### Deploy ke Vercel:
```bash
npm run build
npx vercel --prod
```

---

## 📞 Support

Jika butuh bantuan atau customization:
- **Demo Website**: https://sb-2rkbgt3osn33.vercel.run
- **Download Page**: https://sb-2rkbgt3osn33.vercel.run/download
- **Contact**: Melalui form kontak di website

---

## 📄 License

Copyright © 2024 Zathaya Soft. All rights reserved.

**Note**: File source code lengkap tersedia di halaman download website demo atau bisa didapatkan dengan mengcopy semua kode dari halaman download interaktif.