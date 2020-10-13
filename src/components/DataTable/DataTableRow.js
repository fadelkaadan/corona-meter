import React, { Fragment } from "react";
import formatNumber from "../../utils/numberFomater";

const DataTableRow = ({ row, rowNr }) => {
    const populateRow = () => {
        const keys = Object.keys(row);
        return (
            <Fragment>
                <td>{rowNr}</td>
                {keys
                    .filter(
                        (key) =>
                            key === "country" ||
                            key === "cases" ||
                            key === "deaths" ||
                            key === "recovered"
                    )
                    .map((key, index) => {
                        if (key === "country") return <td key={index} style={{textAlign: "left"}}>{formatNumber(row[key])}</td>;
                        return <td key={index}>{formatNumber(row[key])}</td>;
                    })}
            </Fragment>
        );
    };

    return populateRow();
};

export default DataTableRow;
