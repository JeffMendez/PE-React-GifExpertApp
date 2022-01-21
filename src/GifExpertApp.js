import { useState } from "react";
import CategoryAdd from "./components/CategoryAdd";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Spiderman PS4', 'Venom']);

    // const handleAddCategory = () => setCategories( [...categories, 'HunterXHunter'])
    // setCategories(category => [...category, 'NuevoItem'])
    // <button onClick={handleAddCategory}>Agregar</button>

    return (
        <>
            <h2>GifExpertApp</h2>

            <CategoryAdd setCategories={setCategories} />

            <hr/>
              
            <ol>
                {
                    categories.map( category => 
                        <GifGrid key={category} category={category}/>
                    )
                }
            </ol>

        </>
    );

}

export default GifExpertApp;