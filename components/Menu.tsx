import Image from 'next/image'
export default function Menu() {
    return (
        <div className='flex'>
            <Image
                src={'/assets/Jujurly.svg'}
                width={'100'}
                height={'100'}
                alt={'logo-img'}></Image>
        </div>
    )
}
