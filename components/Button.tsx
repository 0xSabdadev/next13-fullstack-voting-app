interface Props {
    text: string
    type?: 'primary' | 'secondary'
    nameClass?: string
    width?: string
    fontSize?: string
}
export default function Button(props: Props) {
    return (
        <button
            style={{fontSize: `${props.fontSize}`}}
            className={`rounded-md bg-black border-2 border-black px-5 py-2 text-white hover:bg-zinc-700 hover:border-zinc-700
            ${props.width} 
            ${props.nameClass} 
            ${
                props.type === 'secondary' &&
                'bg-white border-2 border-black px-3 py-2 text-black hover:text-white hover:bg-black'
            }`}>
            {props.text}
        </button>
    )
}
