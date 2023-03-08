interface TesteProps{
    completed: number
}


export function NewClientForm(props: TesteProps){
    return(
        <div className="bg-zinc-900 w-10 h-10 text-whit rounded m-2 items-center justify-center flex">
            {props.completed}
        </div>
    )
}