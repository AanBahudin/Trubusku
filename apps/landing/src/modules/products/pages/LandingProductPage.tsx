import { HeroSection } from "@/modules/home/components"
import HomeProductCard from "@/modules/home/components/HomeProductCard"
import { Dropdown, Pagination, Wrapper } from "@/shared/components"
import InputForm from "@/shared/components/InputForm"
import ProductLayoutButtons from "@/shared/components/ProductLayoutButtons"
import { Search } from "lucide-react"
import { ProductFilter } from "../components"

const LandingProductPage = () => {
  
  const tipeProdukFilter = ["Semua", "Tanaman", "Pot dan Wadah", "Material & Dekorasi", "Perlengkapan Taman"]
  const tipeTanaman = ["Semua", "Tanaman Buah", "Tanaman Pelindung", "Tanaman Indoor", "Tanaman Gantung", "Tanaman Hias", "Anggrek"]
  const tipePot = ["Semua", "Pot Plastik", "Pot Terakota", "Pot Keramik"]
  const tipePerlengkapan = ["Semua", "Media Tanam", "Aksesoris Taman"]

  return (
    <Wrapper className="w-full lg:w-full min-h-screen pb-70 bg-background-card">
      <HeroSection className="h-[70vh]" />
      <Wrapper>
        <header className="w-full pt-20 pb-6 flex items-center justify-center">
          <h1 className="flex-1 text-secondary-900 font-semibold">Pengaturan Filter</h1>
          <main className="w-6/8 flex items-start justify-between gap-x-4">
            <InputForm className="w-4/8" Icon={Search} name="search" id="search" autoComplete="off" />

            <div className="w-3/8 flex items-center justify-start gap-x-2">
              <Dropdown
                options={['Terbaru', 'Terlama', 'A-Z', 'Z-A']}
                placeholder="Urutkan berdasarkan"
                onChange={(val) => console.log('sort by', val)}
              />
              <ProductLayoutButtons />
            </div>
          </main>
        </header>

        <hr className="border border-slate-200" />

        <main className="w-full flex items-start justify-center">

          <section className="flex-1 flex flex-col gap-y-4 mt-6">
            <ProductFilter data={tipeProdukFilter} title="Tipe Produk"/>
            <ProductFilter data={tipeTanaman} title="Tanaman"/>
            <ProductFilter data={tipePot} title="Pot & Wadah"/>
            <ProductFilter data={tipePerlengkapan} title="Perlengkapan Taman"/>
          </section>

          {/* product container */}
          <section className="w-6/8 flex flex-col items-start justify-center">
            <main className="w-full grid grid-cols-4">
              {Array.from({length: 20}).map((_, index) => (
                <HomeProductCard price={0} title="Lorem Ipsum" key={index} />
              ))}
            </main>

            <main className="w-full flex items-center justify-center mt-20">
              <Pagination totalPage={5} />
            </main>
          </section>
        </main>

      </Wrapper>
    </Wrapper>
  )
}

export default LandingProductPage