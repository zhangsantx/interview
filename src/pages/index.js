import React, { useEffect } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'
import anime from 'animejs/lib/anime.es.js'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  useEffect(() => {
    anime({
      targets: '.container',
      translateY: 0,
      translateY: [200, 0], // from 100 to 250
      duration: 700,
      autoplay: true,
      easing: 'easeInOutSine'
    })
  }, [])
  return (
    // <header className={clsx('hero', styles.heroBanner)}>
    //   <div className="container">
    //     <h1 className="hero__title">{siteConfig.title}</h1>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link className="button button--secondary button--lg" to="/docs/intro">
    //         开始
    //       </Link>
    //     </div>
    //   </div>
    // </header>
    <div className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.title}>Hi 这是一份{siteConfig.title}</h1>
        <p className={styles.subtitle}>Hi this is a Front-end interview guide for you </p>
        {/* <div className={styles.buttons}>
          <Link className="button button--secondary" to="/docs/intro">
            开始
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
