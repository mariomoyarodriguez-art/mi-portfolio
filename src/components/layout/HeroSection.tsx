// src/components/layout/HeroSection.tsx
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = () => {
  const { language, t } = useLanguage();

  const cvHref = language === 'es' ?'/cv_mario_moya_es.pdf' : '/cv_mario_moya_en.pdf';

  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-10 pb-20">
      <div className="max-w-4xl">
        <h2 className="text-primary font-bold tracking-widest text-sm sm:text-base uppercase mb-4">
          {t('heroSubtitle')}
        </h2>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-textMain mb-6 leading-tight">
          {t('heroTitlePart1')} <span className="text-primary">{t('heroTitleAccent')}</span>{t('heroTitlePart2')}
        </h1>
        
        <p className="text-textMuted text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-sans">
          {t('heroDesc')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#proyectos" 
            className="bg-primary text-textMain px-8 py-3 rounded-md font-medium hover:bg-opacity-80 transition-all text-center flex items-center justify-center gap-2"
          >
            {t('btnProjects')}
          </a>
          
          <a 
            href={cvHref} 
            target="_blank"
            rel="noopener noreferrer"
            className="border border-textMuted text-textMain px-8 py-3 rounded-md font-medium hover:border-primary hover:text-primary transition-all text-center flex items-center justify-center gap-2"
          >
            {t('btnCV')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;