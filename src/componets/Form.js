import React, {useState} from 'react'

const Form = () => {

    const [name, saveName] = useState('');
    const [quantity, saveQuantity] = useState(0);

    return (
        <form action="">
            <h2>Add Expenses here</h2>

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