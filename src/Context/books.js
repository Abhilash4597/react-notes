import { createContext, useState } from "react";

const BooksContext = createContext();

// Just Use Of CreateContext
 
function Provider({children}) {
    const [count, setCount] = useState(1);

    const valueToShare = {
        count:count,
        incrementCount : ()=>{
            setCount(count+1);
        },
    };

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export {Provider};
export default BooksContext;