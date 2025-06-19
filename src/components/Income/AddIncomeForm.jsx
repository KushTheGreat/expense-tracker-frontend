import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => {
    // For amount, ensure it is a number or empty string
    if (key === "amount") {
      // Allow only numbers or empty string
      if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
        setIncome({ ...income, [key]: value });
      }
    } else {
      setIncome({ ...income, [key]: value });
    }
  };

  const handleSubmit = () => {
    if (!income.source || !income.amount || !income.date) {
      alert("Please fill in all required fields");
      return;
    }
    // Optionally, convert amount to number before submitting
    onAddIncome({ ...income, amount: Number(income.amount) });
    // Clear form if desired
    setIncome({ source: "", amount: "", date: "", icon: "" });
  };

  return (
    <div>
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <Input
        value={income.source}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Income Source"
        placeholder="Freelance, Salary, etc"
        type="text"
      />

      <Input
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        placeholder=""
        type="number"
      />

      <Input
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        placeholder=""
        type="date"
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="add-btn add-btn-fill"
          onClick={handleSubmit}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default AddIncomeForm;
