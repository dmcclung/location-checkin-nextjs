import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Connect.module.css'
import { useState } from 'react'

const Connect: NextPage = () => {
  const [connected, setConnected] = useState(true)
  const [showClaimModal, setShowClaimModal] = useState(false)

  const handleClaimClick = () => {
    setShowClaimModal(true)
    console.log("Setting model true")
  }

  return (
    <div className={styles.container}>
      <Script src="https://kit.fontawesome.com/6061205372.js" crossOrigin='anonymous' />
      <Head>
        <title>Trails Cache</title>
        <meta name="description" content="Hike and mint" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        {connected ? (
            <span className={styles.address}>
                Address 0x892a...13d1
            </span>
          ) : (<></>)
        }
      </div>
      <div className={styles.main}>
        <span className={styles.title}>
          NFTs for trails
        </span>
        {connected ? (
          <>
            <span className={styles.description}>Share photos of your adventures on the trails below and get a cool NFT that supports trail construction and maintenance.</span>
          </>
        ) : (
          <>
            <span className={styles.description}>
              Connect your wallet to check in on the trail, share a photo, and get a cool NFT that supports trail construction and maintenance.
            </span>
            <button className={styles.primaryButton}>Connect</button>
          </>
        )}
      </div>
      <div className={styles.currentPositionContainer}>
        <span className={styles.currentPosition}>
          Current position: 35.221860, -97.454400
        </span>
        <i className="fas fa-sync-alt"></i>
      </div>
      <div className={styles.hikingNearMeContainer}>
        <span className={styles.hikingNearMeTitle}>
          Hiking near me
        </span>
        <input type="text" className={styles.searchBox} placeholder="Search" />
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
          <button className={styles.primaryButton} onClick={handleClaimClick}>Claim</button>
          <button className={styles.primaryButton}>See Cache</button>
        </div>
        <Image src="/images/suttonWilderness.jpg" alt="Sutton Wilderness" width="743px" height="426px" priority={true} />
      </div>
    </div>
  )
}

export default Connect
