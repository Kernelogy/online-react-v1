// function CardComponent(attr){
//     return (
//         <>
//             <h3>{attr.title}</h3>
//             <p>{attr.content}</p>
//         </>
//     )
// }
function CardComponent({title, content}){
    return (
        <>
            <h3>{title}</h3>
            <p>{content}</p>
        </>
    )
}

export default CardComponent