import React, { Fragment } from 'react';

const Question = () => {
    return ( 
        <Fragment>
            <h2>Set your Budget</h2>

            <form action="submit">
                <input 
                    type="number" 
                    classnName="u-full-width" 
                    placeholder="Set your Budget"    
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