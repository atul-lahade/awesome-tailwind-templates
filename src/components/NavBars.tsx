const NavBars = () => {
    return (
        //   create simple navbar using tailwind css
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Awesome Tailwind</div>
                <div className="space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">Navbars</a>
                    <a href="#" className="text-gray-300 hover:text-white">Footers</a>
                    <a href="#" className="text-gray-300 hover:text-white">ImageSliders</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBars;