import React, { useEffect } from "react";
import Header from "../../components/Header";
import GlobalStatsDashboard from "../../components/GlobalStatsDashboard";
import DataTable from "../../components/DataTable";
import "./Home.css";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="home">
            <Header />
            <GlobalStatsDashboard />
            <DataTable />
        </div>
    );
};

export default Home;
