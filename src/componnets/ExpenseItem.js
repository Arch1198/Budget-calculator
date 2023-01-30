import React from "react";

const ExpenseItem = ({
  expense: { id, charge, amount },
  handleDelete,
  handleEdit
}) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(id)}
        >
          EDIT
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDelete(id)}
        >
          DELETE
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;