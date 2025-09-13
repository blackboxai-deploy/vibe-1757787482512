import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const ServicesPage = () => {
  const services = [
    {
      title: "Website Development",
      description: "Pembuatan website profesional dengan teknologi modern",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f86a3c57-c9cc-4b04-9412-167c947fbf4b.png",
      features: [
        "Desain Responsive & Mobile-First",
        "Teknologi React/Next.js Terkini",
        "SEO Optimization",
        "Performance Optimization",
        "Content Management System",
        "SSL Certificate & Security",
      ],
      packages: [
        {
          name: "Basic",
          price: "5,000,000",
          features: ["5 Halaman", "Responsive Design", "SEO Basic", "3 Revisi"],
        },
        {
          name: "Professional",
          price: "10,000,000",
          features: ["10 Halaman", "CMS Integration", "Advanced SEO", "5 Revisi", "Analytics"],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "20,000,000",
          features: ["Unlimited Pages", "Custom Features", "Priority Support", "Unlimited Revisi"],
        },
      ],
    },
    {
      title: "E-commerce Solution",
      description: "Toko online lengkap dengan sistem pembayaran terintegrasi",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7517e8a4-cb29-415c-9f78-b3a798f098ec.png",
      features: [
        "Multi-Payment Gateway",
        "Inventory Management",
        "Order Tracking System",
        "Customer Dashboard",
        "Admin Panel Lengkap",
        "Mobile App Integration",
      ],
      packages: [
        {
          name: "Starter",
          price: "8,000,000",
          features: ["50 Produk", "2 Payment Methods", "Basic Analytics", "Email Support"],
        },
        {
          name: "Business",
          price: "15,000,000",
          features: ["500 Produk", "Multiple Payments", "Advanced Analytics", "Phone Support", "Marketing Tools"],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "30,000,000",
          features: ["Unlimited Products", "Custom Integration", "Dedicated Support", "API Access"],
        },
      ],
    },
    {
      title: "Landing Page Design",
      description: "Landing page yang konversi tinggi untuk campaign marketing",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8436e5f6-2716-4350-8115-6f543e82ac4b.png",
      features: [
        "High-Converting Design",
        "A/B Testing Setup",
        "Lead Capture Forms",
        "Analytics Integration",
        "Speed Optimization",
        "Mobile Optimization",
      ],
      packages: [
        {
          name: "Single Page",
          price: "3,000,000",
          features: ["1 Landing Page", "Contact Form", "Basic Analytics", "2 Revisi"],
        },
        {
          name: "Campaign Pack",
          price: "6,000,000",
          features: ["3 Landing Pages", "A/B Testing", "Advanced Forms", "5 Revisi", "Conversion Tracking"],
          popular: true,
        },
        {
          name: "Full Campaign",
          price: "12,000,000",
          features: ["5 Landing Pages", "Custom Integration", "Email Marketing", "Unlimited Revisi"],
        },
      ],
    },
    {
      title: "Mobile App Development",
      description: "Aplikasi mobile untuk iOS dan Android",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b943d34c-0577-4a05-9624-5022cce1df24.png",
      features: [
        "Cross-Platform Development",
        "Native Performance",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "API Integration",
      ],
      packages: [
        {
          name: "Basic App",
          price: "25,000,000",
          features: ["Single Platform", "5 Screens", "Basic Features", "App Store Submission"],
        },
        {
          name: "Professional",
          price: "45,000,000",
          features: ["iOS & Android", "10 Screens", "Advanced Features", "Backend Integration", "Analytics"],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "80,000,000",
          features: ["Full Custom App", "Unlimited Features", "Maintenance", "Priority Support"],
        },
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Konsultasi & Analisis",
      description: "Diskusi mendalam tentang kebutuhan, target audience, dan tujuan bisnis Anda.",
    },
    {
      step: "02",
      title: "Desain & Wireframe",
      description: "Pembuatan mockup dan wireframe sesuai dengan brand identity dan user experience.",
    },
    {
      step: "03",
      title: "Development",
      description: "Proses coding menggunakan teknologi terkini dengan best practices development.",
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Pengujian menyeluruh untuk memastikan kualitas dan performa optimal.",
    },
    {
      step: "05",
      title: "Launch & Maintenance",
      description: "Peluncuran website dan dukungan maintenance untuk menjaga performa.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Layanan Profesional untuk Kebutuhan Digital Anda
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Solusi lengkap mulai dari website development, e-commerce, hingga mobile app 
            dengan teknologi terdepan dan tim ahli berpengalaman.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={index} className={`mb-20 ${index !== services.length - 1 ? 'border-b border-gray-200 pb-20' : ''}`}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Packages */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.packages.map((pkg, pkgIndex) => (
                      <Card key={pkgIndex} className={`relative border-2 ${pkg.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
                        {pkg.popular && (
                          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                            Populer
                          </Badge>
                        )}
                        <CardHeader className="text-center pb-4">
                          <CardTitle className="text-lg font-semibold">{pkg.name}</CardTitle>
                          <div className="text-2xl font-bold text-blue-600">
                            Rp {pkg.price}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proses Kerja Profesional
            </h2>
            <p className="text-xl text-gray-600">
              Metodologi yang terstruktur untuk hasil terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -z-10" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Mulai Proyek Anda Hari Ini
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan digital bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Konsultasi Gratis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/portfolio">Lihat Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;