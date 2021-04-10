import React,{useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ClearIcon from '@material-ui/icons/Clear';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
// import ColorLensTwoToneIcon from '@material-ui/icons/ColorLensTwoTone';
const CreateNote = (props)=>{
    let [note_heading, setNoteHeading] = useState('');
    let [note_body, setNoteBody] = useState('');
    let [note_color,setNoteColor] = useState('');
    const updateNoteHeading = (event)=>{
        setNoteHeading(event.target.value);
    }
    const updateNoteBody =(event)=>{
        setNoteBody(event.target.value);
    }
    const emptyNote =()=>{
        setNoteHeading('');
        setNoteBody('');
        setNoteColor('');
    }
    return  (<div className="note_creation_div " style={{backgroundColor:note_color}} >
                    <input type="text" className="note_input_heading" placeholder="enter Note heading" value={note_heading} onChange={updateNoteHeading}  />
                    <textarea  className="note_input_body" placeholder="enter note here...."  value={note_body} onChange={updateNoteBody} />
                    
                <div className="icons_div">
                    <IconButton  onClick={()=>setNoteColor('#89c35c')}>
                        <FormatColorFillIcon fontSize="large" style={{fill:"#89c35c"}} />
                    </IconButton>
                    
                    
                    <IconButton   onClick={()=>setNoteColor('#ffe5b4')}>
                        <FormatColorFillIcon fontSize="large" style={{fill:"#ffe5b4"}} />
                    </IconButton>
                    
                    
                    <IconButton  onClick={()=>setNoteColor('#f7bd59')}>
                        <FormatColorFillIcon fontSize="large" style={{fill:"#f7bd59"}} />
                    </IconButton>
                    
                    
                    <IconButton  onClick={()=>setNoteColor('#faafbe')}>
                        <FormatColorFillIcon fontSize="large" style={{fill:"#faafbe"}} />
                    </IconButton>
                    
                    
                    <IconButton  onClick={()=>setNoteColor('#e3e4fa')}>
                        <FormatColorFillIcon fontSize="large" style={{fill:"#e3e4fa"}} />
                    </IconButton>
                    
                    
                    <IconButton onClick={()=>{
                        props.updateNoteList({heading:note_heading,body:note_body,color:note_color});
                        emptyNote();
                    }}>
                        <AddCircleIcon fontSize="large" color="primary"  />
                    </IconButton>
                    <IconButton onClick={emptyNote } >
                        <ClearIcon fontSize="large" color="secondary" />
                    </IconButton>
                </div>
            </div>);
}
export default CreateNote;