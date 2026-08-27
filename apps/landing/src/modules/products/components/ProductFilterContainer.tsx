import { cn } from '@/lib/utils'
import { useState } from 'react'

interface ProductFilterContainerProps {
    className? : string,
    data: string[],
    title: string
}

const ProductFilterContainer = ({title, data, className} : ProductFilterContainerProps) => {
    const [selected, setSelected] = useState("Semua")
    const onChangeFilter = (value: string) => {
        setSelected(value)
    }
    return (
        <section className={cn('w-full', className)}>
            <h4 className="font-semibold text-lg text-secondary-900">{title}</h4>
            <main className="w-full ml-3 flex flex-col gap-y-1 mt-2">
            {data.map((item: string, index: number) => {
                return (
                <div key={index} className="flex flex-row-reverse items-center justify-end gap-x-1">
                    <label className={` text-sm ${selected === item ?  'text-primary-500 font-semibold' : 'text-secondary-600'} hover:text-primary-500`} htmlFor={item}>{item}</label>
                    <input onChange={() => onChangeFilter(item)} 
                        className={`w-3 h-3 rounded-2xl border border-secondary-600 bg-primary-500}`} 
                        type="checkbox" name={item} id={item} value={item} 
                        checked={selected === item}  />
                </div>
                )
            })}
            </main>
        </section>
  )
}

export default ProductFilterContainer