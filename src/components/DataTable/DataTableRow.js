import React from "react";
import formatNumber from "../../utils/numberFomater";

const DataTableRow = ({ row }) => {
    const populateRow = () => {
        const keys = Object.keys(row);
        return keys
            .filter(
                (key) =>
                    key === "country" ||
                    key === "cases" ||
                    key === "todayCases" ||
                    key === "deaths" ||
                    key === "todayDeaths" ||
                    key === "recovered" ||
                    key === "tests"
            )
            .map((key, index) => {
                return <td key={index}>{formatNumber(row[key])}</td>;
            });
    };

    return populateRow();
};

export default DataTableRow;
