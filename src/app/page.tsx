import Image from 'next/image'
import { Titillium_Web } from 'next/font/google'

const titilliumweb = Titillium_Web({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex-col items-center justify-between p-5 pb-0 md:p-12 xl:p-24 xl:pb-0">

        <div className="w-full xl:w-1/2">
          <div className="logo-section flex items-center">
            <Image className="first-lett logo-norman" src={'/img/normansteger-logo-2023.svg'} width="80" height="80" alt="Logo Norman Steger - Software Engineer" />
            <div className="flex flex-col m-3">
              <h1 className={`${titilliumweb.className} text-4xl xl:text-5xl font-bold title w-full mb-2 text-white`}>Norman Steger</h1>
              <h2 className={`${titilliumweb.className} text-3xl xl:text-3xl font-bold subtitle w-full`}>Software Engineer</h2>
            </div>
          </div>

          <div className="terminal my-20 flex flex-col">

            <div className="window-controls m-5 mb-0">
              <span className="window-close mr-2"></span>
              <span className="window-minimize mr-2"></span>
              <span className="window-fullscreen mr-2"></span>
            </div>

            <div className="terminal-content p-5">

              <p className="mb-5 md:mb-0">Welcome to my website! I do:</p>

              <ul className="terminal-list m-2 mt-5 mb-10">
                <li className="ml-5 mb-5 md:mb-0">Full-Stack Software Engineering</li>
                <li className="ml-5 mb-5 md:mb-0">Web Software Consulting</li>
                <li className="ml-5 mb-5 md:mb-0">Agile Coaching</li>
              </ul>
            
            </div>
          </div>
          
          <div className="flex-row justify-between xl:flex">

            <div className="scrum-org-certifications flex-row w-100 sm:w-2/3 xl:w-1/2  xl:flex-inline">
                <p className={`${titilliumweb.className} text-xl md:text-2xl text-white`}>I ❤️ Agile Software Development:</p>
                <ul className="my-5 flex">
                  <li className="mr-5 opacity-70">
                    <a href="https://www.credly.com/badges/d92f24b3-0327-40de-aa0b-260bbc123357" target='_blank'><Image src={'/img/psd1_batch.png'} width="600" height="600" alt="Scrum.org Professional Scrum Developer I Certification Batch"></Image></a>
                  </li>
                  <li className="mr-5 opacity-70">
                    <a href="https://www.credly.com/badges/78abfa0e-a3c5-4cc7-9dfd-b47073f10fc2" target='_blank'><Image src={'/img/psm1_batch.png'} width="600" height="600" alt="Scrum.org Professional Scrum Master I Certification Batch"></Image></a>
                  </li>
                  <li className="mr-5 opacity-70">
                    <a href="https://www.credly.com/badges/63ac9a40-1693-4ed8-9a83-74d1c1078e47" target='_blank'><Image src={'/img/pspo1_batch.png'} width="600" height="600" alt="Scrum.org Professional Scrum Product Owner I Certification Batch"></Image></a>
                  </li>
                </ul>
              </div>

              <div className="social-media flex-row w-100 xl:w-1/3 xl:flex-inline">
                <p className={`${titilliumweb.className} text-xl md:text-2xl text-white`}>Find me on:</p>
                <ul className="my-5 flex">
                  <li className="mr-5 opacity-70">
                    <a href="https://www.linkedin.com/in/norman-steger-70568284/" target='_blank'><Image src={'/img/linkedin_logo.png'} width="50" height="50" alt="LinkedIn Logo"></Image></a>
                  </li>
                  <li className="mr-5 opacity-70">
                    <a href="https://twitter.com/voodoods" target='_blank'><Image src={'/img/twitter_logo.png'} width="50" height="50" alt="Twitter Logo"></Image></a>
                  </li>
                  <li className="mr-5 opacity-70">
                    <a href="https://github.com/voodoods" target='_blank'><Image src={'/img/github_logo.png'} width="50" height="50" alt="GitHub Logo"></Image></a>
                  </li>
                </ul>
              </div>

          </div>
        </div>
      </main>

      <div className="bottom-0 right-0 -mb-20 opacity-80 img-norman relative md:mb-0 md:min-h-screen md:absolute">
        <div className="flex items-end md:h-screen">
          <Image src={'/img/norman_portrait.png'} width="1027" height="938" alt="Portrait Norman Steger - Software Engineer" />
        </div>
      </div>

      <footer className="w-full p-5 pt-10 relative bottom-0 left-0 md:p-12 xl:px-24 md:py-10 md:pt-5 md:absolute">
        <p className={`${titilliumweb.className} text-sm md:text-2xl text-white`}>
          &copy; 2023 Norman Steger | me@normansteger.com
        </p>
      </footer>

      <div className="background-rays min-h-screen absolute bottom-0 left-0">
        <div className="ray ray-1"></div>
        <div className="ray ray-2"></div>
      </div>
    </>
  )
}
