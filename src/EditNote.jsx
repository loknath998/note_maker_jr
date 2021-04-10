import React, { useState } from 'react';
import {Modal} from 'react-bootstrap';

import IconButton from '@material-ui/core/IconButton';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';

const EditNote =(props)=>{
    let [edit_color, setEditColor] = useState(props.color);
        
    return (<Modal show={props.show} onHide={props.handleClose} >
                <Modal.Header closeButton style={{backgroundColor:edit_color}} >
                    <Modal.Title>Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:edit_color}} >
                    <div className="col-md-12 text-center"  >
                        <div className="edit_note">
                            <input className="edit_note_heading" 
                                value={props.heading}
                                name="heading"
                                placeholder="Enter Note heading"
                                onChange={(event)=>{
                                    props.updateNote(event,props.index);
                                }}  />
                            <textarea className="edit_note_body" 
                                    value={props.body}
                                    name="body"
                                    placeholder="create note header"
                                    onChange={(event)=>{
                                        props.updateNote(event,props.index);
                                    }}></textarea>
                                <IconButton  onClick={()=>{props.updateNoteColor('#89c35c',props.index);
                                                            setEditColor("#89c35c");}}>
                                <FormatColorFillIcon fontSize="large" style={{fill:"#89c35c"}} />
                                </IconButton>
                                
                                
                                <IconButton   onClick={()=>{props.updateNoteColor('#ffe5b4',props.index);
                                                            setEditColor('#ffe5b4')}}>
                                    <FormatColorFillIcon fontSize="large" style={{fill:"#ffe5b4"}} />
                                </IconButton>
                                
                                
                                <IconButton  onClick={()=>{props.updateNoteColor('#f7bd59',props.index);
                                                            setEditColor("#f7bd59");}}>
                                    <FormatColorFillIcon fontSize="large" style={{fill:"#f7bd59"}} />
                                </IconButton>
                                
                                
                                <IconButton  onClick={()=>{props.updateNoteColor('#faafbe',props.index);
                                                            setEditColor('#faafbe');}}>
                                    <FormatColorFillIcon fontSize="large" style={{fill:"#faafbe"}} />
                                </IconButton>
                                
                                
                                <IconButton  onClick={()=>{props.updateNoteColor('#e3e4fa',props.index);
                                                            setEditColor('#e3e4fa');}}>
                                    <FormatColorFillIcon fontSize="large" style={{fill:"#e3e4fa"}} />
                                </IconButton>
                                
                                
                                
                            <IconButton onClick={()=>{
                                props.handleClose();
                                props.delete(props.index);
                            }}>
                                <DeleteForeverOutlinedIcon />
                            </IconButton>
                            <IconButton onClick={()=>{
                                props.handleClose();
                            }}>
                                <ClearIcon />
                            </IconButton>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>close</Button>
                </Modal.Footer> */}
            </Modal> );
}
export default EditNote;