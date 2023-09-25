import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const VacationTable = ({data}) => {
    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table" stickyHeader>
        <TableHead>
        <TableRow>
              <TableCell align="center" colSpan={3}>
                My Vacations
              </TableCell>
        </TableRow>
          <TableRow>
          <TableCell align="center">Days</TableCell>
            <TableCell align="center">From</TableCell>
            <TableCell align="center">To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{d.FromDate}</TableCell>
              <TableCell align="right">{d.EndDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default VacationTable;