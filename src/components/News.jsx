import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

export const News = () => {

    const games = [{ title: "Round of 16", date: "NOVEMBER 13 @ 9:00 AM - 3:00 PM" },
    { title: "Round of 14", date: "DECEMBER 13 @ 9:00 AM - 3:00 PM" },
    { title: "Round of 15", date: "FEBRUARY 13 @ 9:00 AM - 3:00 PM" },]

    const news = [
        {
            title: "Top Female Tennis Players of Our Time",
            date: "OCT 19, 2019",
            news: "Serena Williams: A true legend, Serena Williams has dominated the tennis world for decades.  With 23 Grand Slam singles titles, she is one of the most successful players in history. Her powerful serve, athleticism, and mental toughness set her apart."
        },
        {
            title: "Wimbledon Men is Fourth Round Recap",
            date: "OCT 19, 2016",
            news: "Serena Williams: A true legend, Serena Williams has dominated the tennis world for decades.  With 23 Grand Slam singles titles, she is one of the most successful players in history. Her powerful serve, athleticism, and mental toughness set her apart."
        }
    ]

    return (
        <section className="size-auto grid grid-rows-[auto_auto_auto] gap-14
         bg-gray-300 gap px-6 py-3" >
            <h1 className="w-auto text-xl font-semibold text-black text-left ">
                LATEST NEWS
            </h1>
            <div className="flex flex-col gap-14">
            {news.map(news => (
                <div className="w-full flex flex-col gap-4 ">
                    <span className="w-14  h-1 bg-green-500" ></span>
                    <div className="w-full flex flex-col justify-start gap-2 ">
                        <h2 className="w-full text-sm font-medium text-black text-left ">
                            {news.title}
                        </h2>
                        <h3 className="w-full text-xs font-normal text-gray-400 text-left ">
                            {news.date}
                        </h3>
                    </div>
                    <p className="w-full text-sm font-normal text-black text-justify  ">
                        {news.news}
                    </p>
                </div>
            ))}
            </div>
            <div className="h-auto flex flex-col items-start bg-white px-6 pt-7 pb-4 gap-10 ">
                {games.map(game => (
                    <div className="w-full h-[89px] flex flex-col place-items-start
                    border-b border-gray-300 gap-3 ">
                        <h1 className="text-base font-normal text-black ">
                            {game.title}
                        </h1>
                        <div className="w-full  flex flex-row gap-2 " >
                            <SlCalender className="text-xs font-normal text-gray-400" />
                            <h2 className="text-xs font-normal text-gray-400">
                                {game.date}
                            </h2>
                        </div>
                    </div>
                ))}
                <Link className="text-xs font-semibold text-green-700 " >
                    VIEW ALL EVENTS
                </Link>
            </div>
        </section>
    );
}