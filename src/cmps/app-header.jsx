import { NavLink } from 'react-router-dom'

export function AppHeader() {
    return (
        <section className="app-header flex">
            <div className='main-nav'>
                <NavLink activeClassName="selected" className="clean-link" exact to='/'>HOME</NavLink>
                |
                <NavLink activeClassName="selected" className="clean-link" exact to='/domain/msn.com'>ADVERTISERS</NavLink>
            </div>
        </section>
    )
}