import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const Note =(props)=>{
    return <div className="col-md-3 text-center"  >
            <div className="note" style={{backgroundColor:props.note_color}}>

            <input className="note_heading" 
                    value={props.heading}
                    onChange={()=>{}}
                    onClick={()=>{props.showModal(props.index);}}  />
            <textarea className="note_body" 
                    value={props.body}
                    onClick={()=>{props.showModal(props.index);}}
                    onChange={()=>{}}></textarea>
                <IconButton onClick={()=>{props.showModal(props.index);
                        }}>
                        <EditTwoToneIcon color="primary" />
                </IconButton>
                <IconButton onClick={()=>{
                        props.delete(props.index);
                        }}>
                        <DeleteForeverOutlinedIcon color="secondary"/>
                </IconButton>
        </div>
    </div>
    ;
}
export default Note;