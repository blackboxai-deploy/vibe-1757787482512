"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const DownloadPage = () => {
  const [copiedFile, setCopiedFile] = useState<string>("");

  const fileStructure = {
    "package.json": `{
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
}`,

    "README.md": `# Zathaya Soft - Website Perusahaan

Website modern dan responsive untuk perusahaan jasa pembuatan website Zathaya Soft.

## Fitur Utama

- 🏠 **Homepage**: Hero section dengan statistik animasi
- 🔧 **Services**: Detail layanan dan paket harga
- 💼 **Portfolio**: Showcase proyek dengan filter
- 👥 **About**: Profil perusahaan dan tim
- 📞 **Contact**: Form kontak interaktif

## Tech Stack

- **Framework**: Next.js 15 dengan TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Fonts**: Google Fonts (Inter)
- **Deployment**: Vercel

## Instalasi

\`\`\`bash
# Clone repository
git clone <repository-url>

# Install dependencies
npm install
# atau
pnpm install

# Run development server
npm run dev
# atau  
pnpm dev
\`\`\`

Website akan tersedia di [http://localhost:3000](http://localhost:3000)

## Build untuk Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Struktur Folder

\`\`\`
src/
├── app/              # App Router pages
│   ├── about/        # Halaman tentang
│   ├── contact/      # Halaman kontak  
│   ├── portfolio/    # Halaman portfolio
│   ├── services/     # Halaman layanan
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Homepage
├── components/       # Komponen React
│   ├── ui/          # shadcn/ui components
│   ├── Header.tsx   # Navigation header
│   └── Footer.tsx   # Footer
└── lib/
    └── utils.ts     # Utility functions
\`\`\`

## Customization

1. **Brand Colors**: Edit colors di \`tailwind.config.js\`
2. **Content**: Update text di setiap page component
3. **Images**: Replace dengan gambar bisnis Anda
4. **Contact Info**: Update di \`Footer.tsx\` dan \`contact/page.tsx\`

## Performance

Website dioptimalkan dengan:
- Static Site Generation (SSG)
- Image optimization
- Code splitting
- Responsive design

## License

Copyright © 2024 Zathaya Soft. All rights reserved.`,

    ".gitignore": `# Dependencies
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
next-env.d.ts`,

    "next.config.ts": `import type { NextConfig } from "next";

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

export default nextConfig;`,

    "tailwind.config.js": `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`
  };

  const copyToClipboard = async (filename: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedFile(filename);
      setTimeout(() => setCopiedFile(""), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadAllFiles = () => {
    // Create a comprehensive installation guide
    const installationGuide = `# Zathaya Soft Website - Installation Guide

## 🚀 Quick Start

1. **Create new Next.js project**:
   \`\`\`bash
   npx create-next-app@latest zathaya-soft-website --typescript --tailwind --eslint --app
   cd zathaya-soft-website
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install @hookform/resolvers @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip class-variance-authority clsx cmdk date-fns embla-carousel-react input-otp lucide-react next-themes react-day-picker react-hook-form react-resizable-panels recharts sonner tailwind-merge vaul zod
   \`\`\`

3. **Copy all files** from this download page to your project directory

4. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

Visit [http://localhost:3000](http://localhost:3000) to see the result!

## 📁 File Structure

Copy these files to your project:

### Configuration Files (Root Directory):
- package.json
- next.config.ts  
- tailwind.config.js
- .gitignore
- README.md

### Source Files (src/):
- src/app/layout.tsx
- src/app/page.tsx
- src/app/about/page.tsx
- src/app/contact/page.tsx
- src/app/portfolio/page.tsx
- src/app/services/page.tsx
- src/components/Header.tsx
- src/components/Footer.tsx

### UI Components:
All shadcn/ui components are already available in your components/ui/ directory.

## 🎨 Customization

1. **Update Company Info**: Edit contact details in Footer.tsx and contact page
2. **Change Brand Colors**: Modify Tailwind config for your brand palette
3. **Replace Content**: Update text content in all page components
4. **Add Your Images**: Replace placeholder images with your actual business photos

## 🚀 Deployment

Deploy easily on Vercel:
\`\`\`bash
npm run build
\`\`\`

Then deploy to Vercel or your preferred hosting platform.

---

## 📋 Complete File Contents Below

Copy each file content to the corresponding file in your project:
`;

    const blob = new Blob([installationGuide], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zathaya-soft-installation-guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Download Website Zathaya Soft
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Unduh semua file website untuk instalasi lokal di komputer Anda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={downloadAllFiles}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              📥 Download Installation Guide
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <a href="https://sb-2rkbgt3osn33.vercel.run" target="_blank" rel="noopener noreferrer">
                🌐 Lihat Demo Live
              </a>
            </Button>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">📋 Petunjuk Instalasi:</h3>
            <ol className="text-left text-blue-800 space-y-2">
              <li>1. Buat project Next.js baru dengan TypeScript dan Tailwind CSS</li>
              <li>2. Install semua dependencies yang tercantum di package.json</li>
              <li>3. Copy semua file dari daftar di bawah ke project Anda</li>
              <li>4. Jalankan <code className="bg-blue-200 px-2 py-1 rounded">npm run dev</code></li>
              <li>5. Website siap digunakan di localhost:3000! 🎉</li>
            </ol>
          </div>
        </div>

        <div className="space-y-6">
          {Object.entries(fileStructure).map(([filename, content]) => (
            <Card key={filename} className="shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CardTitle className="text-lg font-mono">{filename}</CardTitle>
                  <Badge variant="secondary">{content.split('\n').length} lines</Badge>
                </div>
                <Button
                  onClick={() => copyToClipboard(filename, content)}
                  variant="outline"
                  size="sm"
                  className={copiedFile === filename ? "bg-green-50 border-green-300 text-green-700" : ""}
                >
                  {copiedFile === filename ? "✅ Copied!" : "📋 Copy"}
                </Button>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={content}
                  readOnly
                  className="font-mono text-sm min-h-[200px] max-h-[400px] resize-none bg-gray-50"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎉 Website Siap Digunakan!</h3>
            <p className="text-gray-600 mb-6">
              Setelah mengcopy semua file di atas, website Zathaya Soft akan siap untuk dijalankan secara lokal di komputer Anda.
              Website ini sudah responsive, optimized, dan siap untuk production!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/" className="text-white">🏠 Kembali ke Website</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact" className="text-green-600 border-green-300 hover:bg-green-50">📞 Butuh Bantuan?</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;