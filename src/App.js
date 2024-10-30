import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      country: "India",
      street: "Dabang street",
      city: "Hoon",
      state: "Jharkhand",
      pin: 900012,
      check1: false,
      check2: false,
      check3: false,
      pushNotification: ""
    }

  );

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,

        //  ye [name] kasie use ho raha h... previous video me dekho
        [name]: type === "checkbox" ? checked : value
      }
    })

  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Submitted");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName" >name</label>
        <br />


        <input


          className="border border-red-400 p-2"

          type="text"
          // par name aur id ham kion diye h??
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={changeHandler}

        />

        <br />
        <br />
        <label htmlFor="lastName">LastName</label>
        <br />
        <input
          className="border border-green-400 p-2"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="enter your last name"
          value={formData.lastName}
          onChange={changeHandler}
        ></input>

        <br />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="border border-yellow-400 p-2"
          type="text"
          name="email"
          id="email"
          placeholder="dabang@hud_hud.com"
          value={formData.email}
          onChange={changeHandler}
        ></input>

        <br />
        <br />
        <label htmlFor="country">Country</label>
        <br />

        <select
          className="border border-gray-300 py-2"
          id="country"
          name="country"
          placeholder="select your country"
          value={formData.country}
          onChange={changeHandler}

        >

          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="australia">Australia</option>

        </select>

        <br />
        <br />
        <label htmlFor="street">Street</label>
        <br />

        <input
          className="border border-black-400 p-2"
          type="text"
          name="street"
          id="street"
          placeholder="enter your street"
          value={formData.street}
          onChange={changeHandler}
        >
        </input>

        <br />
        <br />
        <label htmlFor="city">City</label>
        <br />

        <input
          className="border border-black-400 p-2"
          type="text"
          name="city"
          id="city"
          placeholder="enter your city"
          value={formData.city}
          onChange={changeHandler}
        >
        </input>

        <br />
        <br />
        <label htmlFor="state">State</label>
        <br />

        <input
          className="border border-black-400 p-2"
          type="text"
          name="state"
          id="state"
          placeholder="enter your state"
          value={formData.state}
          onChange={changeHandler}
        >
        </input>

        <br />
        <br />
        <label htmlFor="pin">Pin/Zip</label>
        <br />

        <input
          className="border border-black-400 p-2"
          type="text"
          name="pin"
          id="pin"
          placeholder="enter your street"
          value={formData.pin}
          onChange={changeHandler}
        >
        </input>

        <br />
        <br />

        <label>
          By Email
        </label>

        <br />
        <br />

        <input
          type="checkbox"
          name="check1"
          id="check1"
          checked={formData.check1}
          onChange={changeHandler}
        >
        </input>
        <label htmlFor="check1">lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </label>

        <br />

        <input
          type="checkbox"
          name="check2"
          id="check2"
          checked={formData.check2}
          onChange={changeHandler}
        ></input>
        <label htmlFor="check2">lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </label>

        <br />

        <input
          type="checkbox"
          name="check3"
          id="check3"
          checked={formData.check3}
          onChange={changeHandler}
        >
        </input>
        <label htmlFor="check3">lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </label>

        <br />
        <br />

        <fieldset>
          <legend>Form Radio Button</legend>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <br />

          <input
            type="radio"
            name="pushNotification"
            id="pushEmail"
            value="same as email"
            onChange={changeHandler}
          >
          </input>
          <lable
            htmlFor="pushEmail"
          >
            Same as email
          </lable>

          <br />
          <input
            type="radio"
            name="pushNotification"
            id="pushnothing"
            value="Nothing as Email"
            onChange={changeHandler}
          >
          </input>
          <lable
            htmlFor="pushnothing"
          >
            same as no_email
          </lable>

          <br />
          <input
            type="radio"
            name="pushNotification"
            id="pushnothing"
            value="Only Email"
            onChange={changeHandler}
          >
          </input>
          <lable
            htmlFor="pushnothing"
          >
            Same as LOgo
          </lable>

        </fieldset>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
          </button>

      </form>






    </div>
  );
}

export default App;
