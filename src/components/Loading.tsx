import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: "600px",
        margin: "0 auto",
        backgroundColor: "whitesmoke",
        borderRadius: "8px",
      }}
    >
      <CircularProgress sx={{ zIndex: "99" }} />
    </Box>
  );
};

export default Loading;
