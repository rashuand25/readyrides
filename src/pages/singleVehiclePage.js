// In SingleVehiclePage.js
import React from "react";
import { useParams } from "react-router-dom";
import SingleCarDetails from "../components/singleCarComponent";

const SingleVehiclePage = () => {
    const { vehicle_id } = useParams();
    return (
        <div>
            <SingleCarDetails vehicle_id={vehicle_id} />
        </div>
    );
};

export default SingleVehiclePage;
