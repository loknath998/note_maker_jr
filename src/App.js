import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CreateNote from './CreateNote';
import Note from './Note';
import EditNote from './EditNote';
import './App.css'


function App(){
    
    let [note_list,setNoteList] = useState([]);
    let [show,setShow] = useState(false);
    // const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    let [edit_heading , setEditHeading] = useState('');
    let [edit_body ,setEditBody] = useState('');
    let [edit_index, setEditIndex] = useState();
    let [edit_color, setEditColor] = useState('');

    const updateNoteList =(note)=>{
        if(note.heading !== '' || note.body !== '')
        {
            setNoteList((privious_list)=>{
                return [note,...privious_list];
            });
        }
    }

    const deleteNote =(index)=>{
        setNoteList((previous_list)=>{
            let new_list = previous_list.filter((value, ind)=>{
                return index !== ind;
            });
            // return previous_list.splice(index,1);
            return new_list;
        });
    }
    const showModal=(index)=>{
        setEditIndex(index);
        setEditHeading(note_list[index].heading);
        setEditBody(note_list[index].body);
        setEditColor(note_list[index].color);
        setShow(true);
    }
    const updateNote=(event,index)=>{
            let {value, name} = event.target;
            if(name ==='heading')
            setEditHeading(value);
            else if(name === 'body')
            setEditBody(value);

        console.log(index);
        let obj ={
            ...note_list[index],
            [name]:value
        };
        setNoteList(
            (previous_list)=>{
                previous_list.splice(index,1,obj);
                return previous_list;
            }
        );
    }
    const updateNoteColor=(color,index)=>{
        let obj ={
            ...note_list[index],
            color:color
        }
        setNoteList((previous_list)=>{
            previous_list.splice(index,1,obj);
            return previous_list;
        });
    }

    return <>
        <div className="main_div">

            <div className="heading_div">
                <h1>Note Maker junior</h1>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 text-center"  >
                        <CreateNote  updateNoteList={updateNoteList} />                 
                    </div>
                </div>
                
                <div className="row d-flex justify-content-center">
                {
                    note_list.map((value,index,arr)=>{
                        return <Note 
                                    heading={note_list[index].heading } 
                                    body={note_list[index].body} 
                                    note_color={note_list[index].color}
                                    key = {index}  
                                    index = {index}
                                    delete={deleteNote}
                                    showModal={showModal}
                                    />;
                    })
                }
                </div>
            </div>
            <EditNote  show={show} 
                        handleClose={handleClose} 
                        heading={edit_heading}
                        body={edit_body}
                        updateNote ={updateNote}
                        delete={deleteNote}
                        index={edit_index}
                        color={edit_color}
                        updateNoteColor={updateNoteColor}
                        />
        </div>
    </>
}

export default App;