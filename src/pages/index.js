import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description='Praising God for life'>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('blog/')}
            >
              Read Posts
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
          <div className='row'>
            <div className={styles.mainText}>
              <p>
                Hi! I am Rocky Jaiswal. I was diagnosed with cancer in December 2019, on this website I write
                about how God held me, helped me and taught me during my difficult times.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
