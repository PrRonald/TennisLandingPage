export const Search = () => {
    return (
        <section className="w-full h-[341px] flex flex-col place-content-center gap-4"
            style={{
                backgroundImage: `url("./img/Searching.jpeg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
                }}>
            <h1 className="w-full text-2xl font-semibold text-white text-center">
                LOVE PLAYONG TENNIS?
            </h1>
            <p className="w-full text-xl font-normal text-white text-center px-6">
                Sign up for us newsletter and get all the latest tips and tricks to polish your game, on par with our membership discounts and a list of tournaments to come!
            </p>
            <div className="w-full px-6 flex flex-row items-center justify-center gap-2">
                <input
                    className="w-[217px] h-9 text-gray-300 "
                    type="text"
                    name="search"
                    id="" 
                    placeholder="Search"/>
                <button
                    className="w-[96px] h-9 bg-green-400 text-sm
                    font-normal text-white "
                    type="button">
                    SUBMIT
                </button>
            </div>
        </section>
    );
}