import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Connect.module.css'

const Connect: NextPage = () => {
  return (
    <div className={styles.container}>
      <Script src="https://kit.fontawesome.com/6061205372.js" crossOrigin='anonymous' />
      <Head>
        <title>Trails Cache</title>
        <meta name="description" content="Hike and Mint" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <span className={styles.title}>
          NFTs for trails
        </span>
        <span className={styles.description}>
          Connect your wallet to check in on the trail, share a photo, and get a cool NFT that supports trail construction and maintenance.
        </span>
        <button className={styles.primaryButton}>Connect</button>
      </div>
      <div className={styles.currentPositionContainer}>
        <span className={styles.currentPosition}>
          Current position: 35.221860, -97.454400
        </span>
        <i className="fas fa-sync-alt fa-2x"></i>
      </div>
      <div className={styles.hikingNearMeContainer}>
        <span className={styles.hikingNearMeTitle}>
          Hiking near me
        </span>
        <input type="text" className={styles.searchBox} defaultValue="Search" />
      </div>
      <div className={styles.trailContainer}>
        <div className={styles.trailDescriptionContainer}>
          <span className={styles.trailTitle}>
            Sutton Wilderness Trail
          </span>
          <span className={styles.trailDescription}>
            This is a beautiful trail within the center of the city.
          </span>
          <span className={styles.trailDistance}>
            5 kms away
          </span>
          <span className={styles.coordinate}>
            Latitude 35.222569 N
          </span>
          <span className={styles.coordinate}>
            Longitude 97.439476 W
          </span>
          <button className={styles.primaryButton}>Claim</button>
          <button className={styles.primaryButton}>See Cache</button>
        </div>
        <Image src="/images/suttonWilderness.jpg" alt="Sutton Wilderness" width="943px" height="426px" priority={true} />
      </div>
    </div>
  )
}

export default Connect
