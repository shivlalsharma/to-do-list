import React,{useState,useRef,createContext, useEffect} from 'react';

export const Context = createContext({
    todos:[],
    inputRef:null,
    editIndex:null,
    addTodo:()=>{},
    deleteTodo:()=>{},
    editTodo:()=>{},
    handleSubmit:()=>{},
    timeSince:()=>{},
    isScrollVisible:false,
    scrollToTop:()=>{}
  });

export default function ThemeProvider({children}) {
    const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);
    const [editIndex,setEditIndex] = useState(null);
    const inputRef = useRef(null);
    const [isScrollVisible,setIsScrollVisible] = useState(false);

    const scrollToTop = ()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    }

    const handleScroll = ()=>{
        if(window.scrollY > 0){
            setIsScrollVisible(true);
        }
        else{
            setIsScrollVisible(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);

        return ()=>window.removeEventListener('scroll',handleScroll);
    },[]);

    const handleSubmit = (event)=>{
        event.preventDefault();
    }

    const addTodo = ()=>{
        const inputValue = inputRef.current.value.trim();
        if(inputValue){
            if(editIndex !== null){
                const updateTodos = todos.map((todo,i)=> i === editIndex ? {...todo,value: inputValue} : todo);
                setTodos(updateTodos);
                localStorage.setItem('todos',JSON.stringify(updateTodos));
                setEditIndex(null);
            }
            else{
                const todo = {value:inputValue,timestamp:Date.now()}
                setTodos([todo,...todos]);
                localStorage.setItem('todos',JSON.stringify([...todos,todo]));
            }
            inputRef.current.value = '';
        }
    }

    const editTodo = (index)=>{
        inputRef.current.value = todos[index].value;
        setEditIndex(index);
    }

    const deleteTodo = (index)=>{
        const newTodos = todos.filter((_,i)=> i !== index);
        setTodos(newTodos);
        localStorage.setItem('todos',JSON.stringify(newTodos));
        inputRef.current.value = '';
        setEditIndex(null);
    }

    const timeSince = (time)=>{
        const now = Date.now();
        const secondAgo = (Math.floor(now - time)/1000);

        const intervals = [
            {label:'year',seconds:31536000},
            {label:'month',seconds:2592000},
            {label:'week',seconds:31536000},
            {label:'day',seconds:86400},
            {label:'hour',seconds:3600},
            {label:'minute',seconds:60},
            {label:'second',seconds:1}
        ];

        for(const interval of intervals){
            const count = Math.floor(secondAgo/interval.seconds);
            if(count > 0){
                return `${count} ${interval.label}${count>1 ? 's':''} ago`;
            }
        }

        return 'just now';
    }
    
  return (
    <Context.Provider value={{todos,inputRef,editIndex,addTodo,deleteTodo,editTodo,handleSubmit,timeSince,isScrollVisible,scrollToTop}}>
        {children}
    </Context.Provider>
  )
}