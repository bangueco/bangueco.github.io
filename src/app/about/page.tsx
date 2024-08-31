import Image from 'next/image'

export default function About() {
  return (
    <section className="pt-28 p-10 flex flex-col justify-center items-center">
      <article className="gap-5 flex flex-col items-center">
        <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">About Me</h1>
        <div className='flex flex-col justify-center items-center gap-8 lg:flex-row p-3 rounded-sm'>
          <Image
            className='rounded-full'
            src="/images/me.jpg"
            alt='My photo'
            width={200}
            height={200}
          />
          <div className='lg:w-[60%] flex flex-col gap-3'>
            <p className='text-justify'>
              I am 21 years old, taking <strong className='text-primary'>Bachelor of Science in Information Technology</strong>. 
              I specialize in web and mobile development. As a self taught programmer, i continue to hone my skills and knowledge, in-order to
              keep up with the current technology trends and best practices. My journey on tech started on my sophomore year, where i finally
              have a personal laptop that i can use, where i also install <strong className='text-primary'>Linux</strong> as my main operation system.
            </p>
            <p className='text-justify'>
              I was driven by passion and excitement every time i learn new things. Looking ahead, I am eager to leverage 
              my knowledge and skills in a dynamic work environment where I can contribute to impactful projects and 
              continue to grow as a developer. My goal is to work with innovative teams that push the boundaries of technology and 
              deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}