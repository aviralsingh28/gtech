import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { servicesData } from "@/data/servicesData";
import { createPageMetadata, pageUrl, truncateDescription } from "@/lib/seo";


interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return createPageMetadata({
      title: "Service Not Found",
      description: "The requested service could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: service.title,
    description: truncateDescription(service.shortDescription),
    path: `/services/${service.slug}`,
    keywords: [
      service.title,
      ...service.technologies.slice(0, 6),
      "GTech Soft services",
    ],
  });
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceUrl = pageUrl(`/services/${service.slug}`);

  return (
    <main>
      <ServiceJsonLd
        name={service.title}
        description={truncateDescription(service.shortDescription, 300)}
        url={serviceUrl}
      />
      <Navbar />
      <ServiceDetailContent service={service} />
      <Footer />
    </main>
  );
}

const serviceCodeSnippets: Record<string, { filename: string; language: string; code: string }> = {
  "software-development": {
    filename: "service.ts",
    language: "typescript",
    code: `// Custom Software Solution
interface Service<T> {
  id: string;
  config: T;
  deploy(): Promise<boolean>;
}

export class CustomApp implements Service<Config> {
  async deploy() {
    console.log("App deployed successfully.");
    return true;
  }
}`
  },
  "erp-solutions": {
    filename: "erp-sync.py",
    language: "python",
    code: `# ERP Integrator & Flow
class ERPConnector:
    def sync_inventory(self, payload):
        # Unify finance & logistics data
        for item in payload:
            db.update(item.id, qty=item.quantity)
        return {"status": "SUCCESS", "records": len(payload)}`
  },
  "cyber-security": {
    filename: "auth-guard.go",
    language: "go",
    code: `// SIEM & Identity Shield
package security

func ValidateToken(token string) bool {
    claims, err := parseJWT(token)
    if err != nil || !claims.Valid() {
        LogThreatIncident(token, "invalid_jwt")
        return false
    }
    return true
}`
  },
  "mobile-web-applications": {
    filename: "app-view.tsx",
    language: "typescript",
    code: `// Responsive Mobile Layout
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Welcome to GTechSoft App</Text>
    </View>
  );
}`
  },
  "cloud-solutions": {
    filename: "infra.tf",
    language: "hcl",
    code: `# Infrastructure as Code
resource "aws_eks_cluster" "prod" {
  name     = "gtech-production-cluster"
  role_arn = aws_iam_role.cluster.arn

  vpc_config {
    subnet_ids = [aws_subnet.p1.id, aws_subnet.p2.id]
  }
}`
  },
  "iot-development": {
    filename: "edge-controller.cpp",
    language: "cpp",
    code: `// IoT Real-Time Telemetry
#include <MQTT.h>

void loop() {
  float temp = readSensor();
  if (temp > THRESHOLD) {
    mqttClient.publish("/telemetry/alerts", "{'temp': temp}");
    triggerActuator(HIGH);
  }
  delay(1000);
}`
  },
  "ui-ux-design": {
    filename: "tokens.json",
    language: "json",
    code: `{
  "global": {
    "colors": {
      "primary": "#f5a623",
      "amber": "#f5a623",
      "surface": "#fbfaf9"
    },
    "typography": {
      "fontFamily": "Outfit, Inter",
      "borderRadius": "16px"
    }
  }
}`
  }
};

function FloatingIcon({ name }: { name: string }) {
  const style = { stroke: "#f5a623", strokeWidth: 2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", width: "24px", height: "24px" } as const;
  switch (name) {
    case "code":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <path d="M18 10h-.7c-.2-1.2-1.1-2.2-2.3-2.6-1.2-.4-2.6 0-3.3 1C11 7.4 9.4 7 8 7.6c-1.4.6-2.3 2.1-2 3.6A3.9 3.9 0 006 19h12a3.9 3.9 0 000-7.8z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case "integration":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <polyline points="16 3 21 8 16 13" />
          <line x1="21" y1="8" x2="9" y2="8" />
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        </svg>
      );
    case "lock":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case "uiux":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12s4.48 10 12 10z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "uptime":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case "cost":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "iot":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="15" x2="23" y2="15" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
  }
}

