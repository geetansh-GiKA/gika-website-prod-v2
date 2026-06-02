import type { FC } from 'react'
import { Navbar } from '../../Design-System/Components/Navbar/Navbar'
import { Footer } from '../../Design-System/Components/Footer/Footer'
import { JournalHero } from './components/JournalHero'
import { JournalGrid } from './components/JournalGrid'
import { JournalMasthead } from './components/JournalMasthead'

export const Journal: FC = () => (
  <div className="w-full overflow-x-hidden">
    <Navbar />

    <div className="px-0 sm:px-10 md:px-20 lg:px-30 xl:px-60">
      <div className="border-x border-secondary-900/70">
        <JournalMasthead />
        <JournalHero />
        <JournalGrid />
      </div>
    </div>

    <Footer />
  </div>
)
