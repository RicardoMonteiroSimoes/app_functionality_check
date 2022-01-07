import React from "react";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

export default function Row(row, tooltips, isHighlighted, ...props) {

    console.log(row.isHighlighted)

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const createDeviceName = (osData) => {
        var name = "";
        if (!!osData.comparison){
            name += osData.comparison;
        }
        if(!!osData.version){
            name += " " + osData.version;
        }
        name += " " + osData.OS;
        return name
        
    } 

    const generateCell = (item) => {
        if(!!item.status){
            if(!!item.tooltips){
                return (
                    <Tooltip title=
                        {item.tooltips.map((item, index) => 
                            <Typography key={"tooltip" + item} color="inherit">{row.tooltips[item.toString()]}</Typography>
                        )}> 
                        <TableCell align="center">❗</TableCell>
                    </Tooltip>
                    )
            } else {
                return (
                    <TableCell align="center">
                        ✅
                    </TableCell>
                )
            }
        } else {
            return (
            <TableCell align="center">
                ❌
            </TableCell>
            )
        }
    }

    return (
    <TableRow selected={row.isHighlighted} key={createDeviceName(row.row)}>
            <TableCell component="th" scope="row">
                <b>{createDeviceName(row.row)}</b>
              </TableCell>
              {row.row.functions.map(item =>
                generateCell(item))}
              </TableRow>);
};