import { Link, Outlet, useLocation } from "react-router-dom";

export const Tennis = () => {

    const location = useLocation();
    console.log(location)
    const reg = /Tennis. /i
    console.log(reg.test(location.pathname))

    return (
        <section>
            <div className="w-full flex flex-row justify-start
                gap-6 pl-8 bg-yellow-500 ">
                <Link
                    className="text-2xl text-gray-500 font-bold "
                    to="players">
                        Players
                </Link>
                <Link
                    className="text-2xl text-gray-500 font-bold "
                    to="match">
                        Match
                </Link>
                <Link
                    className="text-2xl text-gray-500 font-bold "
                    to="live-match">
                        Live Match
                </Link>
            </div>
            <div className="detail">
                <Outlet />
            </div>
        </section>
    );
}