type User = {
  id: number;
  name: string;
};

type UsersListProps = {
  users: Array<User>;
};

const UsersList = (props: UsersListProps) => {
  const isLoading = false;

  return (
    <ul className="">
      {props.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
