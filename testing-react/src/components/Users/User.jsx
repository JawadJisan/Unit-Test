import { useState } from "react";
import "./user.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { name, email };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  return (
    <div className="formWrapper">
      <h1>Testing Rect</h1>
      <h2>Testing react in h2</h2>
      <p>Enter the form data</p>

      <div data-testId="paragraph">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          libero omnis tenetur magnam dolores porro debitis aperiam? Vero vitae
          ad ex corrupti inventore debitis laborum iusto commodi harum facere!
          Ipsum recusandae aspernatur molestiae quia earum perspiciatis
          nesciunt, velit magnam, officia excepturi quidem adipisci expedita
          natus delectus doloremque dicta? Minus, inventore.
        </p>
      </div>

      <img src="https://image.jpg" alt="person" />

      <div title="open">open</div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={"jawad jisan"}
          onChange={handleNameChange}
          id="name"
          placeholder="User name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          id="email"
        />
        <br />
        <label>
          Terms:&nbsp;
          <input type="checkbox" />
        </label>
        <br />

        {editMode ? (
          <button type="submit">Submit</button>
        ) : (
          <button type="submit">Edit</button>
        )}
      </form>
      {users.length > 0 && (
        <div>
          <h2>Users:</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Users;
