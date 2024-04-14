import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Logo from '../common/Logo'

function Layout() {
    return (
        <>
            <Header />
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export function LayoutType2() {
    return (
        <>
            <Logo />
            <Outlet />
        </>
    )
}

export default Layout
