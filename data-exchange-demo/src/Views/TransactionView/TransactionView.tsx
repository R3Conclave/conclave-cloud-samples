import React, { useEffect, useRef, useState } from "react";
import "./TransactionView.scss";
import {
  Table,
  Paper,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
// import conclaveConfig from "../../ConclaveCloud";

type Document = {
  invoiceNumber: String;
  name: String;
  amount: String;
  date: String;
};

type Documents = {
  documentOwner: String | null;
  documents: Document[];
};

const TransactionView: React.FC = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [csvFile, setCsvFile] = useState<any>(null);
  const [documentArray, setDocumentArray] = useState<Document[]>([]);
  const [documents, setDocuments] = useState<Documents | null>();
  const [openTable, setOpenTable] = useState<boolean>(false);

  const processCsvToJson = (str: string, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\r\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\r\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce(
        (obj: any, header: string, i: number): any => {
          obj[header] = values[i];
          return obj;
        },
        {}
      );
      return eachObject;
    });
    setDocumentArray(newArray);
  };

  const readCsvFile = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const text = e.target.result;
      processCsvToJson(text);
    };

    reader.readAsText(file);
  };

  const submitDocument = async () => {
    try {
      console.log("documents", documents);
      // Add Function Call here.
      // const response = await conclaveConfig.functions.call(
      //   "{functionName}",
      //   "{Hash}",
      //   [documents]
      // );
      //
      // success snackbar
      // return response;
      setCsvFile(null);
      setOpenTable(false);
      setDocumentArray([]);
      setDocuments(null);
      fileInput.current!.value = "";
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  useEffect(() => {
    if (documentArray.length > 0) {
      setDocuments({
        documentOwner: sessionStorage.getItem("user"),
        documents: documentArray,
      });
    }
  }, [documentArray]);

  useEffect(() => {
    if (csvFile !== null) {
      readCsvFile();
    }
  }, [csvFile]);

  return (
    <>
      <section className="input-data">
        <div className="wrapper-label">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <label className="input-label" htmlFor="csv">
            Upload CSV File:
          </label>
        </div>
        <div className="input-buttons">
          <input
            id="fileInput"
            ref={fileInput}
            type="file"
            className="csv-input"
            name="csv"
            accept=".csv"
            onChange={(e) => {
              e.target.files ? setCsvFile(e.target.files[0]) : setCsvFile(null);
            }}
          />
          <button
            className="view-data-button"
            disabled={csvFile !== null ? false : true}
            onClick={(e) => {
              if (csvFile !== null) {
                setOpenTable(!openTable);
              }
            }}
          >
            Preview File
          </button>
        </div>
      </section>

      {openTable && (
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
                </TableRow>
              </TableHead>
              <TableBody>
                {documentArray!.map((document: any, index: any) => (
                  <TableRow
                    key={document.invoice_number + index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {document.invoice_number}
                    </TableCell>
                    <TableCell align="right">{document.name}</TableCell>
                    <TableCell align="right">{document.amount}</TableCell>
                    <TableCell align="right">{document.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      )}
      <button
        className="submit-button"
        disabled={documentArray!.length > 0 ? false : true}
        onClick={(e) => {
          if (documentArray!.length > 0) {
            submitDocument();
          }
        }}
      >
        Submit File
      </button>
    </>
  );
};
export default TransactionView;
