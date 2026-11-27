import { useEffect, useState } from 'react';
import { Masthead } from './components/Masthead';
import { LeadStory } from './components/LeadStory';
import { FeaturedProjects, type StoryModalTab } from './components/FeaturedProjects';
import { RightRail } from './components/RightRail';
import { ClassifiedsFooter } from './components/ClassifiedsFooter';
import { StoryDrawer } from './components/StoryDrawer';
import type { ProjectStory, NewsBrief } from './data/editorialData';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      return window.localStorage.getItem('broadsheet-edition') === 'evening';
    } catch {
      return false;
    }
  });

  const [selectedProject, setSelectedProject] = useState<ProjectStory | null>(null);
  const [drawerTab, setDrawerTab] = useState<StoryModalTab>('dispatch');
  const [selectedBrief, setSelectedBrief] = useState<NewsBrief | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    try {
      window.localStorage.setItem('broadsheet-edition', isDark ? 'evening' : 'morning');
    } catch {
      // Ignore storage access errors in restricted frames
    }
  }, [isDark]);

  const handleOpenProject = (project: ProjectStory, initialTab: StoryModalTab = 'dispatch') => {
    setSelectedBrief(null);
    setSelectedProject(project);
    setDrawerTab(initialTab);
  };

  const handleOpenBrief = (brief: NewsBrief) => {
    setSelectedProject(null);
    setSelectedBrief(brief);
  };

  const handleCloseDrawer = () => {
    setSelectedProject(null);
    setSelectedBrief(null);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#141413] dark:bg-[#141413] dark:text-[#F7F5F0] transition-colors duration-200">
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Broadsheet Masthead */}
        <Masthead isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />

        {/* 12-Column Responsive Broadsheet Grid (8-col Main Editorial Zone + 4-col Right Rail) */}
        <main className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8">
            <LeadStory />
            <FeaturedProjects onOpenProject={handleOpenProject} />
          </div>

          <div className="lg:col-span-4">
            <RightRail onOpenBrief={handleOpenBrief} />
          </div>
        </main>

        {/* The Classifieds Footer */}
        <ClassifiedsFooter />
      </div>

      {/* Expandable Story & Dispatch Drawer */}
      <StoryDrawer
        project={selectedProject}
        initialTab={drawerTab}
        brief={selectedBrief}
        onClose={handleCloseDrawer}
      />
    </div>
  );
}
