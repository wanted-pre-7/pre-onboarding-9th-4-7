import Box from "@mui/material/Box";
import ListTable from "../components/ListTable";
import { useListData } from "../hooks/useListData";

const Home = () => {
  const { data, isLoading } = useListData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Box sx={{ width: "70%", height: "auto", margin: "0 auto" }}>
      <ListTable data={data} />
    </Box>
  );
};

export default Home;
