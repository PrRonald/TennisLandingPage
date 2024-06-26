export const PointsMap = ({ points, color }) => {
    return (
        <>
            {points.map((point, index) => (
                <td
                    key={index}
                    className={`text-center text-lg font-semibold
                  ${color ? "text-yellow-500 " : "text-gray-500 "}`}>
                    {point}
                </td>
            ))}
        </>
    );
}
