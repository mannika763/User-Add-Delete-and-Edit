import { User } from "./User";


type UserProps = {
  users: {
    title: string;
    description: string;
    id: number;
  }[];
  deleteUser: (id: number) => void;
  editUser: (id: number) => void;
};

function UserData({users, deleteUser, editUser }: UserProps) {
  return (
    <>
      { users.map((user) => (
        <User
          key={user.id}
          email={user.title}
          password={user.description}
          id={user.id}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      ))}
    </>
  );
}

export default UserData;

