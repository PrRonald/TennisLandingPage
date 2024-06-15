import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./root/player/playerslice"
import matchReducer from "./root/match/Match/matchSlice"
import metricsReducer from "./root/match/TableMetrics/Metrics/metricsSlice"
const store = configureStore({
    reducer: {
        player: playerReducer,
        match: matchReducer,
        metrics: metricsReducer
    }
});

export default store