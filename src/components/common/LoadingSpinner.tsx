import { CircularProgress, Flex } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Flex justify="center" align="center" mt="40vh">
      <CircularProgress color="blue" isIndeterminate size="16" />
    </Flex>
  );
};

export default LoadingSpinner;
