import React from "react";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Header(titles, ...props) {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
        }));

  return (
    <>
    <TableHead>
        <TableRow>
            {titles.titles.map((title, index) => 
          <StyledTableCell key={"head" + index.toString()} align={!index? "left" : "center"}>{title}</StyledTableCell>)}
        </TableRow>
    </TableHead>
    </>
  );
};