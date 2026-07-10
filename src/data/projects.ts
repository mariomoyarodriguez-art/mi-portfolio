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
    imageUrl: '/whatsapp.jpg',
    shortDescription: {
      es: 'Plataforma de mensajería empresarial que centraliza la comunicación de negocios mediante mensajería multilingüe y colaboración segura en tiempo real.',
      en: 'Enterprise messaging platform centralizing business communication through multilingual messaging and secure real-time collaboration.',
      fr: 'Plateforme de messagerie d\'entreprise centralisant la communication commerciale via la messagerie multilingue et la collaboration sécurisée en temps réel.',
      de: 'Unternehmens-Messaging-Plattform, die die Geschäftskommunikation durch mehrsprachige Nachrichten und sichere Zusammenarbeit in Echtzeit zentralisiert.'
    },
    features: {
      es: ['Mensajería en tiempo real', 'Traducción de mensajes', 'Compartir multimedia', 'Comunicación en grupo', 'Autenticación segura'],
      en: ['Real-time messaging', 'Messages translation', 'Multimedia sharing','Group communication','Secure authentication'],
      fr: ['Messagerie en temps réel', 'Traduction des messages', 'Partage multimédia', 'Communication de groupe', 'Authentification sécurisée'],
      de: ['Nachrichten in Echtzeit', 'Nachrichtenübersetzung', 'Multimediafreigabe', 'Gruppenkommunikation', 'Sichere Authentifizierung']    },
    techStack: ['React', 'Oracle SQL', 'Node.js', 'DeepL API', 'Polling'],
    githubUrl: 'https://whatsapp-x-core.vercel.app'
  },
  {
    id: 'the-best-chef',
    title: 'Amar-Te',
    imageUrl: '/amar-te.jpg',
    shortDescription: {
      es: 'Plataforma de operaciones para restaurantes que integra Punto de Venta, Inteligencia de Negocios y coordinación de cocina en tiempo real para optimizar los flujos de trabajo diarios.',
      en: 'Restaurant operations platform integrating Point of Sale, Business Intelligence, and real-time kitchen coordination to optimize daily workflows.',
      fr: 'Plateforme d\'exploitation pour restaurants intégrant point de vente, Business Intelligence et coordination de cuisine en temps réel pour optimiser les flux de travail quotidiens.',
      de: 'Plattform für Restaurantbetriebe, die Point of Sale, Business Intelligence und Echtzeit-Küchenkoordination integriert, um tägliche Arbeitsabläufe zu optimieren.'
    },
    features: {
      es: ['Punto de Venta (POS)', 'Gestión de roles de usuario', 'Paneles de Business Intelligence', 'Control de acceso por geocercas', 'Analítica de rendimiento'],
      en: ['Point of Sale (POS)', 'User roles management', 'Business Intelligence dashboards', 'Geofencing access control','Performance analytics'],
      fr: ['Point de vente (POS)', 'Gestion des rôles utilisateur', 'Tableaux de bord Business Intelligence', "Contrôle d'accès par géorepérage", 'Analyse des performances'],
      de: ['Point of Sale (POS)', 'Verwaltung von Benutzerrollen', 'Business-Intelligence-Dashboards', 'Zugangskontrolle per Geofencing', 'Leistungsanalyse'],    },
    techStack: ['React', 'Oracle SQL', 'Node.js', 'WebSockets','Cloudinary API'],
    githubUrl: 'https://sistema-amarte.vercel.app'
  },
  {
    id: 'gutten-kleid',
    title: 'Gutten Kleid',
    imageUrl: '/gutten-kleid.jpg',
    shortDescription: {
      es: 'Plataforma de comercio electrónico de alta fidelidad con pasarela de pagos integrada, gestión de activos multimedia y backend relacional robusto.',
      en: 'E-commerce platform designed to automate retail operations through secure payments, inventory management, and role-based access control.',
      fr: 'Plateforme e-commerce haute fidélité avec passerelle de paiement intégrée, gestion des actifs multimédias et backend relationnel robuste.',
      de: 'E‑Commerce-Plattform, die den Einzelhandelsbetrieb durch sichere Zahlungen, Bestandsverwaltung und rollenbasierte Zugriffskontrolle automatisiert.'
    },
    features: {
      es: ['Pasarela de pagos segura', 'Almacenamiento en la nube', 'Diagramación Entidad-Relación'],
      en: ['Secure online payments', 'Inventory management', 'Role-based access control', 'Order tracking', 'Cloud media storage'],
      fr: ['Passerelle de paiement sécurisée', 'Stockage cloud des actifs', 'Conception Entité-Relation'],
      de: ['Sichere Online-Zahlungen', 'Bestandsverwaltung', 'Rollenbasierte Zugriffskontrolle', 'Bestellverfolgung', 'Medienspeicher in der Cloud'],
    },
    techStack: ['React', 'Oracle SQL', 'Node.js','Stripe API', 'Cloudinary API' ],
    githubUrl: 'https://gutten-kleid-app.vercel.app'
  }
];