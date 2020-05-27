import React, { Fragment, useState } from 'react';

const Question = () => {

    // Define State
    const [ quantity, saveQuantity ] = useState(0);

    // Reads budget
    const defineBudget = e => {
        saveQuantity(parseInt(e.target.value, 10));
    }

    // Submit budget
    const addBudget = e => {
        e.preventDefault();
    }

    return ( 
        <Fragment>
            <h2>Set your Budget</h2>

            <form 
                onSubmit={addBudget}
            >
                <input 
                    type="number" 
                    className="u-full-width" 
                    placeholder="Set your Budget"  
                    onChange={defineBudget}  
                />

                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    value="Set Budget"
                />
            </form>

        </Fragment>
    );
}
 
export default Question;