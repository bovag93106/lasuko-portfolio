import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './FadeIn';
import { Maximize2, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Team Select',
    image: 'https://i.ibb.co/vvdbvtjF/valley-prison.png',
  },
  {
    id: 2,
    title: 'Snow Design',
    image: 'https://i.ibb.co/HTWq5Hpb/Screenshot-2026-03-10-221910.png',
  },
  {
    id: 3,
    title: 'Player Info Card',
    image: 'https://i.ibb.co/fVQT237N/Screenshot-2026-03-10-221929.png',
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-[1320px] mx-auto">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-[clamp(32px,5vw,64px)] font-medium leading-tight tracking-tight">
            Works <span className="font-serif italic text-accent-warm">showcase</span>
          </h2>
        </div>
      </FadeIn>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="group cursor-pointer"
            >
              <div 
                className="relative overflow-hidden rounded-2xl aspect-video mb-6 bg-white/5"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 bg-accent-warm text-bg-primary px-6 py-3 rounded-full font-semibold">
                    <Maximize2 size={18} /> View Image
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-bg-primary/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-full flex flex-col bg-grain rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="w-full overflow-auto p-4 flex items-center justify-center bg-black/20">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="max-w-full h-auto max-h-[70vh] rounded-xl object-contain shadow-2xl" 
                />
              </div>
              
              <div className="p-6 md:p-8 bg-black/50 backdrop-blur-md border-t border-white/10">
                <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
                <p className="text-text-muted italic flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-warm inline-block"></span>
                  This is still in progress and may not be the final result for all.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
