import { NavLink } from 'react-router-dom'

export function AppHeader() {
    return (
        <section className="app-header">
            <NavLink className="clean-link" exact to='/'>HOME</NavLink>
            <NavLink className="clean-link" exact to='/board'>BOARD</NavLink>
        </section>
    )
}