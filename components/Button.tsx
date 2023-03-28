import {useRouter} from 'next/router'

interface Props {
    text: string
    url?: string
    type?: 'primary' | 'secondary'
    nameClass?: string
    width?: string
    fontSize?: string
}
export default function Button(props: Props) {
    const router = useRouter()
    return (
        <button
            onClick={() => router.push(`${props.url}`)}
            style={{fontSize: `${props.fontSize}`}}
            className={`rounded-md bg-black border-2 border-black px-5 py-2  hover:bg-zinc-700 hover:border-zinc-700
            ${props.width} 
            ${props.nameClass} 
            ${
                props.type === 'secondary' &&
                'bg-white border-2 border-black px-3 py-2 text-black hover:text-white hover:bg-black'
            }
            ${props.type !== 'secondary' && 'text-white'}`}>
            {props.text}
        </button>
    )
}
