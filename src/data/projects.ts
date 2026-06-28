// src/data/projects.ts
import type { Language } from '../i18n/translations';

export interface Project {
  id: string;
  title: string; 
  shortDescription: Record<Language, string>; 
  features: Record<Language, string[]>;      
  techStack: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'whatsapp-x',
    title: 'WhatsApp X',
    shortDescription: {
      es: 'Aplicación de mensajería instantánea con traducción automatizada en tiempo real mediante integraciones API y arquitectura escalable.',
      en: 'Instant messaging application featuring real-time automated translation through API integrations and scalable architecture.',
      fr: 'Application de messagerie instantanée avec traduction automatisée en temps réel via des intégrations d\'API et une architecture évolutive.',
      de: 'Instant-Messaging-Anwendung mit automatisierter Echtzeit-Übersetzung durch API-Integrationen und skalierbare Architektur.'
    },
    features: {
      es: ['Traducción simultánea', 'Canales en tiempo real', 'Cifrado de extremo a extremo'],
      en: ['Simultaneous translation', 'Real-time channels', 'End-to-end encryption'],
      fr: ['Traduction simultanée', 'Canaux en temps réel', 'Chiffrement de bout en bout'],
      de: ['Simultane Übersetzung', 'Echtzeit-Kanäle', 'Ende-zu-Ende-Verschlüsselung']
    },
    techStack: ['React', 'Node.js', 'PostgreSQL', 'DeepL API'],
    githubUrl: 'https://github.com/tu-usuario/whatsapp-x'
  },
  {
    id: 'the-best-chef',
    title: 'Amar-Te',
    shortDescription: {
      es: 'Sistema integral de gestión restaurantera con control de acceso basado en roles, geofencing y persistencia de datos empresarial.',
      en: 'Comprehensive restaurant management system featuring role-based access control, geofencing, and enterprise-grade data persistence.',
      fr: 'Système complet de gestion de restaurant avec contrôle d\'accès basé sur les rôles, géofencing et persistance des données d\'entreprise.',
      de: 'Umfassendes Restaurant-Managementsystem mit rollenbasierter Zugriffskontrolle, Geofencing und Datenpersistenz auf Unternehmensebene.'
    },
    features: {
      es: ['Geolocalización perimetral', 'Roles de usuario', 'Optimización de consultas'],
      en: ['Geofencing control', 'User roles management', 'Query optimization'],
      fr: ['Contrôle de géofencing', 'Gestion des rôles', 'Optimisation des requêtes'],
      de: ['Geofencing-Kontrolle', 'Rollenverwaltung', 'Abfrageoptimierung']
    },
    techStack: ['C#', 'Oracle Database', 'UML Architecture'],
    githubUrl: 'https://sistema-amarte.vercel.app'
  },
  {
    id: 'gutten-kleid',
    title: 'Gutten Kleid',
    shortDescription: {
      es: 'Plataforma de comercio electrónico de alta fidelidad con pasarela de pagos integrada, gestión de activos multimedia y backend relacional robusto.',
      en: 'High-fidelity e-commerce platform with integrated payment gateway, multimedia asset management, and a robust relational backend.',
      fr: 'Plateforme e-commerce haute fidélité avec passerelle de paiement intégrée, gestion des actifs multimédias et backend relationnel robuste.',
      de: 'High-Fidelity-E-Commerce-Plattform mit integriertem Zahlungsgateway, Multimedia-Asset-Management und einem robusten relationalen Backend.'
    },
    features: {
      es: ['Pasarela de pagos segura', 'Almacenamiento en la nube', 'Diagramación Entidad-Relación'],
      en: ['Secure payment gateway', 'Cloud asset storage', 'Entity-Relationship blueprinting'],
      fr: ['Passerelle de paiement sécurisée', 'Stockage cloud des actifs', 'Conception Entité-Relation'],
      de: ['Sicheres Zahlungsgateway', 'Cloud-Asset-Speicherung', 'Entitäts-Beziehungs-Design']
    },
    techStack: ['React', 'Stripe', 'Cloudinary', 'Oracle SQL'],
    githubUrl: 'https://gutten-kleid-app.vercel.app'
  }
];