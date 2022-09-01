export default function NavBar(){
    return(
        <nav className="navbar bg-base-100">
            <div className="flex-1">
                <a href="#" className="btn btn-ghost normal-case text-xl">metarLike</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" name="search" id="search"placeholder="Search Airport ICAO" className="input input-bordered" />
                </div>
            </div>
        </nav>
    );
};

