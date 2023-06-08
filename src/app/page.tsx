'use client'
import SkillComponent from '@/components/SkillComponent';
import SocialComponent from '@/components/SocialComponent';
import Button from '@/components/Button';
import Image from 'next/image';
import Emphasis from '@/components/Emphasis';
import Logo from '@/media/jd.png';

export default function Home() {
  function handleClick(): void {
    console.log('oi');
  }

  function scroll(sectionId: string): void {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function sendMail(email: string, name: string, content: string): void {
    console.log(email + name + content)
  }

  function none(): void {
    console.log('return')
  }

  return (
    <main className="flex min-h-screen w-full bg-gray-100 flex-col  ">
      <nav className='h-28 w-full items-center justify-around content-center align flex bg-gray-100'>
        <Image src={Logo} alt="description" className='w-10' />
        <Button onClick={() => scroll('aboutme')} disabled={false}>
          About me
        </Button>
        <Button onClick={() => scroll('skills')} disabled={false}>
          Skills
        </Button>
        <Button onClick={() => scroll('links')} disabled={false}>
          Socials
        </Button>
        <Button onClick={() => scroll('mail')} disabled={false}>
          Hire me
        </Button>
      </nav>
      <section className='h-screen flex justify-center content-center items-start p-16' id='aboutme'>
        <div className='flex flex-row p-6 gap-4 w-[70%] h-fit'>
          <div className='ring ring-gray-200 flex flex-col rounded-3xl p-2 w-fit h-fit shadow-xl'>
            <img src="https://media.licdn.com/dms/image/C4E03AQFXYkp9845Jpw/profile-displayphoto-shrink_800_800/0/1657804692575?e=1691625600&v=beta&t=A12vcJtTobqLbYP6V7tWD88MUcZCHgBU67IbqOhSZrU" alt="João's face" className='rounded-2xl w-[450px]' />
          </div>
          <div className='w-[100%] h-fit flex flex-col'>
            <h1 className='text-[40px] w-full font-bold text-gray-800'>Hi! I am João Davi, but you can call me John
              or even David if you want 😉</h1>
            <p className='w-full text-[20px] font-thin text-gray-600'>I am a <Emphasis onClick={() => none} text="front-end developer" pointer={false} /> focused in build
              value through a good and responsive website or application. With a lot of expertise in breathtaking animations,
              I am sure that I can give a new look for your page or even your app. </p>
            <hr className='w-full my-4' />
            <p className='w-full text-[20px] font-thin text-gray-600'>Want to know more? Scroll down and <Emphasis onClick={() => scroll('skills')} text="take a look at my skills" pointer={true} /></p>
          </div>
        </div>
      </section>
      <section className='h-screen flex justify-center content-center items-start p-16' id='skills'>
        <div className='flex flex-row p-6 gap-4 w-[70%] h-fit'>
          <div className='w-[100%] h-fit flex flex-col'>
            <h1 className='text-[40px] w-full font-bold text-gray-800'>First thing first, what I know</h1>
            <p className='w-full text-[20px] font-thin text-gray-600'>In all of my of my journey I have been learning about a bunch of stuffs, but I always loved creating good design using code, do you know those apple product pages? Or even those stunning apps with a bunch of animations and a usability so good that you always get that "wow" feeling? Yeah, me too.</p>
            <hr className='w-full my-4' />
            <p className='w-full text-[20px] font-thin mb-4 text-gray-600'>Based on that, I built my skills to make those impressive piece of digital applications, so let me list what I know:</p>
            <div className="p-2 bg-gray-100 rounded-3xl ring-2 ring-gray-200 shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              <SkillComponent skillName="React Native" iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
              <SkillComponent skillName="React.js" iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
              <SkillComponent skillName="Tailwind CSS" iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" />
              <SkillComponent skillName="Next.js" iconUrl="https://devarticles.in/wp-content/uploads/2021/10/nextjs-log.jpeg" />
              <SkillComponent skillName="TypeScript" iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" />
              <SkillComponent skillName="JavaScript" iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
              <SkillComponent skillName="HTML 5" iconUrl="https://cdn-icons-png.flaticon.com/512/174/174854.png" />
              <SkillComponent skillName="CSS 3" iconUrl="https://logospng.org/download/css-3/logo-css-3-2048.png" />
              <SkillComponent skillName="Figma" iconUrl="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" />
              <SkillComponent skillName="Sass" iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" />
              <SkillComponent skillName="Bootstrap" iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" />
              <SkillComponent skillName="Git" iconUrl="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
            </div>
            <hr className='w-full my-4' />
            <p className='w-full text-[20px] font-thin mb-4 text-gray-600'>All those skills works together
              to create <Emphasis onClick={() => none} text="unique works" pointer={false} /> that will improve your company
              in terms of design, responsivity and usability. I am not a very "user" of social networks, but you can <Emphasis onClick={() => scroll('links')} text="check my links" pointer={true} /> if you want!</p>
          </div>
        </div>
      </section>
      <section className='h-screen flex justify-center content-center items-start p-16' id='links'>
        <div className='flex flex-row p-6 gap-4 w-[70%] h-fit'>
          <div className='w-[100%] h-fit flex flex-col'>
            <h1 className='text-[40px] w-full font-bold text-gray-800'>So, how I said, I am not a big user</h1>
            <p className='w-full text-[20px] font-thin text-gray-600'>I normally use my LinkedIn to post some of my work (and trying to not forgot to post) and I also use my GitHub to put my stuffs. I normally use Twitter to talk about tech, but its in portuguese, so probably you dont want to read XD</p>
            <hr className='w-full my-4' />
            <p className='w-full text-[20px] font-thin mb-4 text-gray-600'>so here is my links:</p>
            <div className="bg-gray-100 rounded-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SocialComponent description='here is where I put my work and the stuffs that I do' imageUrl='https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png' title='LinkedIn' url='https://www.linkedin.com/in/joaodavisn/' />
              <SocialComponent description='here is where I put my work and the stuffs that I do' imageUrl='https://cdn-icons-png.flaticon.com/512/25/25231.png' title='GitHub' url='https://github.com/joaodavisn/' />
            </div>
            <hr className='w-full my-4' />
            <p className='w-full text-[20px] font-thin mb-4 text-gray-600'>These are the platforms that I usually post my work and what I am currently doing. Feel free to talk with me on LinkedIn if you want but if you want to hire me you can directly <Emphasis onClick={() => scroll('mail')} text="send me an email" pointer={true} />!</p>
          </div>
        </div>
      </section>
      <section className='h-screen flex justify-center content-center items-start p-16' id='mail'>
        <div className='flex flex-row p-6 gap-4 w-[70%] h-fit'>
          <div className='w-[100%] h-fit flex flex-col'>
            <h1 className='text-[40px] w-full font-bold text-gray-800'>Let's have a meet?</h1>
            <p className='w-full text-[20px] font-thin text-gray-600'>Fill the form below and we can get in touch!</p>
            <hr className='w-full my-4' />
            <p className='w-full text-[20px] font-thin mb-4 text-gray-600'>here it is:</p>
            <form className="flex flex-col bg-gray-100 rounded-3xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              <input className="w-full p-4 rounded-lg mb-2" placeholder="Name" />
              <input className="w-full p-4 rounded-lg mb-2" placeholder="Email" type="email" />
              <textarea className="w-full p-4 h-40 rounded-lg mb-2" placeholder="Content"></textarea>
              <div className='w-full flex flex-row justify-end'>
                <button onClick={() => sendMail('a', 'b', 'c')} className='w-fit h-fit py-2 px-12 text-gray-100 font-medium bg-orange-600
         hover:shadow-md ring-2 ring-orange-400 ease-in-out duration-200 rounded-lg'>
                  Send
                </button>
              </div>
            </form>
            <hr className='w-full my-4' />
            <p className='w-full text-[20px] font-thin mb-4 text-gray-600'>And that's it! Feel free to send me an email if you want or chat with me on LinkedIn! See ya! ⚡</p>
          </div>
        </div>
      </section>
      <footer className='h-24 flex flex-row items-center p-12 gap-4 text-gray-100 bg-orange-600 w-full'>
        <h1>joaodavi.dev</h1>
        <h1>•</h1>
        <h1>Porto Alegre-RS, Brazil</h1>
        <h1>•</h1>
        <h1>This website was made using Tailwind CSS, Next.js and Typescript.</h1>
      </footer>
    </main>
  )
}
