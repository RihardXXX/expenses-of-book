import ExpenseOutput from "../components/ExpenseOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";

const RecentExepenses = () => {
    const { expenses } = useContext(ExpenseContext);
    return <ExpenseOutput periodName={'7 days'} expenses={expenses} />
};

export default RecentExepenses;