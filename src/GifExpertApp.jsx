import { useState } from "react";
import { AddCategory, GifGrid } from "./componets";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hello']);

    const onAddCategory = (newCategory) => {
    
        const categories2 = categories.slice().map(element => {
            return element.toLowerCase()
        })

        //newCategory ya viene con trim()
        if (categories2.includes(newCategory.toLowerCase())) return;

        return setCategories([newCategory, ...categories]);

    }


    return (
        <>
            { /*titulo*/}

            <h1> GifExpertApp</h1>

            { /*input */}

            <AddCategory onNewCategory={(value) => { onAddCategory(value) }} />


            { /*listado de gif*/}

            {categories.map(category =>
                (<GifGrid key={category} category={category} />)
            )}

            { /*gif item*/ }
        </>
    )
}

