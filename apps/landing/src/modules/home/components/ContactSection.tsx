import { Wrapper } from "@/shared/components"

const ContactSection = () => {
  return (
    <Wrapper className="flex items-start justify-between gap-x-20">
        {/* left side */}
        <section className="flex-1">
            <h4 className="text-2xl text-zinc-800">Hubungi Kami</h4>
            <h1 className="text-4xl text-zinc-800 font-semibold">Kami Selalu Siap Membantu dan <br /> Menjawab Pertanyaan Anda</h1>
            <p className="text-[16px] text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit nunc ut hendrerit imperdiet.</p>

            {/* detail section */}
            <main className="grid grid-cols-2 gap-y-6 mt-8">
                <div>
                    <h5 className="text-[18px] text-zinc-800">Social Media</h5>
                </div>

                <div>
                    <h5 className="text-[18px] text-zinc-800">Lokasi Kami</h5>
                    <p className="text-[14px] text-zinc-500 leading-relaxed">Jl. Lingkar Selatan, Harjatani, Kramatwatu Cilegon, Banten</p>
                </div>

                <div>
                    <h5 className="text-[18px] text-zinc-800">Email</h5>
                    <p className="text-[14px] text-zinc-500 leading-relaxed">Trubusku@gmail.com</p>
                </div>            
            </main>
        </section>


        {/* right side */}
        <section className="w-142 min-h-75 bg-zinc-100 rounded-md p-6">
            <h2 className="text-zinc-800 text-lg font-semibold">Hubungi Kami</h2>
            <p className="text-zinc-500 text-[14px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi voluptas debitis corrupti unde! Vero modi unde sunt</p>

            <main className="w-full flex flex-col gap-y-1 my-4">
                <label className="text-[14px]" htmlFor="name">Nama</label>
                <input type="text" id="name" name="name" className="px-2 py-2 rounded-md border border-zinc-200" />
            </main>

            <main className="w-full flex flex-col gap-y-1 my-4">
                <label className="text-[14px]" htmlFor="name">Pesan</label>
                <textarea id="name" name="name" className="px-2 py-2 rounded-md border border-zinc-200 resize-none" rows={5} />
            </main>

            <button className="text-[14px] bg-[#A8BDA9] w-full rounded-md py-2">Kirim pesan</button>
        </section>
    </Wrapper>
  )
}

export default ContactSection