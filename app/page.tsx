import { Hero } from "@/app/_sections/hero"
import { Features } from "@/app/_sections/features/features-hero"
import { HowItWorks } from "@/app/_sections/features/features-list"
import { Stats } from "@/app/_sections/companies"
import { FAQ } from "@/app/_sections/faq"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <FAQ />
      </main>
    </div>
  )
}
