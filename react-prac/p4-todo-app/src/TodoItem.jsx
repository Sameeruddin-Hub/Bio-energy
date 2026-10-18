import './index.css'
function TodoItem({ item, id, checked, btnDelete, onToggle }) {



    return (
        <>
            <li className="todo_list p-4  flex justify-between">
                <div className='flex gap-6 align-center'>
                    <input type="checkbox" className="appearance-none h-5 w-5 border-2 border-slate-400 rounded bg-slate-800 checked:bg-blue-600 checked:border-blue-600 cursor-pointer" checked={checked} onChange={() => onToggle(id)} />
                    <p className={`text-[16px]  ${checked ? 'line-through text-slate-300' : 'text-white'} `}>{item}</p>
                </div>

                <span className='text-white cursor-pointer ' onClick={() => btnDelete(id)}>
                    <i className="fi fi-rr-trash"></i>
                </span>
            </li >
        </>
    )
}

export default TodoItem;