import { Button, TextField, TextFieldVariants } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router";
import { FormEvent, useEffect, useState } from "react";

interface SearchFieldProps {
  placeholder: string;
  variant?: TextFieldVariants;
}

export const SearchField = ({
  placeholder,
  variant = "outlined",
}: SearchFieldProps) => {
  // Not ideal to have both state and URL as source of truth.
  // Needed to have disabled button when searchValue is empty.
  const [searchValue, setSearchValue] = useState<string>("");

  const [, setSearchParams] = useSearchParams();

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchValue) return;

    setSearchParams({ vulnerability: searchValue });
  };

  useEffect(() => {
    // Clear search field when navigating away from the page.
    return () => setSearchParams({});
  }, []);

  return (
    <form onSubmit={handleSearchSubmit}>
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        variant={variant}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button variant="contained" type="submit" disabled={!searchValue}>
        <SearchIcon />
      </Button>
    </form>
  );
};
