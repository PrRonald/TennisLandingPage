export const sum = (metrics) => (
    metrics.reduce((total, numStr) => total + Number(numStr), 0)
) 