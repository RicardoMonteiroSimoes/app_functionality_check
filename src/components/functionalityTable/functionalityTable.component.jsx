import React from "react";
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';


import Header from '../table/header/header.component';
import Body from '../table/body/body.component';

export default function FunctionalityTable(functionalityData,  osData, highlightIndex, ...props) {

    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <Header titles={functionalityData.functionalityData.functionMatrix.header} />
                <Body rows={functionalityData.functionalityData.functionMatrix.devices} tooltips={functionalityData.functionalityData.tooltips} highlightIndex={functionalityData.highlightIndex} />
            </Table>
        </TableContainer>
        </>
    );
};