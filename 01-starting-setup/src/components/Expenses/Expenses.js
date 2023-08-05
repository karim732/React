import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  let filterInfoText = "2019, 2021 & 2022";
  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else if (filteredYear === "2022") {
    filterInfoText = "2019, 2020 & 2021";
  }
  const yearFilterHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearFilterHandler={yearFilterHandler}
          year={filteredYear}
        />
        <p>Data for years {filterInfoText} is hidden.</p>
        <ExpenseItem expense={props.items[0]}></ExpenseItem>
        <ExpenseItem expense={props.items[1]}></ExpenseItem>
        <ExpenseItem expense={props.items[2]}></ExpenseItem>
        <ExpenseItem expense={props.items[3]}></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
