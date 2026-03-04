import { useState } from "react";

function Register() {

  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [date,setDate] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    alert("Booking Successful");
  };

  return (

    <div className="container mt-4">

      <h2>Book Match Ticket</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Book
        </button>

        <button
          type="reset"
          className="btn btn-danger"
        >
          Clear
        </button>

      </form>

    </div>
  );
}

export default Register;