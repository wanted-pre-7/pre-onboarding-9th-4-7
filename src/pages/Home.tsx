import Box from "@mui/material/Box";
import ListTable from "../components/ListTable";
import Loading from "../components/Loading";
import { useListData } from "../hooks/useListData";

const Home = () => {
  const { data, isLoading } = useListData();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        width: "70%",
        height: "auto",
        margin: "0 auto",
        borderRadius: "8px",
        boxShadow: "2px 2px 2px 1px rgba(59,70,85,0.2)",
      }}
    >
      <ListTable data={data} />
    </Box>
  );
};

export default Home;
