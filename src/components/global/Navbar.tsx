import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { auth } from '@clerk/nextjs/server'

const Navbar = async () => {
    const { userId } = await auth()
    console.log(userId,"this is user id")
    return (
        <nav className='h-16 center shadow-md bg-navbg'>
            <div className='box flex justify-between items-center'>
                <h2 className='text-primary-foreground relative top-1 font-extrabold'>WeChat</h2>
                <div>
                    <SignedOut>
                        <div className='flex gap-4'>
                            <Link className={buttonVariants({ variant: 'ringHover' })} href={'sign-in'}>Sign in</Link>
                            <Link className={buttonVariants({ variant: 'ringHover' })} href={'/sign-up'}>Sign up</Link>
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
