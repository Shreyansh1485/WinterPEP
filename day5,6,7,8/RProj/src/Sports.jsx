function Sports(props){
    const call=()=>{
        alert("you clicked button");
    }
    return (
        <button onClick={call}>click</button>
    )
}

export default Sports;