function ProcessIcon({ name }: { name: string }) {
  const style = { stroke: "#f5a623", strokeWidth: 2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", width: "26px", height: "26px" } as const;
  switch (name) {
    case "requirements":
    case "discovery":
    case "research":
    case "business":
    case "audit":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case "architecture":
    case "wireframe":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
          <path d="M12 6V18" />
          <path d="M6 12H18" />
          <circle cx="12" cy="12" r="3" style={{ fill: "#f5a623" }} />
        </svg>
      );
    case "development":
    case "firmware":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case "testing":
    case "pentest":
    case "security":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <polyline points="9 14 11 16 15 12" />
        </svg>
      );
    case "deployment":
    case "publish":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <path d="M18 10h-.7c-.2-1.2-1.1-2.2-2.3-2.6-1.2-.4-2.6 0-3.3 1C11 7.4 9.4 7 8 7.6c-1.4.6-2.3 2.1-2 3.6A3.9 3.9 0 006 19h12a3.9 3.9 0 000-7.8z" />
          <polyline points="12 12 12 16" />
          <polyline points="10 14 12 12 14 14" />
        </svg>
      );
    case "uiux":
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12s4.48 10 12 10z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "support":
    case "training":
    case "telemetry":
    case "handover":
    default:
      return (
        <svg viewBox="0 0 24 24" style={style}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
  }
}

