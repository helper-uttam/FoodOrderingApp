// src/components/UI/LazyLoading.js
import React from "react";
import { Circles } from "react-loader-spinner";

const LazyLoading = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                visible={true}
            />
        </div>
    );
};

export default LazyLoading;
