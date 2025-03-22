import { Button, TextField, TextFieldVariants } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router";
import { FormEvent } from "react";

interface SearchFieldProps {
  placeholder: string;
  variant?: TextFieldVariants;
}

export const SearchField = ({
  placeholder,
  variant = "outlined",
}: SearchFieldProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // @ts-expect-error - TS is not able to infer the type of event.target[0].
    const value = event.target[0].value;
    if (!value) return;

    setSearchParams({ search_query: value });
  };

  //   useEffect(() => {
  //     // Clear search field when navigating away from the page.
  //     return () => setSearchParams({});
  //   }, []);

  return (
    <form onSubmit={handleSearchSubmit}>
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        variant={variant}
      />
      <Button variant="contained" type="submit" disabled={!searchParams}>
        <SearchIcon />
      </Button>
    </form>
  );
};
