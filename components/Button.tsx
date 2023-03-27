interface Props {
    text: string
}
export default function Button({text}: Props) {
    return <button className='bg-black px-3 py-2 text-white hover:bg-zinc-800'>{text}</button>
}
