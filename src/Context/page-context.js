import { createContext, useContext } from "react";


export const PageContext = createContext();

export function PageProvider({children}){ 
    return(
        <PageContext.Provider value={{pagess:89}} >
            {children}
        </PageContext.Provider>
    );
}


export function UsePageContext(){
    return useContext(PageContext);
}

 //const[page,setPage]=useState(0);
