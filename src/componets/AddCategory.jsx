import { useState } from "react"
import Proptypes from 'prop-types'

export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const inputValueTrim = inputValue.trim();

        if (inputValueTrim.length < 1) { return };

        props.onNewCategory(inputValueTrim);

        setInputValue('');

    }

    return (
        <form onSubmit={(event) => { onSubmit(event) } }>
                <input
                    type='text'
                    placeholder='Buscar gifs'
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
    )
}

AddCategory.propTypes = {

    onNewCategory: Proptypes.func.isRequired,

}