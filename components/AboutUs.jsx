import data from '@/content/about-us.json'
import Image from 'next/image'

const featuredArticles = data.data
console.log(featuredArticles)

const AboutUs = () => {
  return (
    <section className='c-container flex flex-col gap-16'>
      {featuredArticles.map((article, index) => (
        <article
          key={index}
          className={index % 2 ? 'md:flex flex-row-reverse' : 'md:flex'}>
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
          </div>
        </article>
      ))}
    </section>
  )
}

export default AboutUs
