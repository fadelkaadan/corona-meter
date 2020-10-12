import React, { useEffect, useState } from "react";
import { fetchGlobalData } from "../../api/coronaAPI";
import numberFormater from "../../utils/numberFomater";
import StatsBox from "./StatsBox";
import "./GlobalStatsDashboard.css";

const GlobalStatsDashboard = () => {
    const [data, setData] = useState({ cases: 0, deaths: 0, recovered: 0 });

    useEffect(() => {
        fetchGlobalData().then((response) => {
            setData(response);
        });
    }, []);

    const { cases, deaths, recovered } = data;

    return (
        <div className="global-stats-dashboard">
            <StatsBox counterName="Total Cases" count={numberFormater(cases)} />
            <StatsBox
                counterName="Total Deaths"
                count={numberFormater(deaths)}
            />
            <StatsBox
                counterName="Total Recovered"
                count={numberFormater(recovered)}
            />
        </div>
    );
};

export default GlobalStatsDashboard;
