import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { generateReport } from '../services/services';

export default function ReportView(){
    
    // //console.log("Report Done");

    // const handleUsersReport = () => {
    //     console.log("Users Report");

    //     //logic
    // }

    // const handleProductsReport = () => {
    //     console.log("Products Report");

    //     //logic
    // }

    // const buttonStyle = {
    //     margin: '10px',
    //     padding: '10px 20px',
    //     fontSize: '16px',
    // };

    // return (
    //     <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //         <h1>Report View</h1>
    //         <button style={buttonStyle} onClick={handleUsersReport}>Users Report</button>
    //         <button style={buttonStyle} onClick={handleProductsReport}>Products Report</button>
    //     </div>
    // );


    /// ************ Edit 1 ***************
//     const [message, setMessage] = useState('');

//     const generateReport = (format) => {
//         axios.get(`http://localhost:8080/api/v1/admin/report/${format}`)
//             .then(response => {
//                 setMessage(response.data);
//             })
//             .catch(error => {
//                 console.error("There was an error generating the report!", error);
//                 setMessage('Error generating report. Please try again.');
//             });
//     };

//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             <h1>Generate Report</h1>
//             <button onClick={() => generateReport('pdf')}>Generate Users Report (PDF)</button>
//             <button onClick={() => generateReport('html')}>Generate Users Report (HTML)</button>
//             {message && <p>{message}</p>}
//         </div>
//     );


//******************* */ Edit 2 *********************
// const [reportType, setReportType] = useState('');
//     const [reportFormat, setReportFormat] = useState('');
//     const [loading, setLoading] = useState(false);

//     const generateReport = (type, format) => {
//         if (!type || !format) {
//             toast.error("Please select both report type and format");
//             return;
//         }

//         setLoading(true);

//         axios.get(`http://localhost:8080/api/v1/admin/report/${type}/${format}`)
//             .then(response => {
//                 toast.success(`Report generated successfully: ${response.data}`);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 toast.error("Error generating report");
//                 console.error(error);
//                 setLoading(false);
//             });
//     };

//     return (
//         <div className="outer">
//             <div className="form">
//                 <h1 style={{ color: "black" }}>Generate Report</h1>
//                 <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
//                     <label>Select Report Type:</label>
//                     <select onChange={(e) => setReportType(e.target.value)}>
//                         <option value="">Select Type</option>
//                         <option value="users">Users Report</option>
//                         <option value="products">Products Report</option>
//                     </select>
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
//                     <label>Select Report Format:</label>
//                     <select onChange={(e) => setReportFormat(e.target.value)}>
//                         <option value="">Select Format</option>
//                         <option value="pdf">PDF</option>
//                         <option value="html">HTML</option>
//                     </select>
//                 </div>
//                 <button onClick={() => generateReport(reportType, reportFormat)} className="button-main">
//                     {loading ? "Generating..." : "Generate Report"}
//                 </button>
//             </div>
//         </div>
//     );

    const [reportType, setReportType] = useState('');
    const [reportFormat, setReportFormat] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerateReport = () => {
        if (!reportType || !reportFormat) {
            toast.error("Please select both report type and format");
            return;
        }

        setLoading(true);

        generateReport(reportType, reportFormat)
            .then(response => {
                toast.success(`Report generated successfully: ${response}`);
                setLoading(false);
            })
            .catch(error => {
                toast.error("Error generating report");
                console.error(error);
                setLoading(false);
            });
    };

    return (
        <div className="outer">
            <div className="form">
                <h1 style={{ color: "black" }}>Generate Report</h1>
                <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                    <label>Select Report Type:</label>
                    <select onChange={(e) => setReportType(e.target.value)}>
                        <option value="">Select Type</option>
                        <option value="users">Users Report</option>
                        <option value="products">Products Report</option>
                    </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                    <label>Select Report Format:</label>
                    <select onChange={(e) => setReportFormat(e.target.value)}>
                        <option value="">Select Format</option>
                        <option value="pdf">PDF</option>
                        <option value="html">HTML</option>
                    </select>
                </div>
                <button onClick={handleGenerateReport} className="button-main">
                    {loading ? "Generating..." : "Generate Report"}
                </button>
            </div>
        </div>
    );
}

