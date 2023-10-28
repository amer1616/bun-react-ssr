import Counter from "./components/Counter.tsx";
import UsersList from "./components/UsersList/index.tsx";

export default function App(props: { message: string; users: any }) {
  return (
    <div className="App">
      <h1 className="text-4xl text-rose-500 font-bold underline">
        {props.message}
      </h1>
      <UsersList users={props.users} />
      <br />
      <hr />
      <Counter />
      <Counter />
    </div>
  );
}
