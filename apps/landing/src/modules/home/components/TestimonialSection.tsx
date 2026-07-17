import { CircleArrowLeft, CircleArrowRight } from "lucide-react"
import { Wrapper } from "@/shared/components"
import TestimonialCard from "./TestimonialCard"

const TestimonialSection = () => {
  return (
    <Wrapper>
        {/* title and icon section */}
        <section className="flex items-center justify-between">
            <main>
                <h1 className="text-zinc-800 text-2xl">Review Klien Trubusku </h1>
                <h5 className="text-zinc-800 text-4xl font-semibold">Apa yang mereka katakan?</h5>
            </main>

            <main className="flex items-center justify-center gap-x-5">
                <CircleArrowLeft />
                <CircleArrowRight />
            </main>
        </section>


        {/* review cards */}
        <section className="w-full flex items-center justify-between gap-x-6 mt-8">
            {Array.from({length: 5}).map((_, index) => (
                <TestimonialCard key={index} />
            ))}
        </section>
    </Wrapper>
  )
}

export default TestimonialSection