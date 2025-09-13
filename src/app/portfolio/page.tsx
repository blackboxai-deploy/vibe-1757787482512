"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Semua Proyek" },
    { id: "website", label: "Website" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "landing", label: "Landing Page" },
    { id: "mobile", label: "Mobile App" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Fashion Boutique",
      description: "Platform e-commerce lengkap dengan sistem inventory dan multi-payment gateway untuk boutique fashion lokal.",
      category: "ecommerce",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/379ca86c-a26b-440e-b06e-6438769e01d5.png",
      tags: ["React", "Next.js", "Stripe", "MongoDB"],
      client: "Fashion Boutique XYZ",
      completedDate: "2024",
      results: [
        "Peningkatan penjualan online 300%",
        "Reduksi waktu checkout 60%",
        "Peningkatan customer retention 150%",
      ],
    },
    {
      id: 2,
      title: "Corporate Website Perusahaan Teknologi",
      description: "Website corporate modern dengan sistem CMS untuk perusahaan teknologi startup yang sedang berkembang.",
      category: "website",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53d5210e-0b11-4b27-9a4d-2fb5b783fc79.png",
      tags: ["Next.js", "TypeScript", "Tailwind", "CMS"],
      client: "TechStart Indonesia",
      completedDate: "2024",
      results: [
        "Peningkatan lead generation 200%",
        "Improvement SEO ranking ke halaman 1",
        "Peningkatan brand awareness 180%",
      ],
    },
    {
      id: 3,
      title: "Landing Page Campaign Marketing",
      description: "Serangkaian landing page untuk campaign digital marketing dengan fokus pada konversi tinggi.",
      category: "landing",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b8f41bb-7fbc-4110-a0fc-e756dc376d9f.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Analytics"],
      client: "Digital Marketing Agency",
      completedDate: "2023",
      results: [
        "Conversion rate 8.5%",
        "Cost per lead turun 40%",
        "ROI campaign meningkat 250%",
      ],
    },
    {
      id: 4,
      title: "Aplikasi Mobile Delivery Food",
      description: "Aplikasi mobile untuk layanan delivery makanan dengan fitur real-time tracking dan payment integration.",
      category: "mobile",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1fd4607e-fa48-49fb-9184-99921646bffb.png",
      tags: ["React Native", "Firebase", "Maps API", "Payment Gateway"],
      client: "FoodDelivery App",
      completedDate: "2024",
      results: [
        "10,000+ downloads dalam 2 bulan",
        "Rating 4.8/5 di app store",
        "Order completion rate 95%",
      ],
    },
    {
      id: 5,
      title: "Sistem Manajemen Sekolah",
      description: "Platform web untuk manajemen sekolah dengan fitur akademik, keuangan, dan komunikasi orang tua.",
      category: "website",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05f1e25b-8432-4dda-82ef-847b03783061.png",
      tags: ["Laravel", "MySQL", "Bootstrap", "Charts.js"],
      client: "SMA Negeri Jakarta",
      completedDate: "2023",
      results: [
        "Efisiensi administrasi meningkat 70%",
        "Komunikasi orang tua-sekolah lebih baik",
        "Penghematan biaya operasional 30%",
      ],
    },
    {
      id: 6,
      title: "Toko Online Produk Elektronik",
      description: "E-commerce platform untuk penjualan produk elektronik dengan fitur perbandingan produk dan review.",
      category: "ecommerce",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec1bc900-ee8a-4290-b8d8-e667040feecc.png",
      tags: ["WooCommerce", "WordPress", "PayPal", "Shipping API"],
      client: "ElektroStore Indonesia",
      completedDate: "2023",
      results: [
        "Penjualan online meningkat 400%",
        "Customer satisfaction 96%",
        "Return rate turun 25%",
      ],
    },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Portfolio Proyek Kami
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Lihat berbagai proyek sukses yang telah kami kerjakan untuk klien dari berbagai industri. 
            Setiap proyek dirancang dengan dedikasi tinggi untuk hasil yang optimal.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "border-blue-300 text-blue-600 hover:bg-blue-50"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-shadow duration-300 bg-white border-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white/90 text-gray-800 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-300 mb-3">
                      {categories.find(c => c.id === project.category)?.label}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Klien:</span>
                      <span className="font-medium text-gray-900">{project.client}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Selesai:</span>
                      <span className="font-medium text-gray-900">{project.completedDate}</span>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">80+</div>
              <div className="text-gray-600">Klien Bahagia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Menjadi Bagian dari Success Story Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Mari diskusikan proyek Anda dan wujudkan visi digital yang akan membawa bisnis Anda ke level selanjutnya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="/contact">Mulai Proyek Anda</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href="/services">Lihat Layanan Kami</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;