import React from 'react';
import { StyledForm } from './styledComponents'

const AddMonsterForm = props => {
    return (
        <StyledForm>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Image:
                <input type="text" name="img" />
            </label>
            <label>
                Description:
                <input type="text" name="description" />
            </label>
            <label>
                Difficulty:
                <input type="text" name="difficulty" />
            </label>
            <label>
                Reward:
                <input type="text" name="reward" />
            </label>
            <label>
                Reward:
                <input type="text" name="reward" />
            </label>
            <input type="submit" value="Submit" />
        </StyledForm>
    )
}

export default AddMonsterForm;