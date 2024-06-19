import { Image } from "./Image"
import { Text } from "./Text"
import { ImageText } from "./ImageText"

import eggImgMobile from '../assets/mobile/image-transform.jpg'
import eggImgDesktop from '../assets/desktop/image-transform.jpg'
import glassImgMobile from '../assets/mobile/image-stand-out.jpg'
import glassImgDesktop from '../assets/desktop/image-stand-out.jpg'
import graphicDesingMobile from '../assets/mobile/image-graphic-design.jpg'
import graphicDesingDesktop from '../assets/desktop/image-graphic-design.jpg'
import photoGraphyMobile from '../assets/mobile/image-photography.jpg'
import photoGraphyDesktop from '../assets/desktop/image-photography.jpg'




export const Services = () => {
  return (
    <section className="tablet:grid tablet:grid-cols-2">
      <Image
       order='order-2'
       imgMobile={eggImgMobile} 
       imgDesktop={eggImgDesktop}/>
       <Text
       order='order-1'
       title='Transform your brand'
       text='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients trhough compelling visuals that do most of the marketing for you'
       color='bg-Yellow'/>

      <Image 
      order='order-3'
      imgMobile={glassImgMobile}  
      imgDesktop={glassImgDesktop}/>
      <Text
      order='order-4' 
      title='Stand out to the right audience'
      text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we^ll build and extend your brand in digital places.'
      color='bg-Soft-red'
      />
      <ImageText 
      order='order-5'
      imgMobile={graphicDesingMobile}
      imgDesktop={graphicDesingDesktop}
      title='Graphic desing'
      text='Great design you memorable. we deliver artwork that underscores your brand message and captures potencial clients attencion.'
      /> <ImageText 
      order='order-6'
      imgMobile={photoGraphyMobile}
      imgDesktop={photoGraphyDesktop}
      title='Photography'
      text='Increase yours credibility by getting the most stnning high-quality photos that improve your business image'
      />
    </section>
  )
}


