import '../styles/inputFields.css'

function Field(prop){

    return(
        <div  className='field-div'>
            <h3>{prop.prop}</h3>
            <input type="text" placeholder={prop.placeholder} id={prop.prop}/>
        </div>
    )
}

function DateField(prop){
    return(
        <div  className='field-div'>
            <h3>{prop.prop}</h3>
            <input type="date" id={prop.prop+'0'}/>
            <input type="date" id={prop.prop+'1'}/>
        </div>
    )
}


function ParagraphField(prop){
    return(
        <div  className='field-div'>
            <h3>{prop.prop}</h3>
            <textarea name={prop.prop} id={prop.prop} cols="30" rows="5" ></textarea>
        </div>
    )
}

export { Field, DateField, ParagraphField}