import { useState } from "react";
import Form from "./Form";
import UserData from "./UserData";

export default function App() {
  const [users, setUsers] = useState<
    {
      title: string;
      description: string;
      id: number;
    }[]
  >([]);

  const [editForm, setEditForm] = useState<{
    id: number;
    title: string;
    description: string;
  } | null>(null);

  const addUser = (user: { title: string; description: string }) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const editUser = (id: number) => {
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setEditForm({ id: userToEdit.id, title: userToEdit.title, description: userToEdit.description });
    }
  };

  const updateForm = (id: number, updatedUser: { title: string; description: string }) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, title: updatedUser.title, description: updatedUser.description };
      }
      return user;
    });
    setUsers(updatedUsers);
    setEditForm(null);
  };

  return (
    <div>
      <Form addUser={addUser} editForm={editForm} updateForm={updateForm} />
      <div className="">
        <UserData users={users} deleteUser={deleteUser} editUser={editUser} />
      </div>
    </div>
  );
}
