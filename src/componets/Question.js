import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Question = ({saveRemaining, saveBudget, updateQuestion}) => {

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
        updateQuestion(false);

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

Question.propTypes = {
    saveRemaining: PropTypes.func.isRequired,
    saveBudget: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired
}

export default Question;