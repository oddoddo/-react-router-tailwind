import { Link, useLocation } from 'react-router-dom'
import Button, { GhostButton } from '../button/Button'
import tw from 'twin.macro'
import styled from 'styled-components'

function Header() {
    const location = useLocation()

    return (
        <header className="flex items-center justify-between p-5 border-2 border-gray-600 bg-primary">
            <h1 className="text-3xl font-bold text-secondary">logo</h1>
            <Gnb>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'active' : ''}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={location.pathname === '/login' ? 'active' : ''}>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </Gnb>

            <div>
                <Button default>마이페이지</Button>
                <Button>마이페이지</Button>
            </div>
        </header>
    )
}

// const Gnb = tw.nav`
//     bg-secondary p-3
// `

const Gnb = styled.nav`
    ul {
        ${tw`flex gap-6`}
    }
    li {
        a {
            ${tw`text-white`}
        }
    }
`

export default Header
