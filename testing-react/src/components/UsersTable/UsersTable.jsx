import { useEffect, useState } from "react";

function UserTable({ users }) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1500);
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody data-testid="users">
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showMessage && <div data-testid="welcome"> Welcome John Wick</div>}
    </div>
  );
}

export default UserTable;
