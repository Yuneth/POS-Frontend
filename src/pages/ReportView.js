import React from "react";

export default function ReportView(){
    
    //console.log("Report Done");

    const handleUsersReport = () => {
        console.log("Users Report");

        //logic
    }

    const handleProductsReport = () => {
        console.log("Products Report");

        //logic
    }

    const buttonStyle = {
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Report View</h1>
            <button style={buttonStyle} onClick={handleUsersReport}>Users Report</button>
            <button style={buttonStyle} onClick={handleProductsReport}>Products Report</button>
        </div>
    );
}