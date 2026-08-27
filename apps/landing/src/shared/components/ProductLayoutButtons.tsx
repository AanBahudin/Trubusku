import { LayoutGrid, LayoutList } from 'lucide-react'
import { useEffect, useState } from 'react'

const ProductLayoutButtons = () => {

    const [layout, setLayout] = useState<undefined | string>(undefined)
    const layoutHandle = (lay: string) => {
        if (lay === layout) {
            return
        }
        setLayout(lay)
        localStorage.setItem('layout', lay)
    }

    useEffect(() => {
        const currentLayout = localStorage.getItem('layout')
        if (!currentLayout) {
            setLayout("grid")
        } else {
            setLayout(currentLayout)
        }
    }, [])

    return (
        <section className='flex items-center justify-center gap-x-1'>
            <main 
                className={`w-10 h-10 rounded-xl hover:shadow-md duration-200 ease-in-out ${layout === 'grid' ? 'bg-primary-300' : 'bg-secondary-100'} border border-slate-100 flex items-center justify-center group`} 
                onClick={() => layoutHandle('grid')}>
                <LayoutGrid className={`${layout === "grid" ? "stroke-background" : "stroke-secondary-700 group-hover:stroke-secondary-900"}`} />
            </main>

            <main 
                className={`w-10 h-10 rounded-xl hover:shadow-md duration-200 ease-in-out ${layout === 'list' ? 'bg-primary-300' : 'bg-secondary-100'} border border-slate-100 flex items-center justify-center group`} 
                onClick={() => layoutHandle('list')}>
                <LayoutList className={`${layout === "list" ? "stroke-background" : "stroke-secondary-700 group-hover:stroke-secondary-900"}`} />
            </main>
        </section>
    )
}

export default ProductLayoutButtons