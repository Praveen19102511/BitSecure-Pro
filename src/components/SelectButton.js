import { styled } from "@mui/material";


 const SelectButton = styled("button")(({ selected }) => ({
  border: "1px solid gold",
  borderRadius: 5,
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
  fontFamily: "Montserrat",
  cursor: "pointer",
  backgroundColor: selected ? "gold" : "",
  color: selected ? "black" : "",
  fontWeight: selected ? 700 : 500,
  "&:hover": {
    backgroundColor: "gold",
    color: "black",
  },
  width: "22%",
  // margin: 5,
}));


export default function CustomSelectButton({ children, selected, onClick }) {
  return (
    <SelectButton onClick={onClick} selected={selected}>
      {children}
    </SelectButton>
  );
}