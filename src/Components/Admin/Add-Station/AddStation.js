import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import "./AddStation.css"
const AddStation = () => {
    const StationName = useRef();
    const RadioFrequency = useRef();
    const StationImage = useRef();
    const StationContent = useRef();
    const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = StationName.current.value;
    const Frequency = RadioFrequency.current.value;
    const image = StationImage.current.value;
    const description = StationContent.current.value;
    const totalContent = { name,Frequency, image, description };
    console.log(totalContent);
    fetch("http://localhost:5000/new-station", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalContent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
        alert("A New Radio Station is Added")
          e.target.reset();
        }
      });
  };
    return (
        <div className="add-course">
      <div>
        <h1>Add Radio Station here</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name=""
            id=""
            ref={StationName}
            placeholder="Radio Station Name"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={RadioFrequency}
            placeholder=" Station Frequency"
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={StationImage}
            placeholder="Station Image or Url"
          />
          <br />
          <br />
          <textarea
            id=""
            ref={StationContent}
            placeholder="Content of Radio Station"
            name=""
            rows=""
            cols=""
          ></textarea>
          <br />
          <br />
         <Button variant="outline-dark" type='submit'>Add Station</Button>
        </form>
      </div>
    </div>
    );
};

export default AddStation;