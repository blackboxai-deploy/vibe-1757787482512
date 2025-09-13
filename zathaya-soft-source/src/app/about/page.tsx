import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Ahmad Zathaya",
      role: "Founder & CEO",
      description: "Full-stack developer dengan 8+ tahun pengalaman di industri teknologi dan manajemen proyek.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c526f5b8-4b85-4faf-ba01-619f6dd8dcd3.png",
      skills: ["Strategic Planning", "Project Management", "Team Leadership"],
    },
    {
      name: "Sari Dewi",
      role: "Lead UI/UX Designer",
      description: "Desainer berpengalaman dengan fokus pada user experience dan interface design yang intuitif.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18147d5a-bd7f-4ebb-8c69-148f84633e97.png",
      skills: ["UI/UX Design", "Prototyping", "User Research"],
    },
    {
      name: "Budi Rahman",
      role: "Senior Developer",
      description: "Expert dalam teknologi modern seperti React, Node.js, dan cloud infrastructure development.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/97e901bc-8aa3-43d1-baf2-d3513b3e9fbd.png",
      skills: ["React/Next.js", "Node.js", "Cloud Architecture"],
    },
    {
      name: "Maya Sinta",
      role: "Digital Marketing Specialist",
      description: "Spesialis dalam SEO, digital marketing strategy, dan performance optimization untuk web.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/90b757bf-4a0c-466e-aac4-ebe70e4d1210.png",
      skills: ["SEO Optimization", "Digital Marketing", "Analytics"],
    },
  ];

  const values = [
    {
      title: "Inovasi Berkelanjutan",
      description: "Selalu menggunakan teknologi terdepan dan metodologi terbaru untuk memberikan solusi terbaik.",
      icon: "💡",
    },
    {
      title: "Kualitas Tinggi",
      description: "Komitmen pada standar kualitas tinggi dalam setiap aspek pengembangan dan layanan.",
      icon: "⭐",
    },
    {
      title: "Kolaborasi Terbuka",
      description: "Bekerja sama secara transparan dengan klien dalam setiap tahap pengembangan proyek.",
      icon: "🤝",
    },
    {
      title: "Hasil Terukur",
      description: "Fokus pada deliverable yang dapat diukur dan memberikan dampak nyata bagi bisnis klien.",
      icon: "📈",
    },
  ];

  const achievements = [
    {
      title: "Top Web Development Agency",
      description: "Penghargaan sebagai agency terbaik di kategori web development tahun 2023",
      year: "2023",
    },
    {
      title: "Client Satisfaction Award",
      description: "98% tingkat kepuasan klien berdasarkan survey independen",
      year: "2023",
    },
    {
      title: "Innovation in Technology",
      description: "Pengakuan atas implementasi teknologi inovatif dalam proyek enterprise",
      year: "2024",
    },
    {
      title: "Fast Growing Company",
      description: "Masuk dalam daftar 100 perusahaan teknologi dengan pertumbuhan tercepat",
      year: "2024",
    },
  ];

  const technologies = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "GraphQL", category: "API" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Tentang Zathaya Soft
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Kami adalah tim profesional yang berdedikasi untuk menghadirkan solusi digital 
                terdepan bagi bisnis Indonesia. Dengan pengalaman lebih dari 5 tahun, kami telah 
                membantu puluhan perusahaan mewujudkan transformasi digital mereka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href="/portfolio">Lihat Portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cefa0c78-d429-4867-b04b-7dfb7fd16806.png"
                alt="Modern tech office space with team collaboration and development workstation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visi Kami</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Menjadi partner teknologi terpercaya yang memberdayakan bisnis Indonesia 
                untuk berkembang di era digital melalui solusi inovatif dan berkualitas tinggi.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misi Kami</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Menghadirkan solusi teknologi yang accessible dan affordable untuk semua skala bisnis
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Membangun long-term partnership dengan klien melalui layanan berkualitas tinggi
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Terus berinovasi dengan mengadopsi teknologi terdepan dalam setiap proyek
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600">
              Prinsip yang memandu setiap langkah dan keputusan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-xl text-gray-600">
              Para ahli yang berpengalaman dan berdedikasi untuk kesuksesan proyek Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-6">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Teknologi modern yang kami gunakan untuk mengembangkan solusi terbaik
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <Card key={index} className="border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>
                  <Badge variant="outline" className="text-xs text-blue-600 border-blue-300">
                    {tech.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Penghargaan & Prestasi
            </h2>
            <p className="text-xl text-gray-600">
              Pengakuan atas dedikasi dan kualitas kerja tim kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {achievement.title}
                    </h3>
                    <Badge className="bg-blue-100 text-blue-800">
                      {achievement.year}
                    </Badge>
                  </div>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
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
            Mari Berkolaborasi dengan Tim Terbaik
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan klien-klien kami yang telah merasakan transformasi digital 
            bersama Zathaya Soft. Wujudkan visi teknologi Anda bersama tim profesional kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Mulai Diskusi</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/services">Eksplorasi Layanan</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;