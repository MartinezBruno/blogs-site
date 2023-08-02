import data from '@/content/about-us.json'
import Image from 'next/image'
import Link from 'next/link'

const featuredArticles = data.data

const AboutUs = () => {
  return (
    <section className='c-container flex flex-col gap-16'>
      {featuredArticles.map((article, index) => (
        <article
          key={index}
          className={`${
            index % 2 ? 'flex md:flex-row-reverse self-end' : 'flex md:flex-row'
          } flex-col max-w-[442px] md:max-w-none`}>
          <Image
            src={article.image}
            width={242}
            height={162}
            loading='lazy'
            className='object-cover w-full h-full'
            alt='Article Cover image'
          />
          <div className='basis-full'>
            <h2>{article.title}</h2>
            <p>{article.content.substring(0, 500)}...</p>
            <Link href={article.handle}>Learn more</Link>
          </div>
        </article>
      ))}
    </section>
  )
}

export default AboutUs
