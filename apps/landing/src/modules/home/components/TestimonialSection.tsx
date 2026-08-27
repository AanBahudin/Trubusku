import { CircleArrowLeft, CircleArrowRight } from "lucide-react"
import { Wrapper } from "@/shared/components"
import TestimonialCard from "./TestimonialCard"

const TestimonialSection = () => {
  return (
    <section className="w-full bg-background py-10 lg:py-0">
        <Wrapper className="w-[90%] lg:w-[80%]">
            {/* title and icon section */}
            <section className="flex items-center justify-between">
                <main>
                    <h1 className="text-primary-700 text-2xl">Review Klien Trubusku </h1>
                    <h5 className="text-primary-900 text-3xl lg:text-4xl font-bold">Apa yang mereka katakan?</h5>
                </main>

                <main className="hidden lg:flex items-center justify-center gap-x-5">
                    <CircleArrowLeft className="stroke-primary-300 hover:stroke-primary-500 duration-150 ease-in-out" />
                    <CircleArrowRight className="stroke-primary-300 hover:stroke-primary-500 duration-150 ease-in-out" />
                </main>
            </section>


            {/* review cards */}
            <section className="w-full flex items-center justify-between gap-x-6 py-6 mt-8 mb-10 overflow-x-scroll no-scrollbar">
                {Array.from({length: 5}).map((_, index) => (
                    <TestimonialCard key={index} />
                ))}
            </section>
    </Wrapper>
    </section>
  )
}

export default TestimonialSection