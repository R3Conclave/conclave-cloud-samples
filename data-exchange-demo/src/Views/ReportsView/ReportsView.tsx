import React, { useState } from "react";
import "./ReportsView.scss";
import {
  Table,
  Paper,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

const ReportsView: React.FC = () => {
  const [openTable, setOpenTable] = useState<boolean>(false);
  const [data, setData] = useState<boolean>(false);
  const [report, setReport] = useState<[]>([]);

  const generateReport = async () => {
    try {
      console.log("report", report);
      // Add Function Call here.

      const response: [] = [];
      // const response = await conclaveConfig.functions.call(
      //   "{functionName}",
      //   "{Hash}",
      //   [documents]
      // );
      //
      // success snackbar
      // return response;
      setReport(response);
      setData(true);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  return (
    <>
      <section className="reports-options">
        <div className="wrapper-header">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <h3 className="reports-header">Matched ENCLAVE Reports</h3>
        </div>
        <div className="reports-buttons">
          <button
            className="report-button"
            onClick={() => {
              generateReport();
            }}
          >
            GENERATE Report
          </button>
          {/* <button className="report-button" disabled>
            Refresh
          </button> */}
        </div>
      </section>

      {data === true && (
        <section className="view-data">
          <TableContainer
            component={Paper}
            className="container"
            sx={{ maxHeight: 550 }}
          >
            <Table
              sx={{ minWidth: 650 }}
              stickyHeader
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Invoice Number</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Bank</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {report!.map((matched: any, index: any) => (
                  <TableRow
                    key={matched.invoice_number + index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {matched.invoice_number}
                    </TableCell>
                    <TableCell align="right">{matched.name}</TableCell>
                    <TableCell align="right">{matched.amount}</TableCell>
                    <TableCell align="right">{matched.date}</TableCell>
                    <TableCell align="right">{matched.bank}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      )}
      {data === false && (
        <section className="no-data-display">
          <p>No data here</p>
        </section>
      )}
    </>
  );
};
export default ReportsView;
