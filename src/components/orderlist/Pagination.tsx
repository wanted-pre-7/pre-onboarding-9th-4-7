import styled from "styled-components";
import { getNumPages } from "../../utils/pageUtil";

const Pagination = ({
  total,
  page,
  setPage,
}: {
  total: number;
  page: string;
  setPage: (value: string) => void;
}) => {
  const numPages = getNumPages(total);

  return (
    <>
      <Nav>
        <Button
          onClick={() => setPage(String(Number(page) - 2))}
          disabled={page === "1"}
        >
          &lt;
        </Button>
        {Array(numPages)
          .fill(0)
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + "")}
              aria-current={page == String(i + 1) ? "page" : undefined}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page)} disabled={page == numPages + ""}>
          &gt;
        </Button>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: tomato;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
