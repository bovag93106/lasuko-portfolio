import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './FadeIn';
import { Maximize2, X } from 'lucide-react';

type Project = {
  id: string | number;
  title: string;
  image: string;
  description?: string;
  isIcon?: boolean;
};

const projects: Project[] = [
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

const crypticImages: Project[] = [
  { id: 'shop', title: 'Shop GUI', image: 'https://i.ibb.co/DDFkHBv2/Shop.png', isIcon: true, description: 'This GUI is fully complete and optimized for seamless player interaction.' },
  { id: 'kill-all', title: 'Kill All GUI', image: 'https://i.ibb.co/8nqy8gqx/Kill-All.png', isIcon: true, description: 'This GUI is fully complete. Clean, minimal, and highly functional.' },
  { id: 'gear', title: 'Gear GUI', image: 'https://i.ibb.co/YBB6j98W/Gear.png', isIcon: true, description: 'This GUI is fully complete. Designed with a focus on quick inventory management.' },
  { id: 'troll', title: 'Troll GUI', image: 'https://i.ibb.co/G31CCnkS/TROLL.png', isIcon: true, description: 'This GUI is fully complete. A fun, interactive panel with custom iconography.' },
  { id: 'trails', title: 'Trails GUI', image: 'https://i.ibb.co/q3BPdtFp/Trails.png', isIcon: true, description: 'This GUI is fully complete. Smooth visual feedback for equipping custom trails.' },
  { id: 'pets', title: 'Pets GUI', image: 'https://i.ibb.co/q3KTg2tF/Pets.png', isIcon: true, description: 'This GUI is fully complete. Cute, compact, and perfectly scaled for the pet system.' },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCrypticHovered, setIsCrypticHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="work" className="py-16 md:py-24 px-4 md:px-12 max-w-[1320px] mx-auto">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-[clamp(32px,5vw,64px)] font-medium leading-tight tracking-tight">
            Works <span className="font-serif italic text-accent-warm">showcase</span>
          </h2>
        </div>
      </FadeIn>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
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

      {/* Cryptic Work Section */}
      <FadeIn>
        <div className="mt-24 mb-12 text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] font-medium leading-tight tracking-tight">
            My work with <span className="font-serif italic text-accent-cyan">Cryptic</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            A collection of custom, fully complete GUI icons and interfaces designed specifically for the Cryptic project. {isMobile ? 'Tap' : 'Hover'} to fan out the stack.
          </p>
        </div>

        <div 
          className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center cursor-pointer"
          onMouseEnter={() => !isMobile && setIsCrypticHovered(true)}
          onMouseLeave={() => !isMobile && setIsCrypticHovered(false)}
          onClick={() => isMobile && setIsCrypticHovered(!isCrypticHovered)}
        >
          {crypticImages.map((item, index) => {
            // Stacked state (messy pile)
            const stackedX = (index % 3 - 1) * 10;
            const stackedY = (index % 2 - 0.5) * 10;
            const stackedRotate = (index % 3 - 1) * 8;
            
            // Spread state (fanned out) - Responsive values
            const spreadMultiplierX = isMobile ? 42 : 130;
            const spreadMultiplierY = isMobile ? 12 : 25;
            const spreadOffsetY = isMobile ? -15 : -40;
            const spreadMultiplierRotate = isMobile ? 8 : 12;

            const spreadX = (index - 2.5) * spreadMultiplierX; 
            const spreadY = Math.abs(index - 2.5) * spreadMultiplierY + spreadOffsetY; 
            const spreadRotate = (index - 2.5) * spreadMultiplierRotate;
            
            return (
              <motion.div
                key={item.id}
                animate={{
                  x: isCrypticHovered ? spreadX : stackedX,
                  y: isCrypticHovered ? spreadY : stackedY,
                  rotate: isCrypticHovered ? spreadRotate : stackedRotate,
                  scale: isCrypticHovered ? 1.05 : 1,
                }}
                whileHover={{ 
                  scale: 1.2, 
                  zIndex: 50,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.8 }}
                className="absolute w-28 h-28 md:w-48 md:h-48 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl flex items-center justify-center hover:border-accent-cyan/50 hover:shadow-accent-cyan/20 transition-colors duration-300"
                style={{ zIndex: index }}
                onClick={(e) => {
                  if (isMobile && !isCrypticHovered) {
                    // Let the container handle the spread toggle
                    return;
                  }
                  e.stopPropagation();
                  setSelectedProject(item);
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-14 h-14 md:w-24 md:h-24 object-contain drop-shadow-2xl" 
                  referrerPolicy="no-referrer"
                />
                
                {/* View overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center">
                  <Maximize2 size={24} className="text-white drop-shadow-lg" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </FadeIn>

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
              
              <div className={`w-full overflow-auto p-4 flex items-center justify-center bg-black/20 ${selectedProject.isIcon ? 'min-h-[40vh]' : ''}`}>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className={`max-w-full h-auto max-h-[70vh] rounded-xl shadow-2xl ${selectedProject.isIcon ? 'object-contain w-48 h-48 md:w-64 md:h-64' : 'object-contain'}`} 
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-6 md:p-8 bg-black/50 backdrop-blur-md border-t border-white/10">
                <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
                <p className="text-text-muted italic flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full inline-block ${selectedProject.isIcon ? 'bg-accent-cyan' : 'bg-accent-warm'}`}></span>
                  {selectedProject.description || 'This is still in progress and may not be the final result for all.'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
