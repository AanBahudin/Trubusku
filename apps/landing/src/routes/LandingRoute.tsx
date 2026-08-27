import LandingContactPage from "@/modules/contacts/pages/LandingContactPage";
import LandingGaleriPage from "@/modules/gallery/pages/LandingGaleriPage";
import Homepage from "@/modules/home/pages/Homepage";
import LandingClientPage from "@/modules/klien/pages/LandingClientPage";
import LandingLayananPage from "@/modules/layanan/pages/LandingLayananPage";
import LandingPortfolioPage from "@/modules/portfolio/pages/LandingPortfolioPage";
import LandingProductPage from "@/modules/products/pages/LandingProductPage";
import LandingLayout from "@/shared/pages/LandingLayout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingLayout />,
        children: [
            {index: true, element: <Homepage />},
            {path: 'produk', id: 'produk', element: <LandingProductPage />},
            {path: 'layanan', id:'layanan', element: <LandingLayananPage />},
            {path: 'kontak', id:'kontak', element: <LandingContactPage />},
            {path: 'client', id:'client', element: <LandingClientPage />},
            {path: 'portfolio', id:'portfolio', element: <LandingPortfolioPage />},
            {path: 'galeri', id:'galeri', element: <LandingGaleriPage />}
        ]
    }
])

export default router