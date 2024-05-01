function Paper(prop){
    return(
    <div className='cv-paper'>
      
      <h1>{prop.name}</h1>

        <div>
        <h2>General</h2>
        <h4>Email: {prop.email}</h4>
        <h4>Phone: {prop.phone}</h4>
        </div>

        <div>
        <h2>Education</h2>
        <h4>School: {prop.school}</h4>
        <h4>Degree: {prop.degree}</h4>
        <h4>Years Spent: {prop.attendance}</h4>
        </div>
        
        <div>
        <h2>Experience</h2>
        <h4>Company: {prop.company}</h4>
        <h4>Position: {prop.position}</h4>
        <h4>Responsibilities: {prop.responsibilities}</h4>
        <h4>Years Worked: {prop.work}</h4>
        </div>
        
     </div>
    )
}

export default Paper