// src/components/ui/ProjectCard.tsx
import React from 'react';
import type { Project } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-surface border border-textMuted/20 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full group">
      
      {/* Contenedor de Imagen / Bloque de Identificación Superior */}
      <div className="h-48 bg-[#0a0c10] border-b border-textMuted/20 flex items-center justify-center relative overflow-hidden">
        <span className="text-textMuted/40 font-serif text-lg tracking-widest uppercase z-0 group-hover:scale-110 transition-transform duration-500 select-none">
          {project.title}
        </span>
        
        {/* Capa superpuesta oscura interactiva (Hover) */}
        <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="border border-textMuted text-textMain px-4 py-2 rounded text-sm hover:border-primary hover:text-primary transition-colors"
            >
              {t('cardCode')}
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="bg-primary text-textMain px-4 py-2 rounded text-sm hover:bg-opacity-80 transition-colors font-medium"
            >
              {t('cardDemo')}
            </a>
          )}
        </div>
      </div>

      {/* Cuerpo Técnico de la Tarjeta */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-bold mb-2 text-textMain">{project.title}</h3>
        
        {/* Descripción localizada dinámicamente */}
        <p className="text-textMuted text-sm mb-6 leading-relaxed flex-grow">
          {project.shortDescription[language]}
        </p>

        {/* Viñetas de Características Clave localizadas */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">
            {t('cardFeatures')}
          </h4>
          <ul className="space-y-2">
            {project.features[language].map((feature, idx) => (
              <li key={idx} className="text-textMuted text-sm flex items-start">
                <span className="text-primary mr-2 font-bold">▹</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Píldoras de Tecnologías Universales */}
        <div className="mt-auto pt-4 border-t border-textMuted/10">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="bg-background border border-textMuted/30 text-textMuted text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectCard;