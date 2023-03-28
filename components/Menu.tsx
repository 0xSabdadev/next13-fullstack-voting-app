import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
export default function Menu() {
    return (
        <div className='px-20 flex justify-between py-5 '>
            <Link href={'/'}>
                {' '}
                <Image
                    src={'/assets/jujurly.svg'}
                    width={'100'}
                    height={'100'}
                    alt={'logo-img'}></Image>
            </Link>
            <Button text={'Login'} />
        </div>
    )
}
