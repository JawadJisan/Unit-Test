import FormComponent from "./components/Form/Form";
import FruitList from "./components/FruitList/FruitList";
import PrimaryButton from "./components/PrimaryButton";
// import UserEvent from "./components/UserEvent/userEvent";
import Users from "./components/Users/User";
import UserTable from "./components/UsersTable/UsersTable";

const fruits = ["apple", "banana", "orange", "mango", "pineapple"];

export const users = [
  { id: 1, name: "John", age: 32 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 43 },
];

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      {/* <PrimaryButton />
      <PrimaryButton actionType="Delete" /> */}
      {/* <Users /> */}

      {/* <FruitList fruits={fruits} /> */}
      {/* <UserTable users={users} /> */}
      {/* <UserEvent /> */}
      <FormComponent
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
};

export default App;
