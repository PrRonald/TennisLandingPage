import { LinkButton } from "../../player/LinkButton";

export const ErrorView = ({error, Return, to}) => {
    return(
        <section className="w-full h-[95vh] bg-blue-950 flex items-center justify-center">
            <div className="w-[450px] h-[250px] 
            border-2 border-gray-500 rounded-xl flex flex-col 
            items-center justify-center gap-4">
                <h1 className="w-full text-5xl font-semibold
                 text-yellow-500 text-center">
                    {error}
                </h1>
                <LinkButton GreyYellow={false} name={Return} to={to} />
            </div>
        </section>
    );
}