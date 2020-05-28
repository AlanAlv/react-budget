import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({saveExpense, saveCreateExpense}) => {

    const [name, saveName] = useState('');
    const [quantity, saveQuantity] = useState(0);
    const [ error, saveError ] = useState(false);

    // User adds expense
    const addExpense = e => {
        e.preventDefault();

        // Validation
        if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);
        
        // Create Expense
        const expense = {
            name,
            quantity,
            id: shortid.generate()
        }

        // Send expense to main component
        saveExpense(expense);
        saveCreateExpense(true);

        // Reset form
        saveName('');
        saveQuantity(0);

    }

    return (
        <form 
            onSubmit={addExpense}
        >
            <h2>Add Expenses here</h2>

            {   error ? 
                    <Error message="Both fields are required/Incorret Budget" />
                :
                    null
            }

            <div className="field">
                <label>Expense Name</label>
                <input 
                    type="text" 
                    className="u-full-width" 
                    placeholder="E.g. Transport"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Expense Quantity</label>
                <input 
                    type="number" 
                    className="u-full-width" 
                    placeholder="E.g. 200"
                    value={quantity}
                    onChange={e => saveQuantity(parseInt(e.target.value, 10))}
                />
            </div>
            <input 
                type="submit" 
                className="button-primary u-full-width"
                value="Add Expense"
            />
        </form>
      );
}
 
export default Form;