import { Button } from '@/components/ui/button'
import CompanionCard from "@/components/CompanionCard"
import Companionslist from '@/components/Companionslist'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1>
        Popular Companions
      </h1>
      <section className='home-section'>
        <CompanionCard
          id="123"
          name="HTML 5"
          topic="Web Development"
          subject="coding"
          duration={60}
         color="#ffeb85ff"
        />
           <CompanionCard
          id="456"
          name="CSS 3"
          topic="Web Development"
          subject="coding"
          duration={240}
          color="#7ee4f4ff"
        />
          <CompanionCard
          id="789"
          name="JavaScript"
          topic="Web Development"
          subject="coding"
          duration={700}
         color="#d99cffff"
        />
      </section>

      <section className='home-section'>
        <Companionslist
          title="Your Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page