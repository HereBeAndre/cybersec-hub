import { Link } from "react-router";
import { SearchField } from "./SearchField";
import { useSearchQuery } from "../hooks/useSearchQuery";

export const Dashboard = () => {
  const { data } = useSearchQuery();

  return (
    <>
      <Link to="/dashboard">Dashboard</Link>
      <SearchField placeholder="Search a vulnerability" />
      {data ? data.timestamp : null}
    </>
  );
};
