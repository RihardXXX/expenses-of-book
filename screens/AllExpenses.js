import ExpenseOutput from "../components/ExpenseOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";

const AllExpenses = () => {
    const expenseCtx = useContext(ExpenseContext);
    return <ExpenseOutput periodName={'Total'} expenses={expenseCtx.expenses} />
};

export default AllExpenses;