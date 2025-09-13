"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Terima kasih! Pesan Anda telah dikirim. Tim kami akan segera menghubungi Anda.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      title: "Email",
      value: "info@zathayasoft.com",
      description: "Kirim email untuk inquiry atau pertanyaan umum",
      icon: "📧",
    },
    {
      title: "Telepon",
      value: "+62 812-3456-7890",
      description: "Hubungi langsung untuk konsultasi segera",
      icon: "📞",
    },
    {
      title: "Alamat",
      value: "Jakarta, Indonesia",
      description: "Kunjungi kantor kami untuk meeting langsung",
      icon: "📍",
    },
    {
      title: "Jam Operasional",
      value: "Senin - Jumat: 09:00 - 18:00",
      description: "Waktu terbaik untuk menghubungi tim kami",
      icon: "🕐",
    },
  ];

  const services = [
    { value: "website", label: "Website Development" },
    { value: "ecommerce", label: "E-commerce Solution" },
    { value: "landing", label: "Landing Page Design" },
    { value: "mobile", label: "Mobile App Development" },
    { value: "maintenance", label: "Website Maintenance" },
    { value: "consultation", label: "Konsultasi Teknologi" },
  ];

  const budgetRanges = [
    { value: "5-10", label: "Rp 5 - 10 Juta" },
    { value: "10-25", label: "Rp 10 - 25 Juta" },
    { value: "25-50", label: "Rp 25 - 50 Juta" },
    { value: "50-100", label: "Rp 50 - 100 Juta" },
    { value: "100+", label: "Rp 100 Juta+" },
    { value: "discuss", label: "Mari Diskusikan" },
  ];

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan website?",
      answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Website basic 2-3 minggu, website kompleks 1-3 bulan.",
    },
    {
      question: "Apakah ada garansi untuk website yang dibuat?",
      answer: "Ya, kami memberikan garansi maintenance selama 3 bulan setelah website selesai dan online.",
    },
    {
      question: "Apakah bisa revisi desain selama proses pengerjaan?",
      answer: "Tentu! Kami menyediakan beberapa kali revisi sesuai paket yang dipilih untuk memastikan hasil sesuai harapan.",
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer: "Pembayaran dilakukan secara bertahap: 30% DP, 40% saat progress 50%, dan 30% saat project selesai.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Siap mewujudkan visi digital Anda? Mari diskusikan proyek impian Anda 
            dengan tim ahli kami. Dapatkan konsultasi gratis dan penawaran terbaik.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Konsultasi Gratis
                  </CardTitle>
                  <p className="text-gray-600">
                    Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Masukkan nama lengkap Anda"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="nama@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Nomor Telepon *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+62 812-3456-7890"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Nama Perusahaan</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="PT. Nama Perusahaan"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service">Layanan yang Dibutuhkan *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih layanan" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Estimasi Budget</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih range budget" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range.value} value={range.value}>
                                {range.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Deskripsi Proyek *</Label>
                      <Textarea
                        id="message"
                        placeholder="Ceritakan tentang proyek yang Anda inginkan, fitur-fitur khusus, timeline, dan detail lainnya..."
                        className="min-h-32"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Mengirim..." : "Kirim Pesan & Dapatkan Konsultasi Gratis"}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      Dengan mengirim form ini, Anda menyetujui untuk dihubungi oleh tim kami 
                      melalui email atau telepon terkait proyek Anda.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <p className="font-medium text-blue-600 mb-2">
                          {info.value}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <span className="sr-only">Facebook</span>
                      <span>f</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <span>📷</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <span>in</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Pertanyaan yang sering ditanyakan oleh klien kami
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lokasi Kantor Kami
            </h2>
            <p className="text-gray-600">
              Kunjungi kantor kami untuk meeting langsung atau diskusi proyek
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-gray-600 font-medium">Jakarta, Indonesia</p>
              <p className="text-gray-500">Maps akan tersedia segera</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;