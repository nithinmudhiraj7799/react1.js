export const ListParentOl=()=>{
    return(
        <ul>
       <ListChild/>
        </ul>
    )
}
export const ListParentUl=()=>{
    return(
        <ol>
         <ListChild/>
        </ol>
    )
}
export const ListChild=()=>{
    return(
        <div>
        <li>apple</li>
        <li>banana</li>
        <li>orange</li>
        </div>
    )
}
