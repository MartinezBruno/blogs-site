import data from '@/content/about-us.json'
import Arrow from '@/components/Icons/Arrow'
import Link from 'next/link'

const featuredArticles = data.data

const AboutUs = () => {
  return (
    <section
      className='c-container flex flex-col gap-16 scroll-mt-[104px]'
      id='about-us'>
      {featuredArticles.map((article, index) => (
        <article
          key={index}
          className={`${
            index % 2 ? 'flex lg:flex-row-reverse self-end' : 'flex lg:flex-row'
          } flex-col max-w-[442px] md:max-w-[650px] lg:max-w-none lg:gap-28`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt='Article cover image'
            loading='eager'
            className='object-cover w-full md:max-w-[55%] h-full'
          />
          <div className='basis-full'>
            <h2 className={`${index % 2 && 'text-end'} text-xl lg:text-5xl font-extrabold text-yellow my-3`}>
              {article.title}
            </h2>
            <p className='text-black font-semibold text-justify leading-[140%] tracking-[-0.26px] text-sm md:text-base lg:text-xl'>
              {article.content.substring(0, 300)}...
            </p>
            <Link
              href={article.handle}
              className={`${
                index % 2 && 'justify-end'
              } flex text-sm font-bold leading-[175%] underline mt-5`}>
              Learn more <Arrow />
            </Link>
          </div>
        </article>
      ))}
    </section>
  )
}

export default AboutUs
