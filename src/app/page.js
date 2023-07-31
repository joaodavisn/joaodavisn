'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const [language, setLanguage] = useState('pt');

  const languageData = {
    pt: {
      jobrole: 'Desenvolvedor Front-end',
      description: 'Sou um desenvolvedor Front-End com mais de três anos de experiência em várias tecnologias, incluindo JavaScript, Tailwind CSS e ReactJS. Tenho habilidades em renderização 3D via Three.js e na criação de interfaces intuitivas e páginas de destino atrativas. Provei minha capacidade de gerenciar projetos de grande escala sob pressão, sempre entregando resultados de alta qualidade.',
      experiencetitle: 'Resenha.app',
      experiencetitle1: 'Dumativa Game Studio',
      experiencedescription: 'Trabalhei na startup Resenha.app como desenvolvedor front-end pleno. Durante meu trabalho, utilizei das tecnologias React.js e Next.js para desenvolver todo o front-end da aplicação web. Além disso, utilizei do Figma para prototipação, Vercel para distribuição e fiz parte da integração com o back-end utilizando php.',
      experiencedescription1: 'Trabalhei na empresa Dumativa como profissional em front-end e back-end desenvolvendo games online para PC com uso de C# na Unity 3D. Lá pude aprender conceitos avançados de responsividade e escalabilidade de sistemas.',
      email: 'joaodavisn+ptbr@gmail.com',
      about: '● Sobre mim',
      experiences: '● Experiências',
      resume: 'Currículo',
      sendmail: 'Me mande um e-mail',
      contactme: '● Entre em contato',
      hardskills: ['Proficiência em JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'ReactJS', 'NextJS', 'Conhecimento em Three.js', 'Excelente compreensão de design responsivo', 'Forte habilidade para converter wireframes de design em interfaces de usuário interativas', 'Conhecimento avançado de Figma', 'Proficiente na metodologia SCRUM'],
      softskills: ['Excelentes habilidades de resolução de problemas', 'Destacadas habilidades de trabalho em equipe', 'Adaptabilidade', 'Gerenciamento de tempo', 'Criatividade', 'Iniciativa', 'Agilidade de aprendizado'],
    },
    en: {
      jobrole: 'Front-end Developer',
      description: 'I am a Front-End developer with over three years of experience in various technologies, including JavaScript, Tailwind CSS, and ReactJS. I have skills in 3D rendering via Three.js and in creating intuitive interfaces and attractive landing pages. I have proven my ability to manage large-scale projects under pressure, always delivering high-quality results.',
      experiencetitle: 'Resenha.app',
      experiencetitle1: 'Dumativa Game Studio',
      experiencedescription: 'I worked at the startup Resenha.app as a mid-level front-end developer. During my work, I used technologies such as React.js and Next.js to develop the entire front-end of the web application. Additionally, I used Figma for prototyping, Vercel for distribution, and I was part of the integration with the back-end using PHP.',
      experiencedescription1: 'I worked at Dumativa as a front-end and back-end professional developing online games for PC using C# in Unity 3D. There I was able to learn advanced concepts of system responsiveness and scalability.',
      email: 'joaodavisn+enus@gmail.com',
      about: '● About me',
      experiences: '● Experiences',
      resume: 'Resumé',
      sendmail: 'Send me an e-mail',
      contactme: '● Contact me',
      hardskills: ['Proficiency in JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'ReactJS', 'NextJS', 'Familiarity with Three.js', 'Excellent understanding of responsive design', 'Strong ability to convert design wireframes into interactive user interfaces', 'Advanced knowledge of Figma', 'Proficient in SCRUM methodology'],
      softskills: ['Superior problem-solving skills', 'Outstanding teamwork abilities', 'Adaptability', 'Time Management', 'Creativity', 'Initiative', 'Learning Agility'],
    },
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handlePrint = () => {
    window.print();
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <nav className='px-4 py-12 w-full h-20 flex items-center fixed bg-[#ececec18] backdrop-blur-sm'>
        <p className='text-4xl'>{languageData[language].resume}</p>
        <div className='flex flex-row gap-2 justify-end w-full'>
          <button
            className={`flex flex-row justify-center items-center content-center py-2 px-8 rounded-full ring-1 ${language === 'pt' ? 'ring-[#0070f3] bg-[#f3f3f3] text-[#0070f3]' : 'ring-[#d8d8d8] bg-[#f3f3f3]'
              }`}
            onClick={() => handleLanguageChange('pt')}
          >
            <Image
              src={'https://em-content.zobj.net/thumbs/120/apple/354/flag-brazil_1f1e7-1f1f7.png'}
              alt='Brazil Flag'
              width={30}
              height={10}
            />
            PT-BR
          </button>
          <button
            className={`flex flex-row justify-center items-center content-center py-2 px-8 rounded-full ring-1 ${language === 'en' ? 'ring-[#0070f3] bg-[#f3f3f3] text-[#0070f3]' : 'ring-[#d8d8d8] bg-[#f3f3f3]'
              }`}
            onClick={() => handleLanguageChange('en')}
          >
            <Image
              src={'https://em-content.zobj.net/thumbs/120/apple/354/flag-united-states_1f1fa-1f1f8.png'}
              alt='USA Flag'
              width={30}
              height={10}
            />
            EN-US
          </button>
          <button
            className="flex flex-row justify-center items-center content-center py-4 px-4 rounded-full ring-1 bg-[#f3f3f3] ring-[#d8d8d8]"
            onClick={handlePrint}
          >
            <Image
              src={'https://em-content.zobj.net/thumbs/120/apple/354/printer_1f5a8-fe0f.png'}
              alt='USA Flag'
              width={30}
              height={10}
            />
          </button>
        </div>
      </nav>
      <section className='w-full p-12 mt-20 max-w-5xl' id="print-section">
        <div className='flex flex-col w-full max-w-5xl content-center items-start justify-center gap-4'>
          <p className="text-2xl font-bold">{languageData[language].about}</p>
          <div className='bg-[#f7f7f7] w-fit p-4 rounded-2xl ring-1 ring-inset ring-[#f1f1f1] hover:drop-shadow-md ease-in-out duration-200 hover:cursor-pointer'>
            <div>
              <p className='text-5xl font-semibold'>João Davi S. N.</p>
              <p className='text-2xl mb-4'>{languageData[language].jobrole}</p>
            </div>
            <p className='text-lg max-w-5xl text-justify'>{languageData[language].description}</p>
          </div>
          <hr className='bg-[#f7f7f7] max-w-5xl h-[2px]' />
          <p className="text-2xl font-bold">{languageData[language].experiences}</p>
          <div className='bg-[#f7f7f7] w-fit p-4 rounded-2xl ring-1 ring-inset ring-[#f1f1f1] hover:drop-shadow-md ease-in-out duration-200 hover:cursor-pointer'>
            <p className='text-lg font-bold'>{languageData[language].experiencetitle}</p>
            <p className='text-lg max-w-5xl'>{languageData[language].experiencedescription}</p>
          </div>
          <div className='bg-[#f7f7f7] w-fit p-4 rounded-2xl ring-1 ring-inset ring-[#f1f1f1] hover:drop-shadow-md ease-in-out duration-200 hover:cursor-pointer'>
            <p className='text-lg font-bold'>{languageData[language].experiencetitle1}</p>
            <p className='text-lg max-w-5xl'>{languageData[language].experiencedescription1}</p>
          </div>
          <div className="my-4">
            <p className="text-2xl font-bold">● Hardskills</p>
            <div className='bg-[#f7f7f7] p-4 rounded-2xl ring-1 ring-inset max-w-5xl ring-[#f1f1f1] hover:drop-shadow-md ease-in-out duration-200 hover:cursor-pointer'>
              <ul className='list-disc list-inside space-y-1 text-lg max-w-5xl'>
                {languageData[language].hardskills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="my-4">
            <p className="text-2xl font-bold">● Softskills</p>
            <div className='bg-[#f7f7f7] p-4 rounded-2xl ring-1 ring-inset max-w-5xl ring-[#f1f1f1] hover:drop-shadow-md ease-in-out duration-200 hover:cursor-pointer'>
              <ul className='list-disc list-inside space-y-1 text-lg max-w-5xl'>
                {languageData[language].softskills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="my-8">
            <p className="text-2xl font-bold">{languageData[language].contactme}</p>
            <div className='bg-[#f7f7f7] p-4 rounded-2xl ring-1 ring-inset max-w-5xl ring-[#f1f1f1] hover:drop-shadow-md ease-in-out duration-200 hover:cursor-pointer'>
              <p className="text-lg">Email: <a href={`mailto:${languageData[language].email}`} className="text-orange-500 underline">{languageData[language].sendmail}</a></p>
              <p className="text-lg">Phone: +55 (74) 9 9929-3791</p>
              <div className="flex space-x-4 mt-2">
              <div className='flex flex-row items-center gap-2'>
                <FontAwesomeIcon icon={faGithub} color="green" /> <a href="https://github.com/joaodavisn" className='text-green-700' target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <FontAwesomeIcon icon={faLinkedin} color="blue" /> <a href="https://linkedin.com/in/joaodavi" className='text-blue-700' target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
