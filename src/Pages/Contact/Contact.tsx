import type { FC } from 'react'
import { Navbar } from '../../Design-System/Components/Navbar/Navbar'
import { Footer } from '../../Design-System/Components/Footer/Footer'
import { ContactSidebar } from './components/ContactSidebar'
import { ContactForm } from './components/ContactForm'

export const Contact: FC = () => (
  <div className="w-full overflow-x-hidden">
    <Navbar />

    <main className="px-0 sm:px-10 md:px-20 lg:px-30 xl:px-60 mt-24">
      <div className="border border-secondary-900/70 mb-24 ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ContactSidebar />
          <ContactForm />
        </div>
      </div>
    </main>

    <Footer />
  </div>
)
