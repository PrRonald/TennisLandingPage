export const TablePoints = ({points}) => {
    return (
        <section className="w-full grid grid-cols-3 grid-rows-1
                 justify-center divide-x place-items-center gap-y-2 ">
            {points.map(point => (
                <h1 className="w-full mb-2 text-center text-xl font-semibold text-gray-500">
                    {point}
                </h1>
            ))}
        </section>
    );
}