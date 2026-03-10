import { FadeIn } from './FadeIn';

export function About() {
  const tools = [
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
    { name: 'Roblox Studio', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjMDBBMkZGIiBkPSJNMTExLjQgMEwwIDQwMC42IDQwMC42IDUxMiA1MTIgMTExLjQgMTExLjQgMHpNMzIyIDI4MC40bC05MC42IDI1LjItMjUuMi05MC42IDkwLjYtMjUuMiAyNS4yIDkwLjZ6Ii8+PC9zdmc+' },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-[1320px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <FadeIn>
            <h2 className="text-[clamp(32px,5vw,64px)] font-medium leading-tight tracking-tight mb-8">
              Behind the <span className="font-serif italic text-accent-warm">pixels</span>
            </h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                As an emerging UI/UX Developer, I bring a fresh, modern perspective to every project I undertake. I specialize in crafting custom interfaces that enhance player engagement and navigation, ensuring every design is both beautiful and intuitive. My workflow leverages Photoshop for bespoke asset creation and Roblox Studio for structured, scalable UI development. Whether it’s HUD design, inventory systems, or main menus, I am dedicated to delivering professional-grade visuals that elevate the player experience and help your game stand out.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="space-y-12">
          <FadeIn delay={0.4}>
            <h3 className="text-xl font-semibold mb-6 text-text-soft">Toolkit</h3>
            <div className="flex flex-wrap gap-6">
              {tools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center p-4 transition-transform duration-300 group-hover:-translate-y-2">
                    <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain transition-all duration-300" />
                  </div>
                  <span className="text-xs text-text-muted font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
