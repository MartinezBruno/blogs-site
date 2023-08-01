import Link from 'next/link'
import styles from './Footer.module.css'

const companyLinks = [
  {
    name: 'About Us',
    link: '/about-us'
  },
  {
    name: 'Blogs',
    link: '/blogs'
  },
  {
    name: 'Support',
    link: '/support'
  }
]
const customerServiceLinks = [
  {
    name: 'Terms & Conditions',
    link: '/terms-and-conditions'
  },
  {
    name: 'Privacy Policy',
    link: '/privacy-policy'
  }
]
const contactUsData = [
  'info@instablogs.com',
  '1-800-200-300',
  '1010 Sunset Blv. Palo Alto, CA United States'
]

const Footer = () => {
  return (
    <footer className='bg-yellow p-5'>
      <div className='mb-4'>
        <Link href='/'>
          <span className='text-4xl text-white font-bold font-pt_serif'>InstaBlogs</span>
        </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-12 pb-12'>
        <div>
          <h4 className={styles.column_header}>Company</h4>
          <ul>
            {companyLinks.map(link => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  className={styles.column_link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={styles.column_header}>Contact Us</h4>
          <ul>
            {contactUsData.map((data, index) => (
              <li
                key={index}
                className={styles.column_link}>
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={styles.column_header}>Customer Service</h4>
          <ul>
            {customerServiceLinks.map(link => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  className={styles.column_link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='sm:col-span-full sm:max-w-[40%] md:col-span-1 md:max-w-none'>
          <h4 className={styles.column_header}>Stay up to date</h4>
          <form className='flex flex-col'>
            <label className={styles.column_link}>Subscribe to our newsletter</label>
            <input
              type='email'
              className='py-[6.5px] px-2 border-[2px] border-yellow rounded placeholder:text-yellow focus:outline-none focus:border-blue'
              placeholder='Email'
            />
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
