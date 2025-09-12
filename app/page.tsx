import { Button } from '@/components/ui/button'
import Companioncard from '@/components/Companioncard'
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
        <Companioncard
          id="123"
          name="HTML 5"
          topic="Web Development"
          subject="Computer Science"
          duration={60}
         color="#ffeb85ff"
        />
           <Companioncard
          id="456"
          name="CSS 3"
          topic="Web Development"
          subject="Computer Science"
          duration={240}
          color="#7ee4f4ff"
        />
          <Companioncard
          id="789"
          name="JavaScript"
          topic="Web Development"
          subject="Computer Science"
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