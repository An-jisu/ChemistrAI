import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="h-screen">
            <div className="w-360px max-w-lg">
                {/* Header */}
                <header className="mb-3 text-center flex items-center justify-center p-5">
                    <div className='flex'>
                        <h1 className="text-xl font-bold">Chemistr</h1>
                        <h1 className="text-xl font-bold text-primary">AI</h1>
                    </div>
                </header>

                {/* logo */}
                <div className="mb-4 text-center flex items-center justify-center p-5">
                    <img className="w-98px h-38px" src="./chemi.png" alt="chemi" />
                </div>

                {/* explanation */}
                <div className="text-center flex-col items-center justify-center pr-12 pl-12 pb-8 pt-4 text-sm">
                    <div className='flex text-center items-center justify-center'>
                        <h1 className='font-bold text-xl mr-1'>Just take a </h1>
                        <h1 className='text-primary font-bold text-xl'> picture!</h1>
                    </div>
                    <div className='text-gray text-left'>Just take a picture to analyze ingredients in your cosmetics. At first, enter your skin information. </div>
                </div>

                {/* button */}
                <div className="text-center items-center flex flex-col justify-center">
                    <Link to="Get_skin_type">
                        <button className="w-72 border-black bg-primary text-black text-lg py-4 px-4 rounded-3xl mb-10 hover:bg-light_green">Enter skin Info</button>
                    </Link>
                </div>
                {/* extra */}
                <div className="flex text-center items-center justify-center">
                    <img className="w-98px h-38px" src="./use.png" alt="use" />
                    <a href="https://www.naver.com/" className="text-black underline text-green_deep">How to use</a>
                </div>
            </div>
        </div>
    );
}

export default Main;
