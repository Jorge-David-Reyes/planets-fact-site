import {createBrowserRouter} from 'react-router-dom'
import { MercuryPage, VenusPage, EarthPage, MarsPage, 
        JupiterPage, SaturnPage, UranusPage, NeptunePage 
} from '@/planetfact/pages';

export const router = createBrowserRouter([
    { path: '/', element: <MercuryPage /> },
    { path: '/mercury', element: <MercuryPage /> },
    { path: '/venus', element: <VenusPage /> },
    { path: '/earth', element: <EarthPage /> },
    { path: '/mars', element: <MarsPage /> },
    { path: '/jupiter', element: <JupiterPage /> },
    { path: '/saturn', element: <SaturnPage /> },
    { path: '/uranus', element: <UranusPage /> },
    { path: '/neptune', element: <NeptunePage /> },
]);