import { Testimonial } from "./Testimonial"
import emilyPhoto from '../assets/image-emily.jpg'
import ThomasPhoto from '../assets/image-thomas.jpg'
import JenniePhoto from '../assets/image-jennie.jpg'


export const TestimonialContainer = () => {
  return (
    <section className="bg-white pt-16">
        <h2 className="text-center uppercase font-Fraunces mb-16 text-Grayish-blue">Client testimonial</h2>
        <div className="lg:flex lg:w-[1000px] lg:mx-auto xl:w-[1110px] ">
            <Testimonial
            img={emilyPhoto}
            testimonial='We put our trust in Sunnyside and they delivered, marking sure our needs were met and deadlines were aleways hit.'
            name='Emily R.'
            position='Marketing Director'
            />
             <Testimonial
            img={ThomasPhoto}
            testimonial='Sunnysides,s enthusiasm coupled with their keen interest in our brand,s success made it a satisfying and enjoyable experience..'
            name='Thomas S..'
            position='chief Operating Officer'
            />
             <Testimonial
            img={JenniePhoto}
            testimonial='incredible end result! Our sales increased over 400% when we worked with sunnyside. Highly recommended!.'
            name='Jennie F.'
            position='Bussiness Owner'
            />
        </div>
      
    </section>
  )
}


