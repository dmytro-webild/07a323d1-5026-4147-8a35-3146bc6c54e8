"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Activity, Mic, ShieldCheck, Target, Wifi, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Anasayfa",
          id: "hero",
        },
        {
          name: "Proje",
          id: "about",
        },
        {
          name: "Teknoloji",
          id: "features",
        },
        {
          name: "İletişim",
          id: "contact",
        },
      ]}
      brandName="KurtarmaBotu"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "plain",
      }}
      title="Afet Bölgelerinde Hayat Kurtaran Otonom Teknoloji"
      description="Enkaz altında kalanları daha hızlı tespit eden, ileri nesil termal ve ses algılama özellikli arama-kurtarma robotumuzla tanışın."
      tag="Teknofest Arama-Kurtarma"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/smart-robotic-farmers-concept-robot-farmers-agriculture-technology-farm-automation_35913-2316.jpg",
          imageAlt: "futuristic search and rescue robot",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/natural-background-water-pool-texture-close-up_169016-22523.jpg",
          imageAlt: "robot sensor detail",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-hydraulic-elements_23-2149333330.jpg",
          imageAlt: "3d rendering of hydraulic elements",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-biorobots-concept_23-2149524403.jpg",
          imageAlt: "3d rendering of biorobots concept",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-hydraulic-elements_23-2149333333.jpg",
          imageAlt: "3d rendering of hydraulic elements",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Teknofest Prototip Onaylı"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Proje Amacı"
      title="Hızlı Tespit ve Güvenli Müdahale"
      description="Amacımız, enkaz altındaki kişilerin yerini dar alanlara girmeden, yüksek hassasiyetli sensörlerle hızlı ve güvenli bir şekilde tespit etmektir."
      subdescription="Zamanın kritik olduğu afet anlarında, insan hatasını minimize eden ve kurtarma ekiplerinin riskini azaltan akıllı bir çözüm."
      imageSrc="http://img.b2bpic.net/free-photo/scene-with-futuristic-robot-used-construction-industry_23-2151329470.jpg"
      imageAlt="search and rescue robot operation"
      mediaAnimation="slide-up"
      icon={Target}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: Activity,
          title: "Termal Algılama",
          description: "Canlıların ısı izlerini en zor koşullarda dahi tespit eder.",
        },
        {
          icon: Mic,
          title: "Ses Algılama",
          description: "Enkaz altındaki yardım çağrılarını dijital filtrelerle ayrıştırır.",
        },
        {
          icon: ShieldCheck,
          title: "İnsan Güvenliği",
          description: "Ekip üyelerini riskli alanlardan uzak tutarak güvenliği sağlar.",
        },
        {
          icon: Wifi,
          title: "Gelişmiş İletişim",
          description: "Enkazın derinliklerinden kesintisiz veri aktarımı.",
        },
        {
          icon: Zap,
          title: "Yüksek Enerji Verimliliği",
          description: "Uzun süreli operasyonlar için optimize edilmiş pil yönetimi.",
        },
      ]}
      title="Neden Arama-Kurtarma Robotu?"
      description="Modern afet yönetimi için geliştirdiğimiz teknolojiler."
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "%60",
          title: "Daha Hızlı Keşif",
          items: [
            "Manuel sürece göre",
            "Enkaz arama hızı",
          ],
        },
        {
          id: "2",
          value: "%100",
          title: "Personel Güvenliği",
          items: [
            "Risk azaltımı",
            "Saha güvenliği",
          ],
        },
        {
          id: "3",
          value: "24/7",
          title: "Operasyon Kapasitesi",
          items: [
            "Kesintisiz görev süresi",
            "Aktif çalışma",
          ],
        },
      ]}
      title="Proje Verimliliği"
      description="Robotik destek ile gelen temel iyileştirmeler."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Robot nasıl çalışıyor?",
          content: "Enkaz yüzeyine bırakılan robot, kablosuz bağlantı ile termal verileri merkeze iletir.",
        },
        {
          id: "q2",
          title: "Pil ömrü ne kadar?",
          content: "Kesintisiz 8 saatlik aktif kurtarma operasyon süresine sahiptir.",
        },
        {
          id: "q3",
          title: "Teknofest hedefleri neler?",
          content: "Afet teknolojileri kategorisinde en yenilikçi robot olarak ödül hedeflemekteyiz.",
        },
      ]}
      title="Sıkça Sorulan Sorular"
      description="Projemiz hakkında teknik detaylar."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated-grid",
      }}
      text="Proje geliştirme sürecimize destek vermek veya daha fazla bilgi almak için bize ulaşın."
      buttons={[
        {
          text: "İletişime Geç",
          href: "mailto:info@teknofestbot.tr",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="KurtarmaBotu"
      copyrightText="© 2024 Teknofest Arama-Kurtarma Takımı"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
