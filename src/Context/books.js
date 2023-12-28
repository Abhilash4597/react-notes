import { createContext, useState } from "react";

const BooksContext = createContext();

// Just Practicing CreateContext

function Provider({children}) {
    const [count, setCount] = useState(0);

    const valueToShare = {
        count:count,
        incrementCount : ()=>{
            setCount(count+1);
        },
    };

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
// Just Practicing CreateContext
}

export {Provider};
export default BooksContext;