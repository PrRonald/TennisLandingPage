import { Link } from "react-router-dom";

export const LinkButton = ({to, name, GreyYellow}) => {
    return( 
        <Link
            to={to}
            className={`w-auto px-4 py-1 rounded-full border border-gray-500
            text-white hover:bg-blue-800 font-semibold
            ${GreyYellow ? "hover:text-yellow-500" : "hover:text-gray-500"}  `}
        >
            {name}
        </Link>
     );
}