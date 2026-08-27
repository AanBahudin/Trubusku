import { Button, SocialMedia, Wrapper } from "@/shared/components"
import { SendHorizonal } from "lucide-react"
import map from '@/assets/images/map.png'

const ContactSection = () => {
  return (
    <section className="w-full py-20 bg-background">
            <Wrapper className="flex flex-col xl:flex-row items-start justify-between gap-x-20">
                {/* left side */}
                <section className="flex-1">
                    <h4 className="text-2xl text-primary-700">Hubungi Kami</h4>
                    <h1 className="text-3xl lg:text-4xl text-primary-900 font-bold">Kami Selalu Siap Membantu dan <br /> Menjawab Pertanyaan Anda</h1>
                    <p className="text-secondary-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit nunc ut hendrerit imperdiet.</p>

                    {/* detail section */}
                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 mt-8">
                        <div>
                            <h5 className="font-semibold text-secondary-900">Social Media</h5>
                            <SocialMedia className="w-full flex items-start justify-start " />
                        </div>

                        <div>
                            <h5 className="font-semibold text-secondary-900">Lokasi Kami</h5>
                            <p className="text-sm text-secondary-400 leading-relaxed">Jl. Lingkar Selatan, Harjatani, Kramatwatu Cilegon, Banten</p>
                        </div>

                        <div>
                            <h5 className="font-semibold text-secondary-900">Email</h5>
                            <p className="text-sm text-zinc-500 leading-relaxed">Trubusku@gmail.com</p>
                        </div>            
                    </main>
                </section>


                {/* right side */}
                <section className="w-full xl:w-142 min-h-75 rounded-2xl bg-background-card border border-slate-200 p-6 shadow-2xl mt-6 lg:mt-0">
                    <h2 className="text-primary-900 text-lg font-semibold">Hubungi Kami</h2>
                    <p className="text-secondary-500 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi voluptas debitis corrupti unde! Vero modi unde sunt</p>

                    <main className="w-full flex flex-col gap-y-1 my-4">
                        <label className="text-[14px]" htmlFor="name">Nama</label>
                        <input type="text" id="name" name="name" className="px-2 py-2 rounded-xl border border-slate-200 focus:outline-primary-100/50" />
                    </main>

                    <main className="w-full flex flex-col gap-y-1 my-4">
                        <label className="text-[14px]" htmlFor="name">Pesan</label>
                        <textarea id="name" name="name" className="px-2 py-2 rounded-xl border border-slate-200 resize-none" rows={5}/>
                    </main>

                    <Button className="w-full bg-primary-700 flex items-center justify-center gap-x-2">
                        Kirim pesan
                        <SendHorizonal className="w-4" />
                    </Button>
                </section>
            </Wrapper>


            <img src={map} className="w-[90%] lg:w-[80%] mx-auto rounded-3xl h-[40vh] md:h-[60vh] object-cover bg-primary-50 mt-10" />
        
    </section>
  )
}

export default ContactSection