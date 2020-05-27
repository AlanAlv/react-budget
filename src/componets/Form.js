import React from 'react'

const Form = () => {
    return (
        <form action="">
            <h2>Add Expenses here</h2>

            <div className="field">
                <label>Expense Name</label>
                <input 
                    type="text" 
                    className="u-full-width" 
                    placeholder="E.g. Transport"
                />
            </div>
            <div className="field">
                <label>Expense Quantity</label>
                <input 
                    type="number" 
                    className="u-full-width" 
                    placeholder="E.g. 200"
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