function ServiceDetailContent({ service }: { service: (typeof servicesData)[0] }) {
  const codeSnippet = serviceCodeSnippets[service.slug] || serviceCodeSnippets["software-development"];

  const parseDescription = (text: string) => {
    const parts = text.split(/\*\*([^*]+)\*\*/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} style={{ color: "#f5a623", fontWeight: 700 }}>{part}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      <ScrollToTop />
      <section style={{ background: "#fff", minHeight: "calc(100vh - 100px)" }}>
      <style>{`
        .service-detail-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(60px, 10vw, 100px) clamp(20px, 5vw, 60px);
        }
        @media (max-width: 767px) {
          .service-detail-container {
            padding-top: clamp(80px, 15vw, 120px);
          }
        }
        .service-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 80px;
        }
        @media (min-width: 768px) {
          .service-header {
            grid-template-columns: 1fr 1fr;
            align-items: center;
          }
        }
        .service-number {
          font-size: clamp(3.5rem, 18vw, 7.5rem);
          font-weight: 700;
          color: var(--amber, #f5a623);
          line-height: 1;
          font-family: 'Outfit', sans-serif;
          padding-top: 20px;
        }
        @media (max-width: 767px) {
          .service-number {
            padding-top: 40px;
          }
        }
        .service-header-content h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          color: #1a1a1a;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 24px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .service-header-content p {
          font-size: 16px;
          color: #5a5a5a;
          line-height: 1.8;
          font-family: 'Outfit', sans-serif;
        }
        .section-divider {
          height: 1px;
          background: var(--border, #e0e0e0);
          margin: clamp(40px, 8vw, 80px) 0;
        }
        .description-section {
          margin-bottom: clamp(40px, 8vw, 80px);
        }
        @media (max-width: 767px) {
          .service-header { margin-bottom: 48px; gap: 24px; }
          .feature-card { padding: 20px; }
          .benefits-section { margin-top: 40px; }
        }
        .description-section h2 {
          font-size: 28px;
          font-weight: 500;
          color: #1a1a1a;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 24px;
        }
        .description-text {
          font-size: 16px;
          color: #5a5a5a;
          line-height: 1.8;
          font-family: 'Outfit', sans-serif;
          white-space: pre-wrap;
        }
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 32px;
        }
        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .feature-card {
          background: var(--surface, #fbfaf9);
          padding: 28px;
          border-radius: 16px;
          border-left: 4px solid #f5a623;
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          background: #f5f5f5;
          transform: translateX(4px);
        }
        .feature-card strong {
          color: #111;
          font-family: 'Outfit', sans-serif;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }
        .tech-tag {
          background: #f0f0f0;
          color: #111;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-family: 'Outfit', sans-serif;
          transition: all 0.3s ease;
        }
        .tech-tag:hover {
          background: #f5a623;
          color: #fff;
        }
        .benefits-section {
          background: var(--surface, #fbfaf9);
          padding: clamp(40px, 5vw, 60px);
          border-radius: 24px;
          margin-top: 60px;
        }
        .benefits-section h2 {
          font-size: 28px;
          font-weight: 500;
          color: #1a1a1a;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 40px;
        }
        .benefits-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .benefits-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .benefit-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .benefit-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          background: #f5a623;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 4px;
        }
        .benefit-icon svg {
          width: 12px;
          height: 12px;
          stroke: white;
        }
        .benefit-text {
          color: #5a5a5a;
          line-height: 1.6;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
        }

        /* Redesigned Overview Layout Grid */
        .overview-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }
        @media (min-width: 992px) {
          .overview-layout-grid {
            grid-template-columns: 1.05fr 0.95fr;
          }
        }
        
        .overview-accent-bar {
          width: 48px;
          height: 4px;
          background: #F5A623;
          margin-bottom: 16px;
        }
        
        .overview-left-col h2 {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          color: #1a1a1a;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 24px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        
        .overview-left-col p {
          font-size: 15.5px;
          color: #5a5a5a;
          line-height: 1.85;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 20px;
        }
        .overview-left-col p:last-child {
          margin-bottom: 0;
        }

        .visual-frame-container {
          position: relative;
          padding: 20px;
        }
        
        .backdrop-dots {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 120px;
          height: 120px;
          background-image: radial-gradient(#f5a623 1.5px, transparent 1.5px);
          background-size: 10px 10px;
          opacity: 0.2;
          z-index: 0;
        }
        
        .main-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
          aspect-ratio: 1.1 / 1;
          z-index: 1;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          padding: 14px 18px;
          border-radius: 14px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .floating-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 30px rgba(37, 99, 235, 0.1);
          background: rgba(255, 255, 255, 0.98);
        }
        
        .floating-card-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .floating-card-text h4 {
          font-size: 13.5px;
          font-weight: 700;
          color: #111;
          margin: 0;
          font-family: 'Outfit', sans-serif;
        }
        
        .floating-card-text p {
          font-size: 11px;
          color: #64748b;
          margin: 0;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
        }

        .card-top-left {
          top: 8%;
          left: -8%;
        }
        .card-top-right {
          top: 30%;
          right: -8%;
        }
        .card-bottom-right {
          bottom: 22%;
          right: -6%;
        }

        .floating-code-editor {
          position: absolute;
          bottom: -5%;
          left: -8%;
          width: 270px;
          background: rgba(15, 23, 42, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);
          overflow: hidden;
          font-family: monospace;
          z-index: 11;
          transition: all 0.3s ease;
        }
        .floating-code-editor:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.3);
        }
        
        .code-editor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(30, 41, 59, 0.6);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        
        .mac-dots {
          display: flex;
          gap: 6px;
        }
        .mac-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .mac-dot.red { background: #ef4444; }
        .mac-dot.yellow { background: #eab308; }
        .mac-dot.green { background: #22c55e; }
        
        .code-editor-filename {
          font-size: 11px;
          color: #94a3b8;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
        }
        
        .code-editor-body {
          padding: 12px;
          font-size: 10px;
          color: #cbd5e1;
          line-height: 1.45;
          text-align: left;
          overflow-x: auto;
          white-space: pre;
        }
        
        .process-title-container {
          margin-top: 60px;
          margin-bottom: 36px;
        }
        
        .process-flow-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          position: relative;
        }
        @media (min-width: 640px) {
          .process-flow-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 992px) {
          .process-flow-row {
            grid-template-columns: repeat(6, 1fr);
            gap: 16px;
          }
        }
        
        .process-flow-step {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          background: #fbfaf9;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #f1f1f1;
          transition: all 0.3s ease;
        }
        .process-flow-step:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(37, 99, 235, 0.05);
          border-color: #dbeafe;
          background: #fff;
        }
        
        .process-step-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        .process-flow-step:hover .process-step-icon-wrapper {
          background: #eff6ff;
          border-color: #bfdbfe;
        }
        
        .process-step-title {
          font-size: 14px;
          font-weight: 700;
          color: #111;
          margin-bottom: 8px;
          font-family: 'Outfit', sans-serif;
          line-height: 1.35;
        }
        
        .process-step-desc {
          font-size: 12.5px;
          color: #5a5a5a;
          line-height: 1.5;
          font-family: 'Outfit', sans-serif;
        }
        
        .process-connector {
          display: none;
          position: absolute;
          top: 36px;
          right: -16px;
          width: 16px;
          height: 16px;
          z-index: 5;
          opacity: 0.4;
          transform: translateY(-50%);
        }
        
        @media (min-width: 992px) {
          .process-connector {
            display: block;
          }
        }
        
        @media (max-width: 1200px) {
          .floating-card {
            padding: 8px 12px;
            gap: 8px;
          }
          .floating-card-icon-wrapper {
            width: 32px;
            height: 32px;
          }
          .floating-card-text h4 {
            font-size: 12px;
          }
          .floating-card-text p {
            font-size: 10px;
          }
          .floating-code-editor {
            width: 220px;
            left: -4%;
            bottom: -2%;
          }
        }
        
        @media (max-width: 991px) {
          .floating-card {
            position: static;
            transform: none !important;
            box-shadow: none;
            border: 1px solid #f0f0f0;
            background: #fbfaf9;
            margin-top: 12px;
          }
          .floating-code-editor {
            display: none;
          }
          .main-image-wrapper {
            aspect-ratio: 16 / 10;
          }
          .visual-frame-container {
            padding: 0;
          }
          .backdrop-dots {
            display: none;
          }
        }
      `}</style>

      <div className="service-detail-container">
        {/* Header with number and title */}
        <div className="service-header">
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div className="service-number">{service.num}</div>
          </div>
          <div className="service-header-content">
            <h1>{service.title}</h1>
            <p>{service.shortDescription}</p>
          </div>
        </div>

        <div className="section-divider" />

        {/* Overview Redesigned 2-Column Section */}
        <div className="overview-layout-grid">
          <div className="overview-left-col">
            <div className="overview-accent-bar" />
            <h2>Overview</h2>
            {service.longDescription.split("\n\n").map((para, i) => (
              <p key={i}>{parseDescription(para)}</p>
            ))}
          </div>
          
          <div className="visual-frame-container">
            <div className="backdrop-dots" aria-hidden />
            <div className="main-image-wrapper">
              <Image 
                src="/images/Services/overview_team.png" 
                alt={`${service.title} team collaboration`} 
                fill 
                sizes="(max-width: 991px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            
            {/* Desktop Absolute Floating Cards */}
            <div className="hidden lg:block">
              {service.overviewCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className={`floating-card ${
                    idx === 0 ? "card-top-left" : idx === 1 ? "card-top-right" : "card-bottom-right"
                  }`}
                >
                  <div className="floating-card-icon-wrapper">
                    <FloatingIcon name={card.icon} />
                  </div>
                  <div className="floating-card-text">
                    <h4>{card.title}</h4>
                    <p>{card.subtitle}</p>
                  </div>
                </div>
              ))}
              
              {/* Floating Code Editor */}
              {codeSnippet && (
                <div className="floating-code-editor">
                  <div className="code-editor-header">
                    <div className="mac-dots">
                      <span className="mac-dot red" />
                      <span className="mac-dot yellow" />
                      <span className="mac-dot green" />
                    </div>
                    <span className="code-editor-filename">{codeSnippet.filename}</span>
                  </div>
                  <div className="code-editor-body">
                    <code>{codeSnippet.code}</code>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Static Benefit/Feature list */}
        <div className="block lg:hidden" style={{ marginBottom: "60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
            {service.overviewCards.map((card, idx) => (
              <div 
                key={idx} 
                style={{
                  background: "#fbfaf9",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  border: "1px solid #f1f1f1",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}
              >
                <div className="floating-card-icon-wrapper">
                  <FloatingIcon name={card.icon} />
                </div>
                <div className="floating-card-text">
                  <h4 style={{ margin: 0, fontWeight: 700, fontSize: "13.5px", color: "#111" }}>{card.title}</h4>
                  <p style={{ margin: 0, fontSize: "11px", color: "#64748b", fontWeight: 500 }}>{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Process Roadmap */}
        <div className="process-title-container">
          <div className="overview-accent-bar" style={{ background: "var(--amber, #f5a623)" }} />
          <h2 style={{ fontSize: "28px", fontWeight: 500, color: "#1a1a1a", fontFamily: "'Outfit', sans-serif" }}>
            Our Delivery Process
          </h2>
        </div>
        
        <div className="process-flow-row" style={{ marginBottom: "80px" }}>
          {service.process.map((step, idx) => (
            <div key={idx} className="process-flow-step">
              <div className="process-step-icon-wrapper">
                <ProcessIcon name={step.icon} />
              </div>
              <h3 className="process-step-title">
                {idx + 1}. {step.title}
              </h3>
              <p className="process-step-desc">{step.description}</p>
              
              {idx < service.process.length - 1 && (
                <div className="process-connector" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" style={{ width: "16px", height: "16px", stroke: "#f5a623", strokeWidth: 2 }}>
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="section-divider" />

        {/* Key Features */}
        <div className="description-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            {service.keyFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <p>✓ {feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider" />

        {/* Technologies */}
        <div className="description-section">
          <h2>Technologies We Use</h2>
          <div className="tech-stack">
            {service.technologies.map((tech, index) => (
              <div key={index} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2>Why Choose Our {service.title} Services?</h2>
          <div className="benefits-list">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="benefit-text">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
