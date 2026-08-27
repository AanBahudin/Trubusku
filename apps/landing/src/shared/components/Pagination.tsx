import { ChevronLeft, ChevronRight } from 'lucide-react'
import { type ReactNode } from 'react'

type PaginationProps = {
    totalPage: number,
    currentPage?: number
}

const Pagination = ({totalPage, currentPage=1} : PaginationProps) => {

    const lastTwoPages = (totalPage - currentPage) 

    return (
        <section className='w-fit flex items-center justify-center gap-x-2'>
            {/* prev button */}
            <PaginationPrevButton />


            {/* last 2 pages */}
            {}

            {Array.from({length: totalPage}).map((_, index: number) => {
                return (
                    <PaginationItem key={index}>{index + 1}</PaginationItem>
                )
            })}



            {/* next button */}
            <PaginationNextButton />
            
        </section>
    )
}

const PaginationPrevButton = () => {
    return (
        <PaginationWrapper>
            <ChevronLeft className='stroke-secondary-700 hover:stroke-secondary-900 ease-in-out duration-150' />
        </PaginationWrapper>
    )
}

const PaginationNextButton = () => {
    return (
        <PaginationWrapper>
            <ChevronRight className='stroke-secondary-700 hover:stroke-secondary-900 ease-in-out duration-150' />
        </PaginationWrapper>
    )
}

const PaginationWrapper = ({children} : {children: ReactNode}) => {
    return (
        <div className='w-10 h-10 rounded-xl text-sm text-secondary-700 flex items-center justify-center hover:bg-primary-100 active:bg-primary-300 duration-150 ease-in-out'>
            {children}
        </div>
    )
}

const PaginationItem = ({children} : {children: ReactNode}) => {
    return (
        <div className='w-10 h-10 rounded-xl border-2 border-secondary-200 font-semibold text-sm text-secondary-700 flex items-center justify-center hover:bg-secondary-100 hover:border-transparent cursor-default active:bg-primary-300 duration-150 ease-in-out'>
            {children}
        </div>
    )
}

export default Pagination