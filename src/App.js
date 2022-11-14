import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  var displayData = async () => {
    const response = fetch("https://jsonplaceholder.typicode.com/users");
    const json = await (await response).json();
    setUser(json);
    console.log(json);
    document.getElementById("remove").classList.add("visible");
    document.getElementById("remove").classList.remove("invisible");
  };

  var removeData = async () => {
    let arr = [];
    setUser(arr);
    document.getElementById("remove").classList.add("invisible");
    document.getElementById("remove").classList.remove("visible");
  };

  return (
    <div className="App">
      <div className="container">
        <table className="table my-0 shadow-sm">
          <thead>
            <tr id="table_head">
              <th className="col" scope="col">
                #
              </th>
              <th className="col" scope="col">
                Name
              </th>
              <th className="col" scope="col">
                Email
              </th>
              <th className="col" scope="col">
                Address
              </th>
              <th className="col" scope="col">
                Company
              </th>
              <th className="col" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.street.concat(
                    ", ",
                    user.address.city,
                    ", ",
                    user.address.zipcode
                  )}
                </td>
                <td>{user.company.name}</td>
                <td>
                  <Button
                    href="https://github.com/arslan759"
                    className="btn-sm btn-primary"
                  >
                    View Profile
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary my-2" onClick={displayData}>
          Display Data
        </button>
        {
          <button
            id="remove"
            className="btn btn-danger m-2 invisible"
            onClick={removeData}
          >
            Remove Data
          </button>
        }
      </div>
    </div>
  );
}

export default App;
