import { useEffect } from 'react'
import Image from 'next/image'
import Contact from './Contact'

const RightSidebar = ({ getUsers, users }) => {
  const style = {
    wrapper: `w-[24rem] text-lg text-white`,
    title: `text-[#afb3b8] font-semibold`,
    adsContainer: ``,
    ad: `flex items-center my-3 mr-[1rem] p-2 rounded-lg`,
    adImageContainer: `h-full w-[50%] flex items-center mr-[0.5rem]`,
    adImage: `object-cover`,
    adLink: `text-[#b0b3b8] text-sm`,
    divider: `w-[95%] border-b border-[0.5px] border-[#3e4042] my-2`,
    contact: `flex items-center my-2`,
    contactImage: `rounded-full object-cover`,
    contactName: `ml-4 text-[1rem]`,
  }

  useEffect(() => {
    ;(async () => {
      await getUsers()
    })()
  }, [])

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Sponsored</div>
      <div className={style.adsContainer}>
        <div className={style.ad}>
          <div className={style.adImageContainer}>
            <Image
              src={
                'https://metaopsgaming.com/wp-content/uploads/2022/04/landing-v2-mobile-970x1024.jpg'
              }
              height={100}
              width={100}
              className={style.adImage}
              alt=''
            />
            ˚
          </div>
          <div>
            <div>The #1 Gaming Project on Solana MetaOps</div>
            <div className={style.adLink}>metaopsgaming.com</div>
          </div>
        </div>
        <div className={style.ad}>
          <div className={style.adImageContainer}>
            <Image
              src={
                'https://www.cityam.com/wp-content/uploads/2021/08/Solana-1.jpg'
              }
              height={100}
              width={100}
              className={style.adImage}
              alt='solana logo'
            />
          </div>
          <div>
            <div>Powerful for developers. Fast for everyone.</div>
            <div className={style.adLink}>solana.com</div>
          </div>
        </div>
        <div className={style.ad}>
          <div className={style.adImageContainer}>
            <Image
              src={
                'https://mma.prnewswire.com/media/1707716/FRACTAL.html'
              }
              height={100}
              width={100}
              className={style.adImage}
              alt=''
            />
          </div>
          <div>
            <div>Twitch Co-Founders announces Fractal, Gaming NFTs on Solana.</div>
            <div className={style.adLink}>fractal.is</div>
          </div>
        </div>
        <div className={style.divider} />
        <div className={style.title}>Contacts</div>
        <div className={style.contactsContainer}>
          {users.map(user => {
            return <Contact key={user.walletAddress} user={user} />
          })}
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
