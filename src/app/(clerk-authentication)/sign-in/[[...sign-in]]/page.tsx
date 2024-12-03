import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page() {
    return (
        <main className='min-h-screen grid grid-cols-2'>
            <section className='bg-navbg h-full text-white'>
                <Link href={'/'}>
                    <h2 className='m-8 inline-block'>WeChat</h2>
                </Link>
            </section>
            <section className='flex items-center justify-center'>
                <SignIn />
            </section>
        </main>
    )
}