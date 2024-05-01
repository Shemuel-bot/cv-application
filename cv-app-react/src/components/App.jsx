import { useState } from "react";
import { Field, DateField, ParagraphField } from "./InputField.jsx";
import Paper from "./Paper.jsx";
import "../styles/App.css";

function App() {
  const [getFullName, setFullName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getSchool, setSchool] = useState("");
  const [getDegree, setDegree] = useState("");
  const [getAttendance, setAttendance] = useState("");
  const [getCompany, setCompany] = useState("");
  const [getPosition, setPosition] = useState("");
  const [getResp, setResp] = useState("");
  const [getWork, setWork] = useState("");

  return (
    <div className="body">
      <div className="cv-fields">
        <h1>Your CV</h1>

        <h2>General</h2>
        <Field prop={"First Name"} placeholder={"first name here"} />
        <Field prop={"Last Name"} placeholder={"last name here"} />
        <Field prop={"Email"} placeholder={"mom's email here"} />
        <Field prop={"Phone"} placeholder={"mom's phone number here"} />

        <h2>Education</h2>
        <Field prop={"School Name"} placeholder={"school's name"} />
        <Field prop={"Degree"} placeholder={"degree"} />
        <DateField prop={"Years Attended"} />

        <h2>Practical Experience</h2>
        <Field prop={"Company Name"} placeholder={"company name here"} />
        <Field prop={"Position Title"} placeholder={"position title here"} />
        <ParagraphField prop={"Job Responsibilities"} />
        <DateField prop={"Years worked"} />

        <button
          id="submit"
          onClick={() => {
            setFullName(
              `${document.getElementById("First Name").value} ${document.getElementById("Last Name").value}`
            );
            setEmail(`${document.getElementById("Email").value}`);
            setPhone(`${document.getElementById("Phone").value}`);
            setSchool(`${document.getElementById("School Name").value}`);
            setDegree(`${document.getElementById("Degree").value}`);
            setAttendance(
              `${document.getElementById("Years Attended0").value},    ${document.getElementById("Years Attended1").value}`
            );
            setCompany(`${document.getElementById("Company Name").value}`);
            setPosition(`${document.getElementById("Position Title").value}`);
            setResp(`${document.getElementById("Job Responsibilities").value}`);
            setWork(`${document.getElementById("Years worked0").value},   ${document.getElementById("Years worked1").value}`);
          }}
        >
          Submit
        </button>
      </div>

      <Paper
        name={getFullName}
        email={getEmail}
        phone={getPhone}
        school={getSchool}
        degree={getDegree}
        attendance={getAttendance}
        company={getCompany}
        position={getPosition}
        responsibilities={getResp}
        work={getWork}
      />
    </div>
  );
}

export default App;
