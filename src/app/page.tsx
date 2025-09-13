"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const finalStats = { projects: 150, clients: 80, experience: 5 };
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        projects: Math.floor(finalStats.projects * progress),
        clients: Math.floor(finalStats.clients * progress),
        experience: Math.floor(finalStats.experience * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(finalStats);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Website Development",
      description: "Website responsif dan modern dengan teknologi terkini",
      features: ["React/Next.js", "Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      title: "E-commerce Solution",
      description: "Toko online lengkap dengan sistem pembayaran terintegrasi",
      features: ["Payment Gateway", "Inventory Management", "Admin Dashboard", "Mobile Friendly"],
    },
    {
      title: "Landing Page Design",
      description: "Landing page yang konversi tinggi untuk bisnis Anda",
      features: ["High Conversion", "A/B Testing", "Analytics Integration", "Call-to-Action"],
    },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      company: "PT. Maju Jaya",
      content: "Website yang dibuat Zathaya Soft sangat membantu meningkatkan penjualan online kami hingga 200%.",
    },
    {
      name: "Sari Indah",
      company: "Boutique Fashion",
      content: "Tim yang profesional dan hasilnya melampaui ekspektasi. E-commerce kami jadi sangat mudah digunakan.",
    },
    {
      name: "Ahmad Rahman",
      company: "Startup Tech",
      content: "Landing page yang mereka buat berhasil meningkatkan conversion rate hingga 150%. Sangat recommended!",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transformasi Digital untuk{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Bisnis Anda
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Wujudkan website impian Anda dengan teknologi terdepan. 
                  Solusi web development profesional yang menghadirkan hasil luar biasa untuk bisnis Anda.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg">
                  <Link href="/contact">Konsultasi Gratis</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  <Link href="/portfolio">Lihat Portfolio</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stats.projects}+</div>
                  <div className="text-gray-600">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stats.clients}+</div>
                  <div className="text-gray-600">Klien Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stats.experience}+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ccf3d255-190b-49ae-9287-6a219e446bf7.png"
                  alt="Modern professional web development workspace with multiple screens showing code and designs"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-80" />
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-pink-400 rounded-full opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan digital bisnis Anda dengan teknologi terdepan dan desain yang memukau
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 bg-white rounded" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
              <Link href="/services">Lihat Semua Layanan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Klien Kami
            </h2>
            <p className="text-xl text-gray-600">
              Kepuasan klien adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 text-sm">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Konsultasikan kebutuhan website Anda dengan tim ahli kami. 
            Dapatkan solusi terbaik untuk mengembangkan bisnis digital Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/contact">Hubungi Kami Sekarang</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Link href="/services">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;