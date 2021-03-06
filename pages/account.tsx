import type { NextPage } from 'next'
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

const Account: NextPage = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Image src="/images/profile.jpeg"
        height={144}
        width={144}
        alt="Dylan McClung" />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export default Account