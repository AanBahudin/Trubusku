import Button from "@/shared/components/Button"
import { CTAData } from "@/utils/CTAData"
import { MoveRight, type LucideIcon } from "lucide-react"
import { Link } from "react-router"

const CompayOfferCTA = () => {
  return (
    <main className='w-full py-20 bg-background-card'>
      <section className="w-[90%] lg:w-[80%] mx-auto rounded-3xl h-fit lg:min-h-90 bg-linear-to-br from-primary-300 to-primary-700 flex flex-col lg:flex-row  items-center justify-center px-4 py-5 lg:px-10 lg:py-10">
        <div className="w-full lg:w-5/8">
          <h3 className="text-secondary-200 text-sm">UNTUK PERUSAHAAN</h3>
          <h1 className="text-secondary-50 font-bold mt-3 lg:mt-0 text-3xl lg:text-4xl">Percantik Lingkungan Kerja, Tingkatkan <br /> Produktivitas Perusahaan</h1>

          <p className="text-secondary-200 mt-6 lg:mt-8 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aspernatur <br /> dolorum et id dolor sint optio nostrum suscipit! Culpa soluta quae nisi eligendi <br /> similique sequi deleniti cumque quam reprehenderit placeat?</p>

          <Button className="w-1/2 lg:w-1/4 mt-4 rounded-xl text-sm " variant="secondary">
            <Link to='/kontak' className="flex items-center justify-center gap-x-4">
              <span>Jalin Partnership</span>
              <MoveRight className='w-4' strokeWidth={3} />
            </Link>
          </Button>
        </div>

        <div className="w-full lg:w-3/8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-10 lg:mt-0">
          {CTAData.map((item, index: number) => {
            const Icon : LucideIcon = item.icon
            return (
              <main key={index} className="w-full lg:w-fit px-4 cursor-default py-4 flex items-center justify-center flex-col rounded-xl bg-secondary-50/20 border-secondary-100/50 border">
                <div className="p-2 rounded-xl bg-secondary-100">
                  <Icon className="stroke-primary-500" />
                </div>
                <h4 className="text-xs text-secondary-100 my-2 font-bold">{item.title}</h4>
                <p className="text-xs text-justify text-secondary-200">{item.desc}</p>
              </main>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default CompayOfferCTA