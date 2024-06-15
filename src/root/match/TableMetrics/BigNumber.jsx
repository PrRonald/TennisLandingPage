export const BigNumber = ({ number }) => {
    return (
        <div className="w-full h-full bg-gray-600 ">
            <h1 className="w-full h-full text-4xl text-yellow-400 font-bold
                flex items-center justify-center   ">
                {number}
            </h1>
        </div>
    );
}