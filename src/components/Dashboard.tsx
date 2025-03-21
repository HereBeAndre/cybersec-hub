import { Link } from "react-router";
import { SearchField } from "./SearchField";

export const Dashboard = () => {
  return (
    <>
      <Link to="/dashboard">Dashboard</Link>
      <SearchField placeholder="Search a vulnerability" />
    </>
  );
};
