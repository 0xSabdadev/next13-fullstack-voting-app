import Form from './Form'

interface Props {}
export default function CandidateForm(props: Props) {
    return (
        <div className='flex flex-col border border-zinc-100 p-5'>
            <h1 className='flex w-1/2 md:w-full bg-zinc-100 aspect-square justify-center items-center self-center text-center text-4xl md:text-xl  rounded-full '>
                1
            </h1>
            <label className='text-sm mt-3 mb-1'>Nama Kandidat</label>
            <Form onChange={() => {}} value={''} placeHolder={'Masukkan Nama Kandidat'} />
        </div>
    )
}
