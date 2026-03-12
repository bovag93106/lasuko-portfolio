export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-12 border-t border-white/5 mt-12">
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-text-muted">
          © {new Date().getFullYear()} LA_SUKO. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-text-muted">
          <span className="opacity-50">Social links coming soon...</span>
        </div>
        
        <div className="text-sm text-text-muted flex gap-4">
        </div>
      </div>
    </footer>
  );
}
