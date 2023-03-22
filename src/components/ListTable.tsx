import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { IList } from "../types";
import { getComparator, stableSort } from "../utils/comparator";
import ListTableHead from "./ListTableHead";
import ListTableToolbar from "./ListTableToolbar";

type Order = "asc" | "desc";

const ListTable = ({ data }: { data: IList[] | undefined }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const order = searchParams.get("order") as Order;
  const orderBy = searchParams.get("orderBy") as keyof IList;
  const page = Number(searchParams.get("page"));

  if (!data) {
    return <div>Chart Loading...</div>;
  }
  useEffect(() => {
    searchParams.set("order", "desc");
    searchParams.set("orderBy", "id");
    searchParams.set("page", "0");
  }, []);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IList,
  ) => {
    const isAsc = orderBy === property && order === "asc";

    setSearchParams(
      isAsc
        ? { order: "desc", orderBy: property, ...searchParams }
        : { order: "asc", orderBy: property, ...searchParams },
    );
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((list) => list.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    }
    if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    }
    if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    }
    if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setSearchParams({ ...searchParams, page: String(newPage) });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setSearchParams({ ...searchParams, page: "0" });
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <ListTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <ListTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.id}
                      </TableCell>
                      <TableCell align="right">
                        {row.transaction_time}
                      </TableCell>
                      <TableCell align="right">
                        {row.status ? "완료" : "미완료"}
                      </TableCell>
                      <TableCell align="right">{row.customer_id}</TableCell>
                      <TableCell align="right">{row.customer_name}</TableCell>
                      <TableCell align="right">{row.currency}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default ListTable;
