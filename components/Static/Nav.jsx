'use client'

import { getProviders, signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Hamburger from '../Icons/Hamburger'
import MobileNav from './MobileNav'

const Nav = () => {
  const { data: session } = useSession()
  const currentRoute = usePathname()

  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

  const [svgFillColor, setSvgFillColor] = useState('')
  const pathname = usePathname()

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(prev => !prev)
  }

  useEffect(() => {
    const setProvidersData = async () => {
      const providers = await getProviders()
      setProviders(providers)
    }
    setProvidersData()
    const color = pathname === '/' ? '#fff' : '#000'
    setSvgFillColor(color)
  }, [pathname])

  return (
    <nav
      className={`flex justify-between w-full transition-all fixed top-0 z-50 ${
        pathname === '/' && 'homepage'
      }`}
      id='navbar'>
      {/* Desktop nav */}
      <div className='sm:flex w-full justify-between items-center hidden c-container !py-6'>
        <Link href='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='37'
            height='74'
            viewBox='0 0 187 333'
            fill='none'>
            <path
              d='M147.911 24.2337H51.4962C40.5325 24.2337 31.6447 31.9881 31.6447 41.5537V266.87C31.6447 276.435 40.5325 284.19 51.4962 284.19H147.911C158.875 284.19 167.762 276.435 167.762 266.87V41.5537C167.762 31.9881 158.875 24.2337 147.911 24.2337Z'
              stroke='#FBB500'
              strokeWidth='1.95162'
              strokeMiterlimit='10'
            />
            <path
              d='M49.2375 274.574V268.7C54.6388 266.134 60.1752 264.514 65.8465 263.838V143.727C63.1459 143.187 60.3777 142.512 57.542 141.701C54.7064 140.756 51.9382 139.743 49.2375 138.663V132.789H70.7077C73.2733 132.789 75.7039 132.722 77.9995 132.587C80.4301 132.452 82.9282 132.317 85.4938 132.182C88.0594 132.047 90.8276 131.912 93.7983 131.777C96.769 131.642 100.145 131.574 103.926 131.574C109.327 131.574 114.796 132.047 120.332 132.992C126.004 133.802 131.067 135.422 135.523 137.853C140.114 140.284 143.828 143.727 146.664 148.183C149.499 152.504 150.917 158.175 150.917 165.197C150.917 168.708 150.377 172.219 149.297 175.73C148.216 179.241 146.529 182.549 144.233 185.655C142.072 188.625 139.304 191.258 135.928 193.554C132.553 195.85 128.569 197.537 123.978 198.618V199.428C128.029 200.103 132.013 201.251 135.928 202.871C139.979 204.492 143.558 206.72 146.664 209.555C149.769 212.256 152.267 215.632 154.158 219.683C156.183 223.734 157.196 228.595 157.196 234.266C157.196 241.558 155.576 247.837 152.335 253.103C149.094 258.37 144.841 262.691 139.574 266.066C134.443 269.442 128.569 271.94 121.953 273.561C115.336 275.046 108.652 275.789 101.9 275.789C97.1741 275.789 91.8403 275.586 85.8989 275.181C79.9574 274.776 74.2186 274.574 68.6822 274.574H49.2375ZM103.318 265.256C108.179 265.256 112.703 264.514 116.889 263.028C121.21 261.543 124.856 259.517 127.826 256.952C130.932 254.251 133.363 251.078 135.118 247.432C136.874 243.651 137.751 239.6 137.751 235.279C137.751 229.878 136.671 225.422 134.511 221.911C132.485 218.265 129.649 215.429 126.004 213.404C122.493 211.243 118.374 209.758 113.648 208.948C109.057 208.137 104.263 207.732 99.2671 207.732H84.0759V263.636C85.9664 264.176 88.1944 264.581 90.7601 264.851C93.4607 265.121 97.6467 265.256 103.318 265.256ZM94.2034 197.2C96.4989 197.2 99.1996 197.132 102.305 196.997C105.546 196.727 108.179 196.457 110.205 196.187C116.416 194.027 121.48 190.583 125.396 185.857C129.447 180.996 131.472 175.325 131.472 168.843C131.472 159.931 128.772 153.247 123.37 148.791C118.104 144.335 111.015 142.107 102.103 142.107C97.9168 142.107 94.3384 142.174 91.3677 142.309C88.397 142.444 85.9664 142.647 84.0759 142.917V197.2H94.2034Z'
              fill={svgFillColor}
            />
            <path
              d='M49.2375 274.574H48.8902V274.921H49.2375V274.574ZM49.2375 268.7L49.0885 268.386L48.8902 268.48V268.7H49.2375ZM65.8465 263.838L65.8876 264.183L66.1938 264.147V263.838H65.8465ZM65.8465 143.727H66.1938V143.442L65.9147 143.386L65.8465 143.727ZM57.542 141.701L57.4322 142.031L57.4394 142.033L57.4466 142.035L57.542 141.701ZM49.2375 138.663H48.8902V138.898L49.1086 138.986L49.2375 138.663ZM49.2375 132.789V132.442H48.8902V132.789H49.2375ZM77.9995 132.587L77.9802 132.24L77.9791 132.24L77.9995 132.587ZM85.4938 132.182L85.512 132.528L85.512 132.528L85.4938 132.182ZM93.7983 131.777L93.7825 131.43L93.7825 131.43L93.7983 131.777ZM120.332 132.992L120.274 133.334L120.283 133.336L120.332 132.992ZM135.523 137.853L135.357 138.158L135.361 138.16L135.523 137.853ZM146.664 148.183L146.371 148.369L146.373 148.374L146.664 148.183ZM149.297 175.73L148.965 175.628L148.965 175.628L149.297 175.73ZM144.233 185.655L143.954 185.448L143.952 185.45L144.233 185.655ZM135.928 193.554L136.124 193.841L136.124 193.841L135.928 193.554ZM123.978 198.618L123.899 198.28L123.631 198.343V198.618H123.978ZM123.978 199.428H123.631V199.722L123.921 199.77L123.978 199.428ZM135.928 202.871L135.796 203.192L135.799 203.194L135.928 202.871ZM146.664 209.555L146.429 209.812L146.436 209.817L146.664 209.555ZM154.158 219.683L153.843 219.83L153.847 219.838L154.158 219.683ZM152.335 253.103L152.631 253.285L152.631 253.285L152.335 253.103ZM139.574 266.066L139.387 265.774L139.383 265.776L139.574 266.066ZM121.953 273.561L122.029 273.9L122.035 273.898L121.953 273.561ZM116.889 263.028L116.776 262.7L116.773 262.701L116.889 263.028ZM127.826 256.952L128.053 257.215L128.054 257.214L127.826 256.952ZM135.118 247.432L135.431 247.583L135.433 247.578L135.118 247.432ZM134.511 221.911L134.207 222.079L134.211 222.086L134.215 222.093L134.511 221.911ZM126.004 213.404L125.822 213.7L125.828 213.704L125.835 213.707L126.004 213.404ZM113.648 208.948L113.588 209.29L113.589 209.29L113.648 208.948ZM84.0759 207.732V207.385H83.7286V207.732H84.0759ZM84.0759 263.636H83.7286V263.898L83.9805 263.97L84.0759 263.636ZM90.7601 264.851L90.7237 265.197L90.7255 265.197L90.7601 264.851ZM102.305 196.997L102.32 197.345L102.334 197.343L102.305 196.997ZM110.205 196.187L110.251 196.531L110.286 196.527L110.319 196.515L110.205 196.187ZM125.396 185.857L125.129 185.635L125.128 185.636L125.396 185.857ZM123.37 148.791L123.146 149.056L123.149 149.059L123.37 148.791ZM91.3677 142.309L91.3519 141.962L91.3519 141.962L91.3677 142.309ZM84.0759 142.917L84.0268 142.573L83.7286 142.616V142.917H84.0759ZM84.0759 197.2H83.7286V197.547H84.0759V197.2ZM49.5848 274.574V268.7H48.8902V274.574H49.5848ZM49.3865 269.013C54.7554 266.463 60.2554 264.854 65.8876 264.183L65.8055 263.494C60.0949 264.173 54.5223 265.805 49.0885 268.386L49.3865 269.013ZM66.1938 263.838V143.727H65.4992V263.838H66.1938ZM65.9147 143.386C63.2238 142.848 60.4648 142.175 57.6374 141.368L57.4466 142.035C60.2907 142.848 63.068 143.525 65.7784 144.067L65.9147 143.386ZM57.6519 141.372C54.8225 140.429 52.0607 139.418 49.3665 138.341L49.1086 138.986C51.8157 140.069 54.5903 141.084 57.4322 142.031L57.6519 141.372ZM49.5848 138.663V132.789H48.8902V138.663H49.5848ZM49.2375 133.137H70.7077V132.442H49.2375V133.137ZM70.7077 133.137C73.2794 133.137 75.7168 133.069 78.0199 132.933L77.9791 132.24C75.691 132.375 73.2673 132.442 70.7077 132.442V133.137ZM78.0187 132.934C80.449 132.799 82.9467 132.663 85.512 132.528L85.4755 131.835C82.9096 131.97 80.4112 132.105 77.9802 132.24L78.0187 132.934ZM85.512 132.528C88.0767 132.393 90.844 132.258 93.8141 132.123L93.7825 131.43C90.8111 131.565 88.0421 131.7 85.4755 131.835L85.512 132.528ZM93.8141 132.123C96.7783 131.989 100.149 131.921 103.926 131.921V131.227C100.141 131.227 96.7597 131.294 93.7825 131.43L93.8141 132.123ZM103.926 131.921C109.307 131.921 114.756 132.392 120.274 133.334L120.391 132.65C114.836 131.701 109.347 131.227 103.926 131.227V131.921ZM120.283 133.336C125.919 134.141 130.942 135.75 135.357 138.158L135.69 137.548C131.193 135.095 126.089 133.463 120.381 132.648L120.283 133.336ZM135.361 138.16C139.898 140.562 143.567 143.963 146.371 148.369L146.957 147.997C144.089 143.491 140.331 140.005 135.686 137.546L135.361 138.16ZM146.373 148.374C149.161 152.621 150.57 158.22 150.57 165.197H151.264C151.264 158.131 149.838 152.387 146.954 147.992L146.373 148.374ZM150.57 165.197C150.57 168.672 150.035 172.148 148.965 175.628L149.629 175.832C150.719 172.289 151.264 168.744 151.264 165.197H150.57ZM148.965 175.628C147.897 179.099 146.227 182.372 143.954 185.448L144.512 185.861C146.83 182.725 148.536 179.382 149.629 175.832L148.965 175.628ZM143.952 185.45C141.818 188.385 139.08 190.991 135.733 193.267L136.124 193.841C139.529 191.526 142.327 188.865 144.514 185.859L143.952 185.45ZM135.733 193.267C132.397 195.535 128.455 197.208 123.899 198.28L124.058 198.956C128.684 197.867 132.708 196.164 136.124 193.841L135.733 193.267ZM123.631 198.618V199.428H124.325V198.618H123.631ZM123.921 199.77C127.945 200.441 131.903 201.581 135.796 203.192L136.061 202.55C132.122 200.92 128.113 199.765 124.035 199.085L123.921 199.77ZM135.799 203.194C139.813 204.799 143.356 207.005 146.429 209.812L146.898 209.299C143.76 206.434 140.146 204.184 136.057 202.549L135.799 203.194ZM146.436 209.817C149.502 212.483 151.971 215.819 153.843 219.83L154.473 219.536C152.563 215.445 150.037 212.028 146.891 209.293L146.436 209.817ZM153.847 219.838C155.843 223.83 156.849 228.636 156.849 234.266H157.543C157.543 228.554 156.523 223.637 154.468 219.527L153.847 219.838ZM156.849 234.266C156.849 241.505 155.241 247.719 152.039 252.921L152.631 253.285C155.911 247.955 157.543 241.611 157.543 234.266H156.849ZM152.039 252.921C148.826 258.143 144.61 262.426 139.387 265.774L139.762 266.359C145.071 262.955 149.362 258.597 152.631 253.285L152.039 252.921ZM139.383 265.776C134.289 269.128 128.452 271.611 121.87 273.223L122.035 273.898C128.686 272.269 134.597 269.756 139.765 266.357L139.383 265.776ZM121.877 273.222C115.285 274.702 108.626 275.442 101.9 275.442V276.136C108.678 276.136 115.387 275.391 122.029 273.9L121.877 273.222ZM101.9 275.442C97.1837 275.442 91.858 275.239 85.9225 274.835L85.8753 275.528C91.8226 275.933 97.1645 276.136 101.9 276.136V275.442ZM85.9225 274.835C79.9738 274.429 74.227 274.226 68.6822 274.226V274.921C74.2101 274.921 79.9411 275.123 85.8753 275.528L85.9225 274.835ZM68.6822 274.226H49.2375V274.921H68.6822V274.226ZM103.318 265.604C108.215 265.604 112.778 264.855 117.005 263.356L116.773 262.701C112.627 264.172 108.143 264.909 103.318 264.909V265.604ZM117.002 263.357C121.358 261.859 125.044 259.813 128.053 257.215L127.599 256.689C124.667 259.221 121.062 261.227 116.776 262.7L117.002 263.357ZM128.054 257.214C131.195 254.483 133.655 251.272 135.431 247.583L134.805 247.281C133.071 250.884 130.669 254.019 127.599 256.69L128.054 257.214ZM135.433 247.578C137.211 243.75 138.099 239.649 138.099 235.279H137.404C137.404 239.551 136.537 243.552 134.803 247.286L135.433 247.578ZM138.099 235.279C138.099 229.833 137.01 225.309 134.806 221.729L134.215 222.093C136.333 225.534 137.404 229.922 137.404 235.279H138.099ZM134.814 221.742C132.757 218.04 129.875 215.157 126.172 213.1L125.835 213.707C129.424 215.701 132.213 218.49 134.207 222.079L134.814 221.742ZM126.186 213.108C122.631 210.921 118.47 209.422 113.707 208.605L113.589 209.29C118.279 210.094 122.354 211.566 125.822 213.7L126.186 213.108ZM113.708 208.606C109.096 207.792 104.282 207.385 99.2671 207.385V208.08C104.245 208.08 109.018 208.483 113.588 209.29L113.708 208.606ZM99.2671 207.385H84.0759V208.08H99.2671V207.385ZM83.7286 207.732V263.636H84.4232V207.732H83.7286ZM83.9805 263.97C85.8952 264.517 88.1439 264.925 90.7237 265.197L90.7964 264.506C88.245 264.237 86.0376 263.835 84.1713 263.302L83.9805 263.97ZM90.7255 265.197C93.4443 265.469 97.6448 265.604 103.318 265.604V264.909C97.6487 264.909 93.4771 264.774 90.7946 264.506L90.7255 265.197ZM94.2034 197.547C96.5054 197.547 99.2113 197.479 102.32 197.344L102.29 196.65C99.1879 196.785 96.4925 196.853 94.2034 196.853V197.547ZM102.334 197.343C105.578 197.073 108.217 196.802 110.251 196.531L110.159 195.843C108.141 196.112 105.514 196.381 102.276 196.651L102.334 197.343ZM110.319 196.515C116.586 194.335 121.704 190.857 125.663 186.079L125.128 185.636C121.256 190.309 116.247 193.718 110.091 195.859L110.319 196.515ZM125.663 186.079C129.767 181.154 131.82 175.404 131.82 168.843H131.125C131.125 175.245 129.127 180.838 125.129 185.635L125.663 186.079ZM131.82 168.843C131.82 159.858 129.094 153.062 123.591 148.523L123.149 149.059C128.45 153.431 131.125 160.004 131.125 168.843H131.82ZM123.595 148.526C118.249 144.003 111.073 141.759 102.103 141.759V142.454C110.957 142.454 117.959 144.667 123.146 149.056L123.595 148.526ZM102.103 141.759C97.9135 141.759 94.3295 141.827 91.3519 141.962L91.3835 142.656C94.3473 142.521 97.9201 142.454 102.103 142.454V141.759ZM91.3519 141.962C88.3755 142.097 85.9326 142.301 84.0268 142.573L84.1251 143.261C86.0001 142.993 88.4185 142.791 91.3835 142.656L91.3519 141.962ZM83.7286 142.917V197.2H84.4232V142.917H83.7286ZM84.0759 197.547H94.2034V196.853H84.0759V197.547Z'
              fill={svgFillColor}
            />
            <path
              d='M62.0415 212H9.79603V206.082C15.1022 203.633 20.5444 202 26.1227 201.184V80.1618C23.4016 79.6176 20.6805 78.9373 17.9594 78.121C15.2383 77.1686 12.5171 76.1481 9.79603 75.0597V69.1413H62.0415V75.0597C59.5925 76.1481 56.9394 77.1686 54.0822 78.121C51.2251 78.9373 48.4359 79.6176 45.7148 80.1618V201.184C48.572 201.728 51.4291 202.408 54.2863 203.224C57.1435 204.041 59.7286 204.993 62.0415 206.082V212Z'
              fill={svgFillColor}
            />
            <path
              d='M62.0415 212V212.347H62.3888V212H62.0415ZM9.79603 212H9.44873V212.347H9.79603V212ZM9.79603 206.082L9.65049 205.766L9.44873 205.859V206.082H9.79603ZM26.1227 201.184L26.173 201.527L26.47 201.484V201.184H26.1227ZM26.1227 80.1618H26.47V79.8771L26.1908 79.8213L26.1227 80.1618ZM17.9594 78.121L17.8447 78.4488L17.8521 78.4514L17.8596 78.4536L17.9594 78.121ZM9.79603 75.0597H9.44873V75.2948L9.66705 75.3822L9.79603 75.0597ZM9.79603 69.1413V68.794H9.44873V69.1413H9.79603ZM62.0415 69.1413H62.3888V68.794H62.0415V69.1413ZM62.0415 75.0597L62.1826 75.3771L62.3888 75.2854V75.0597H62.0415ZM54.0822 78.121L54.1776 78.4549L54.1849 78.4528L54.1921 78.4504L54.0822 78.121ZM45.7148 80.1618L45.6467 79.8213L45.3675 79.8771V80.1618H45.7148ZM45.7148 201.184H45.3675V201.471L45.6498 201.525L45.7148 201.184ZM62.0415 206.082H62.3888V205.861L62.1894 205.767L62.0415 206.082ZM62.0415 211.653H9.79603V212.347H62.0415V211.653ZM10.1433 212V206.082H9.44873V212H10.1433ZM9.94156 206.397C15.2186 203.961 20.6289 202.339 26.173 201.527L26.0725 200.84C20.46 201.661 14.9858 203.304 9.65049 205.766L9.94156 206.397ZM26.47 201.184V80.1618H25.7754V201.184H26.47ZM26.1908 79.8213C23.4807 79.2792 20.7701 78.6016 18.0592 77.7883L17.8596 78.4536C20.5909 79.273 23.3226 79.9559 26.0546 80.5023L26.1908 79.8213ZM18.0741 77.7932C15.3579 76.8425 12.6415 75.8238 9.92501 74.7373L9.66705 75.3822C12.3928 76.4725 15.1187 77.4947 17.8447 78.4488L18.0741 77.7932ZM10.1433 75.0597V69.1413H9.44873V75.0597H10.1433ZM9.79603 69.4886H62.0415V68.794H9.79603V69.4886ZM61.6942 69.1413V75.0597H62.3888V69.1413H61.6942ZM61.9005 74.7423C59.4628 75.8257 56.8203 76.8422 53.9724 77.7915L54.1921 78.4504C57.0586 77.4949 59.7222 76.4706 62.1826 75.3771L61.9005 74.7423ZM53.9868 77.787C51.138 78.601 48.358 79.279 45.6467 79.8213L45.7829 80.5023C48.5138 79.9562 51.3121 79.2736 54.1776 78.4549L53.9868 77.787ZM45.3675 80.1618V201.184H46.0621V80.1618H45.3675ZM45.6498 201.525C48.4965 202.067 51.3435 202.745 54.1909 203.558L54.3817 202.89C51.5147 202.071 48.6474 201.389 45.7798 200.842L45.6498 201.525ZM54.1909 203.558C57.0329 204.37 59.6001 205.316 61.8936 206.396L62.1894 205.767C59.857 204.67 57.2541 203.711 54.3817 202.89L54.1909 203.558ZM61.6942 206.082V212H62.3888V206.082H61.6942Z'
              fill={svgFillColor}
            />
          </svg>
        </Link>
        <div className='flex justify-end items-center w w-full gap-10 relative'>
          <Link
            href='#about-us'
            className=' font-semibold'
            style={{ color: svgFillColor }}>
            About Us
          </Link>
          <Link
            href='#support'
            className='font-semibold'
            style={{ color: svgFillColor }}>
            Support
          </Link>
          <Link
            href='/blogs'
            className={`font-semibold ${
              currentRoute === '/blogs' && 'underline underline-offset-[12px]'
            }`}
            style={{ color: svgFillColor }}>
            Blog
          </Link>
          {session?.user ? (
            <div className=''>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile icon'
                onClick={() => setToggleDropdown(prev => !prev)}
              />
              {toggleDropdown && (
                <div className='absolute right-4 top-5 border border-gray-500 bg-white p-3 flex flex-col'>
                  <Link
                    href='/profile'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}>
                    My profile
                  </Link>
                  <Link
                    href='/create-blog'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}>
                    Create Blog
                  </Link>
                  <button
                    type='button'
                    onClick={() => {
                      setToggleDropdown(false)
                      signOut()
                    }}
                    className='mt-5 text-start'>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map(provider => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='text-base font-bold leading-[150%] bg-[rgba(255,255,255,0.15)] rounded-[5px] py-2 px-3 hover:bg-yellow transition-[background-color] ease-in-out'
                    style={{ color: svgFillColor }}>
                    Get access
                  </button>
                ))}
            </>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className='sm:hidden w-full flex justify-between relative p-3'>
        <div className='basis-[108px] my-auto'>
          <Hamburger
            toggleMenu={handleToggleMobileMenu}
            svgFillColor={svgFillColor}
          />
        </div>
        <Link href='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='auto'
            height='auto'
            viewBox='0 0 187 333'
            fill='none'
            className='h-full w-auto'>
            <path
              d='M147.911 24.2337H51.4962C40.5325 24.2337 31.6447 31.9881 31.6447 41.5537V266.87C31.6447 276.435 40.5325 284.19 51.4962 284.19H147.911C158.875 284.19 167.762 276.435 167.762 266.87V41.5537C167.762 31.9881 158.875 24.2337 147.911 24.2337Z'
              stroke='#FBB500'
              strokeWidth='1.95162'
              strokeMiterlimit='10'
            />
            <path
              d='M49.2375 274.574V268.7C54.6388 266.134 60.1752 264.514 65.8465 263.838V143.727C63.1459 143.187 60.3777 142.512 57.542 141.701C54.7064 140.756 51.9382 139.743 49.2375 138.663V132.789H70.7077C73.2733 132.789 75.7039 132.722 77.9995 132.587C80.4301 132.452 82.9282 132.317 85.4938 132.182C88.0594 132.047 90.8276 131.912 93.7983 131.777C96.769 131.642 100.145 131.574 103.926 131.574C109.327 131.574 114.796 132.047 120.332 132.992C126.004 133.802 131.067 135.422 135.523 137.853C140.114 140.284 143.828 143.727 146.664 148.183C149.499 152.504 150.917 158.175 150.917 165.197C150.917 168.708 150.377 172.219 149.297 175.73C148.216 179.241 146.529 182.549 144.233 185.655C142.072 188.625 139.304 191.258 135.928 193.554C132.553 195.85 128.569 197.537 123.978 198.618V199.428C128.029 200.103 132.013 201.251 135.928 202.871C139.979 204.492 143.558 206.72 146.664 209.555C149.769 212.256 152.267 215.632 154.158 219.683C156.183 223.734 157.196 228.595 157.196 234.266C157.196 241.558 155.576 247.837 152.335 253.103C149.094 258.37 144.841 262.691 139.574 266.066C134.443 269.442 128.569 271.94 121.953 273.561C115.336 275.046 108.652 275.789 101.9 275.789C97.1741 275.789 91.8403 275.586 85.8989 275.181C79.9574 274.776 74.2186 274.574 68.6822 274.574H49.2375ZM103.318 265.256C108.179 265.256 112.703 264.514 116.889 263.028C121.21 261.543 124.856 259.517 127.826 256.952C130.932 254.251 133.363 251.078 135.118 247.432C136.874 243.651 137.751 239.6 137.751 235.279C137.751 229.878 136.671 225.422 134.511 221.911C132.485 218.265 129.649 215.429 126.004 213.404C122.493 211.243 118.374 209.758 113.648 208.948C109.057 208.137 104.263 207.732 99.2671 207.732H84.0759V263.636C85.9664 264.176 88.1944 264.581 90.7601 264.851C93.4607 265.121 97.6467 265.256 103.318 265.256ZM94.2034 197.2C96.4989 197.2 99.1996 197.132 102.305 196.997C105.546 196.727 108.179 196.457 110.205 196.187C116.416 194.027 121.48 190.583 125.396 185.857C129.447 180.996 131.472 175.325 131.472 168.843C131.472 159.931 128.772 153.247 123.37 148.791C118.104 144.335 111.015 142.107 102.103 142.107C97.9168 142.107 94.3384 142.174 91.3677 142.309C88.397 142.444 85.9664 142.647 84.0759 142.917V197.2H94.2034Z'
              fill={svgFillColor}
            />
            <path
              d='M49.2375 274.574H48.8902V274.921H49.2375V274.574ZM49.2375 268.7L49.0885 268.386L48.8902 268.48V268.7H49.2375ZM65.8465 263.838L65.8876 264.183L66.1938 264.147V263.838H65.8465ZM65.8465 143.727H66.1938V143.442L65.9147 143.386L65.8465 143.727ZM57.542 141.701L57.4322 142.031L57.4394 142.033L57.4466 142.035L57.542 141.701ZM49.2375 138.663H48.8902V138.898L49.1086 138.986L49.2375 138.663ZM49.2375 132.789V132.442H48.8902V132.789H49.2375ZM77.9995 132.587L77.9802 132.24L77.9791 132.24L77.9995 132.587ZM85.4938 132.182L85.512 132.528L85.512 132.528L85.4938 132.182ZM93.7983 131.777L93.7825 131.43L93.7825 131.43L93.7983 131.777ZM120.332 132.992L120.274 133.334L120.283 133.336L120.332 132.992ZM135.523 137.853L135.357 138.158L135.361 138.16L135.523 137.853ZM146.664 148.183L146.371 148.369L146.373 148.374L146.664 148.183ZM149.297 175.73L148.965 175.628L148.965 175.628L149.297 175.73ZM144.233 185.655L143.954 185.448L143.952 185.45L144.233 185.655ZM135.928 193.554L136.124 193.841L136.124 193.841L135.928 193.554ZM123.978 198.618L123.899 198.28L123.631 198.343V198.618H123.978ZM123.978 199.428H123.631V199.722L123.921 199.77L123.978 199.428ZM135.928 202.871L135.796 203.192L135.799 203.194L135.928 202.871ZM146.664 209.555L146.429 209.812L146.436 209.817L146.664 209.555ZM154.158 219.683L153.843 219.83L153.847 219.838L154.158 219.683ZM152.335 253.103L152.631 253.285L152.631 253.285L152.335 253.103ZM139.574 266.066L139.387 265.774L139.383 265.776L139.574 266.066ZM121.953 273.561L122.029 273.9L122.035 273.898L121.953 273.561ZM116.889 263.028L116.776 262.7L116.773 262.701L116.889 263.028ZM127.826 256.952L128.053 257.215L128.054 257.214L127.826 256.952ZM135.118 247.432L135.431 247.583L135.433 247.578L135.118 247.432ZM134.511 221.911L134.207 222.079L134.211 222.086L134.215 222.093L134.511 221.911ZM126.004 213.404L125.822 213.7L125.828 213.704L125.835 213.707L126.004 213.404ZM113.648 208.948L113.588 209.29L113.589 209.29L113.648 208.948ZM84.0759 207.732V207.385H83.7286V207.732H84.0759ZM84.0759 263.636H83.7286V263.898L83.9805 263.97L84.0759 263.636ZM90.7601 264.851L90.7237 265.197L90.7255 265.197L90.7601 264.851ZM102.305 196.997L102.32 197.345L102.334 197.343L102.305 196.997ZM110.205 196.187L110.251 196.531L110.286 196.527L110.319 196.515L110.205 196.187ZM125.396 185.857L125.129 185.635L125.128 185.636L125.396 185.857ZM123.37 148.791L123.146 149.056L123.149 149.059L123.37 148.791ZM91.3677 142.309L91.3519 141.962L91.3519 141.962L91.3677 142.309ZM84.0759 142.917L84.0268 142.573L83.7286 142.616V142.917H84.0759ZM84.0759 197.2H83.7286V197.547H84.0759V197.2ZM49.5848 274.574V268.7H48.8902V274.574H49.5848ZM49.3865 269.013C54.7554 266.463 60.2554 264.854 65.8876 264.183L65.8055 263.494C60.0949 264.173 54.5223 265.805 49.0885 268.386L49.3865 269.013ZM66.1938 263.838V143.727H65.4992V263.838H66.1938ZM65.9147 143.386C63.2238 142.848 60.4648 142.175 57.6374 141.368L57.4466 142.035C60.2907 142.848 63.068 143.525 65.7784 144.067L65.9147 143.386ZM57.6519 141.372C54.8225 140.429 52.0607 139.418 49.3665 138.341L49.1086 138.986C51.8157 140.069 54.5903 141.084 57.4322 142.031L57.6519 141.372ZM49.5848 138.663V132.789H48.8902V138.663H49.5848ZM49.2375 133.137H70.7077V132.442H49.2375V133.137ZM70.7077 133.137C73.2794 133.137 75.7168 133.069 78.0199 132.933L77.9791 132.24C75.691 132.375 73.2673 132.442 70.7077 132.442V133.137ZM78.0187 132.934C80.449 132.799 82.9467 132.663 85.512 132.528L85.4755 131.835C82.9096 131.97 80.4112 132.105 77.9802 132.24L78.0187 132.934ZM85.512 132.528C88.0767 132.393 90.844 132.258 93.8141 132.123L93.7825 131.43C90.8111 131.565 88.0421 131.7 85.4755 131.835L85.512 132.528ZM93.8141 132.123C96.7783 131.989 100.149 131.921 103.926 131.921V131.227C100.141 131.227 96.7597 131.294 93.7825 131.43L93.8141 132.123ZM103.926 131.921C109.307 131.921 114.756 132.392 120.274 133.334L120.391 132.65C114.836 131.701 109.347 131.227 103.926 131.227V131.921ZM120.283 133.336C125.919 134.141 130.942 135.75 135.357 138.158L135.69 137.548C131.193 135.095 126.089 133.463 120.381 132.648L120.283 133.336ZM135.361 138.16C139.898 140.562 143.567 143.963 146.371 148.369L146.957 147.997C144.089 143.491 140.331 140.005 135.686 137.546L135.361 138.16ZM146.373 148.374C149.161 152.621 150.57 158.22 150.57 165.197H151.264C151.264 158.131 149.838 152.387 146.954 147.992L146.373 148.374ZM150.57 165.197C150.57 168.672 150.035 172.148 148.965 175.628L149.629 175.832C150.719 172.289 151.264 168.744 151.264 165.197H150.57ZM148.965 175.628C147.897 179.099 146.227 182.372 143.954 185.448L144.512 185.861C146.83 182.725 148.536 179.382 149.629 175.832L148.965 175.628ZM143.952 185.45C141.818 188.385 139.08 190.991 135.733 193.267L136.124 193.841C139.529 191.526 142.327 188.865 144.514 185.859L143.952 185.45ZM135.733 193.267C132.397 195.535 128.455 197.208 123.899 198.28L124.058 198.956C128.684 197.867 132.708 196.164 136.124 193.841L135.733 193.267ZM123.631 198.618V199.428H124.325V198.618H123.631ZM123.921 199.77C127.945 200.441 131.903 201.581 135.796 203.192L136.061 202.55C132.122 200.92 128.113 199.765 124.035 199.085L123.921 199.77ZM135.799 203.194C139.813 204.799 143.356 207.005 146.429 209.812L146.898 209.299C143.76 206.434 140.146 204.184 136.057 202.549L135.799 203.194ZM146.436 209.817C149.502 212.483 151.971 215.819 153.843 219.83L154.473 219.536C152.563 215.445 150.037 212.028 146.891 209.293L146.436 209.817ZM153.847 219.838C155.843 223.83 156.849 228.636 156.849 234.266H157.543C157.543 228.554 156.523 223.637 154.468 219.527L153.847 219.838ZM156.849 234.266C156.849 241.505 155.241 247.719 152.039 252.921L152.631 253.285C155.911 247.955 157.543 241.611 157.543 234.266H156.849ZM152.039 252.921C148.826 258.143 144.61 262.426 139.387 265.774L139.762 266.359C145.071 262.955 149.362 258.597 152.631 253.285L152.039 252.921ZM139.383 265.776C134.289 269.128 128.452 271.611 121.87 273.223L122.035 273.898C128.686 272.269 134.597 269.756 139.765 266.357L139.383 265.776ZM121.877 273.222C115.285 274.702 108.626 275.442 101.9 275.442V276.136C108.678 276.136 115.387 275.391 122.029 273.9L121.877 273.222ZM101.9 275.442C97.1837 275.442 91.858 275.239 85.9225 274.835L85.8753 275.528C91.8226 275.933 97.1645 276.136 101.9 276.136V275.442ZM85.9225 274.835C79.9738 274.429 74.227 274.226 68.6822 274.226V274.921C74.2101 274.921 79.9411 275.123 85.8753 275.528L85.9225 274.835ZM68.6822 274.226H49.2375V274.921H68.6822V274.226ZM103.318 265.604C108.215 265.604 112.778 264.855 117.005 263.356L116.773 262.701C112.627 264.172 108.143 264.909 103.318 264.909V265.604ZM117.002 263.357C121.358 261.859 125.044 259.813 128.053 257.215L127.599 256.689C124.667 259.221 121.062 261.227 116.776 262.7L117.002 263.357ZM128.054 257.214C131.195 254.483 133.655 251.272 135.431 247.583L134.805 247.281C133.071 250.884 130.669 254.019 127.599 256.69L128.054 257.214ZM135.433 247.578C137.211 243.75 138.099 239.649 138.099 235.279H137.404C137.404 239.551 136.537 243.552 134.803 247.286L135.433 247.578ZM138.099 235.279C138.099 229.833 137.01 225.309 134.806 221.729L134.215 222.093C136.333 225.534 137.404 229.922 137.404 235.279H138.099ZM134.814 221.742C132.757 218.04 129.875 215.157 126.172 213.1L125.835 213.707C129.424 215.701 132.213 218.49 134.207 222.079L134.814 221.742ZM126.186 213.108C122.631 210.921 118.47 209.422 113.707 208.605L113.589 209.29C118.279 210.094 122.354 211.566 125.822 213.7L126.186 213.108ZM113.708 208.606C109.096 207.792 104.282 207.385 99.2671 207.385V208.08C104.245 208.08 109.018 208.483 113.588 209.29L113.708 208.606ZM99.2671 207.385H84.0759V208.08H99.2671V207.385ZM83.7286 207.732V263.636H84.4232V207.732H83.7286ZM83.9805 263.97C85.8952 264.517 88.1439 264.925 90.7237 265.197L90.7964 264.506C88.245 264.237 86.0376 263.835 84.1713 263.302L83.9805 263.97ZM90.7255 265.197C93.4443 265.469 97.6448 265.604 103.318 265.604V264.909C97.6487 264.909 93.4771 264.774 90.7946 264.506L90.7255 265.197ZM94.2034 197.547C96.5054 197.547 99.2113 197.479 102.32 197.344L102.29 196.65C99.1879 196.785 96.4925 196.853 94.2034 196.853V197.547ZM102.334 197.343C105.578 197.073 108.217 196.802 110.251 196.531L110.159 195.843C108.141 196.112 105.514 196.381 102.276 196.651L102.334 197.343ZM110.319 196.515C116.586 194.335 121.704 190.857 125.663 186.079L125.128 185.636C121.256 190.309 116.247 193.718 110.091 195.859L110.319 196.515ZM125.663 186.079C129.767 181.154 131.82 175.404 131.82 168.843H131.125C131.125 175.245 129.127 180.838 125.129 185.635L125.663 186.079ZM131.82 168.843C131.82 159.858 129.094 153.062 123.591 148.523L123.149 149.059C128.45 153.431 131.125 160.004 131.125 168.843H131.82ZM123.595 148.526C118.249 144.003 111.073 141.759 102.103 141.759V142.454C110.957 142.454 117.959 144.667 123.146 149.056L123.595 148.526ZM102.103 141.759C97.9135 141.759 94.3295 141.827 91.3519 141.962L91.3835 142.656C94.3473 142.521 97.9201 142.454 102.103 142.454V141.759ZM91.3519 141.962C88.3755 142.097 85.9326 142.301 84.0268 142.573L84.1251 143.261C86.0001 142.993 88.4185 142.791 91.3835 142.656L91.3519 141.962ZM83.7286 142.917V197.2H84.4232V142.917H83.7286ZM84.0759 197.547H94.2034V196.853H84.0759V197.547Z'
              fill={svgFillColor}
            />
            <path
              d='M62.0415 212H9.79603V206.082C15.1022 203.633 20.5444 202 26.1227 201.184V80.1618C23.4016 79.6176 20.6805 78.9373 17.9594 78.121C15.2383 77.1686 12.5171 76.1481 9.79603 75.0597V69.1413H62.0415V75.0597C59.5925 76.1481 56.9394 77.1686 54.0822 78.121C51.2251 78.9373 48.4359 79.6176 45.7148 80.1618V201.184C48.572 201.728 51.4291 202.408 54.2863 203.224C57.1435 204.041 59.7286 204.993 62.0415 206.082V212Z'
              fill={svgFillColor}
            />
            <path
              d='M62.0415 212V212.347H62.3888V212H62.0415ZM9.79603 212H9.44873V212.347H9.79603V212ZM9.79603 206.082L9.65049 205.766L9.44873 205.859V206.082H9.79603ZM26.1227 201.184L26.173 201.527L26.47 201.484V201.184H26.1227ZM26.1227 80.1618H26.47V79.8771L26.1908 79.8213L26.1227 80.1618ZM17.9594 78.121L17.8447 78.4488L17.8521 78.4514L17.8596 78.4536L17.9594 78.121ZM9.79603 75.0597H9.44873V75.2948L9.66705 75.3822L9.79603 75.0597ZM9.79603 69.1413V68.794H9.44873V69.1413H9.79603ZM62.0415 69.1413H62.3888V68.794H62.0415V69.1413ZM62.0415 75.0597L62.1826 75.3771L62.3888 75.2854V75.0597H62.0415ZM54.0822 78.121L54.1776 78.4549L54.1849 78.4528L54.1921 78.4504L54.0822 78.121ZM45.7148 80.1618L45.6467 79.8213L45.3675 79.8771V80.1618H45.7148ZM45.7148 201.184H45.3675V201.471L45.6498 201.525L45.7148 201.184ZM62.0415 206.082H62.3888V205.861L62.1894 205.767L62.0415 206.082ZM62.0415 211.653H9.79603V212.347H62.0415V211.653ZM10.1433 212V206.082H9.44873V212H10.1433ZM9.94156 206.397C15.2186 203.961 20.6289 202.339 26.173 201.527L26.0725 200.84C20.46 201.661 14.9858 203.304 9.65049 205.766L9.94156 206.397ZM26.47 201.184V80.1618H25.7754V201.184H26.47ZM26.1908 79.8213C23.4807 79.2792 20.7701 78.6016 18.0592 77.7883L17.8596 78.4536C20.5909 79.273 23.3226 79.9559 26.0546 80.5023L26.1908 79.8213ZM18.0741 77.7932C15.3579 76.8425 12.6415 75.8238 9.92501 74.7373L9.66705 75.3822C12.3928 76.4725 15.1187 77.4947 17.8447 78.4488L18.0741 77.7932ZM10.1433 75.0597V69.1413H9.44873V75.0597H10.1433ZM9.79603 69.4886H62.0415V68.794H9.79603V69.4886ZM61.6942 69.1413V75.0597H62.3888V69.1413H61.6942ZM61.9005 74.7423C59.4628 75.8257 56.8203 76.8422 53.9724 77.7915L54.1921 78.4504C57.0586 77.4949 59.7222 76.4706 62.1826 75.3771L61.9005 74.7423ZM53.9868 77.787C51.138 78.601 48.358 79.279 45.6467 79.8213L45.7829 80.5023C48.5138 79.9562 51.3121 79.2736 54.1776 78.4549L53.9868 77.787ZM45.3675 80.1618V201.184H46.0621V80.1618H45.3675ZM45.6498 201.525C48.4965 202.067 51.3435 202.745 54.1909 203.558L54.3817 202.89C51.5147 202.071 48.6474 201.389 45.7798 200.842L45.6498 201.525ZM54.1909 203.558C57.0329 204.37 59.6001 205.316 61.8936 206.396L62.1894 205.767C59.857 204.67 57.2541 203.711 54.3817 202.89L54.1909 203.558ZM61.6942 206.082V212H62.3888V206.082H61.6942Z'
              fill={svgFillColor}
            />
          </svg>
        </Link>
        {session?.user ? (
          <div className='flex max-h-[37px]'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile icon'
              onClick={() => setToggleDropdown(prev => !prev)}
            />
            {toggleDropdown && (
              <div className='absolute right-4 top-5 border border-gray-500 bg-white p-3 flex flex-col'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  My profile
                </Link>
                <Link
                  href='/create-blog'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  Create Blog
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false)
                    signOut()
                  }}
                  className='mt-5 text-start'>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map(provider => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  style={{ color: svgFillColor }}
                  className='text-base font-bold leading-[150%] bg-[rgba(255,255,255,0.15)] rounded-[5px] py-2 px-3 hover:bg-yellow transition-[background-color] ease-in-out'>
                  Get access
                </button>
              ))}
          </>
        )}
        <MobileNav
          isActive={toggleMobileMenu}
          handleClose={handleToggleMobileMenu}
        />
      </div>
    </nav>
  )
}

export default Nav
