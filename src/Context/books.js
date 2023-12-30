import { createContext } from "react";

const BooksContext = createContext();

function Provider({children}) {
    //* Practicing the Createcontext
    // const [count, setCount] = useState(0);

    // const valueToShare = {
    //     count:count,
    //     incrementCount : ()=>{
    //         setCount(count+1);
    //     },
    // };
    //* Practicing the Createcontext

    return <BooksContext.Provider value={{}}>
        {children}
    </BooksContext.Provider>
    
}

export {Provider};
export default BooksContext;