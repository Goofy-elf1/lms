import { Button } from '@/components/ui/button'
import Companioncard from '@/components/Companioncard'
import Companionslist from '@/components/Companionslist'
import CTA from '@/components/CTA'

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
         color="#a1a0a0ff"
        />
           <Companioncard
          id="456"
          name="CSS 3"
          topic="Web Development"
          subject="Computer Science"
          duration={240}
          color="#a1a0a0ff"
        />
          <Companioncard
          id="789"
          name="JavaScript"
          topic="Web Development"
          subject="Computer Science"
          duration={700}
         color="#a1a0a0ff"
        />
      </section>

      <section className='home-section'>
        <Companionslist/>
        <CTA/>
      </section>
    </main>
  )
}

export default Page