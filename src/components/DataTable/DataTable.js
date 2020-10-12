import React, { useCallback, useEffect, useState } from "react";
import DataTableRow from "./DataTableRow";
import Search from "./Search";
import { fetchCountriesDataBy } from "../../api/coronaAPI";
import "./DataTable.css";

const DataTable = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");

    const getSortedDataBy = (preference) => {
        fetchCountriesDataBy(preference)
            .then((response) => {
                setIsFetching(false);
                setData(response.data);
            })
            .then(() => {
                setFilteredData(data);
            });
    };

    const addRows = () => {
        // when user types in search bar
        if (searchInputValue !== "") {
            return filteredData.map((element, index) => {
                return (
                    <tr key={index}>
                        <DataTableRow row={element} />
                    </tr>
                );
            });
        }
        // return all data
        return data.map((element, index) => {
            return (
                <tr key={index}>
                    <DataTableRow row={element} />
                </tr>
            );
        });
    };

    const handleInputChange = (searchInputValue) => {
        setSearchInputValue(searchInputValue);
        handleSearch(searchInputValue);
    };

    const handleSearch = (searchInput) => {
        if (searchInput.length > 0) {
            const filtered = data.filter((row) => {
                const lc = row.country.toLowerCase();
                const filter = searchInput.toLowerCase();
                if (searchInput.length < 2) return lc.startsWith(filter);
                else return lc.includes(filter);
            });
            setFilteredData(filtered);
        }
    };

    const stableSetIsFetching = useCallback(setIsFetching, []);
    const stableGetSortedDataBy = useCallback(getSortedDataBy, []);

    useEffect(() => {
        stableSetIsFetching(true);
        stableGetSortedDataBy("cases");
    }, [stableSetIsFetching, stableGetSortedDataBy]);

    return (
        <div className="stats">
            <h3 className="stats-title">Countries affected by Covid-19</h3>
            <Search
                handleSearchChange={handleInputChange}
                inputValue={searchInputValue}
            />
            <table className="stats-table sortable">
                <thead>
                    <tr>
                        <th onClick={() => getSortedDataBy(null)}>Country</th>
                        <th onClick={() => getSortedDataBy("cases")}>
                            Total Cases
                        </th>
                        <th onClick={() => getSortedDataBy("todayCases")}>
                            New Cases
                        </th>
                        <th onClick={() => getSortedDataBy("deaths")}>
                            Total Deaths
                        </th>
                        <th onClick={() => getSortedDataBy("todayDeaths")}>
                            New Deaths
                        </th>
                        <th onClick={() => getSortedDataBy("recovered")}>
                            Total Recovered
                        </th>
                        <th onClick={() => getSortedDataBy("tests")}>
                            Total Tests
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {isFetching ? (
                        <tr>
                            <td>Loading</td>
                        </tr>
                    ) : (
                        addRows()
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
