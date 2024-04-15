export const PointsMap = ({ points }) => {
    return (
        <>
            {points.map(point => (
                <td>
                    {point}
                </td>
            ))}
        </>
    );
}
