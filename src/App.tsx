// src/App.tsx
import React, { useState } from 'react';
import HeroSection from './components/layout/HeroSection';
import ProjectCard from './components/ui/ProjectCard';
import { projectsData } from './data/projects';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import type { Language } from './i18n/translations';

const PortfolioContent = () => {
  const { language, setLanguage, t } = useLanguage();
  const languages: Language[] = ['es', 'en', 'fr', 'de'];
  
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, itemType: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(itemType);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto">
      
      <nav className="flex flex-col sm:flex-row justify-between items-center py-6 mb-10 border-b border-textMuted/20 gap-4">
        <span className="font-serif font-bold text-xl tracking-wider">MMR.</span>
        
        <div className="flex items-center gap-6 text-sm font-medium text-textMuted">
          <a href="#proyectos" className="hover:text-primary transition-colors">{t('navProjects')}</a>
          <a href="#contacto" className="hover:text-primary transition-colors">{t('navContact')}</a>
          
          <div className="flex gap-3 border-l border-textMuted/30 pl-6 ml-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`uppercase transition-colors ${
                  language === lang ? 'text-primary font-bold scale-110' : 'hover:text-textMain'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        
        <section id="proyectos" className="min-h-screen pt-20 pb-20">
           <h3 className="font-serif text-3xl md:text-4xl font-bold mb-2">{t('projectsTitle')}</h3>
           <p className="text-textMuted mb-12 text-lg">{t('projectsSubtitle')}</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {projectsData.map((project) => (
               <ProjectCard key={project.id} project={project} />
             ))}
           </div>
        </section>
      </main>
      
      <footer id="contacto" className="border-t border-textMuted/20 pt-16 pb-8 mt-12 flex flex-col items-center gap-10">
        
        <div className="text-center">
          <h3 className="font-serif text-2xl font-bold text-textMain mb-6">{t('navContact')}</h3>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            
            {/* Botón Dividido: Correo */}
            <div className="flex items-center border border-textMuted/30 bg-surface rounded-full text-sm hover:border-primary transition-all overflow-hidden group">
              <a href="mailto:mariomoyarodriguez@gmail.com" className="flex items-center gap-2 px-5 py-2.5 group-hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                mariomoyarodriguez@gmail.com
              </a>
              <button 
                onClick={() => handleCopy('mariomoyarodriguez@gmail.com', 'email')}
                className="px-4 py-2.5 border-l border-textMuted/30 hover:bg-textMuted/10 transition-colors"
                title={t('tooltipEmail')}
              >
                {copiedItem === 'email' 
                  ? <svg viewBox="0 0 24 24" width="16" height="16" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  : <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                }
              </button>
            </div>

            <a href="https://linkedin.com/in/tu-perfil-aqui" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-textMuted/30 bg-surface px-5 py-2.5 rounded-full text-sm hover:border-[#0a66c2] hover:text-[#0a66c2] transition-all">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>

            <div className="flex items-center border border-textMuted/30 bg-surface rounded-full text-sm hover:border-[#25D366] transition-all overflow-hidden group">
              <a href="https://wa.me/525653968615" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 group-hover:text-[#25D366] transition-colors">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                +52 56 5396 8615
              </a>
              <button 
                onClick={() => handleCopy('+525653968615', 'phone')}
                className="px-4 py-2.5 border-l border-textMuted/30 hover:bg-textMuted/10 transition-colors text-textMuted"
                title={t('tooltipPhone')}
              >
                {copiedItem === 'phone' 
                  ? <svg viewBox="0 0 24 24" width="16" height="16" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  : <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                }
              </button>
            </div>

          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-textMuted text-xs pt-8 border-t border-textMuted/10">
          <p>{t('footerText')}</p>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-2 cursor-help" title="Lighthouse Score: 100/100">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-green-500 border border-green-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              ))}
            </div>
            
            <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 font-medium">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

export default App;