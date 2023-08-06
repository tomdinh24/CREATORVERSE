


const Navbar = () => {


    return (
        <div className="NavBar">
            <h1 className="brand" >CREATORVERSE</h1>

            <nav>
                <ul>
                    <li>
                        <a href="/" role="button">View All Creators</a>
                    </li>
                    <li>
                        <a href="/AddCreator" role="button">Add a Creator</a>
                    </li>
                </ul>
            </nav>
        
        </div>
    )
}

export default Navbar;