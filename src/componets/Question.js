import React, { Fragment, useState } from 'react';
import Error from './Error';

const Question = ({saveRemaining, saveBudget}) => {

    // Define State
    const [ quantity, saveQuantity ] = useState(0);
    const [ error, saveError ] = useState(false);

    // Reads budget
    const defineBudget = e => {
        saveQuantity(parseInt(e.target.value, 10));
    }

    // Submit budget
    const addBudget = e => {
        e.preventDefault();

        // Validation
        if (quantity < 1 || isNaN(quantity)) {
            saveError(true);
            return
        }

        // Validation passed
        saveError(false);
        saveBudget(quantity);
        saveRemaining(quantity);

    }

    return ( 
        <Fragment>
            <h2>Set your Budget</h2>

            {error ? <Error message="The budget is not valid"/> : null}

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