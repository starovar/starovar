import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import TimelineSection from '@/components/TImelineSection'
import HerotextanimatedSection from '@/components/HerotextanimatedSection'
import TimelineSection2 from '@/components/TimelineSection2'
import TimelineSection3 from '@/components/TImelineSection3'
import HeadlessuiTabs from '@/components/HeadlessuiTabs'
import HeadlessuiAccordion from '@/components/HeadlessuiAccordion'

const Components = () => {
    return (
      <div>
        <Head>
          <title>Components</title>
          <meta name="description" content="Learn more about our company" />
        </Head>

      <main className={styles.main}>

        <TimelineSection />
        <HerotextanimatedSection />
        <TimelineSection2 />
        <TimelineSection3 />
        <HeadlessuiTabs />
        <HeadlessuiAccordion />

      </main>

    </div>
    )
  }
  export default Components;