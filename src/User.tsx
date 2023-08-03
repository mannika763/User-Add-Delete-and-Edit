type UserProp = {
  email: string;
  password: string;
  id: number;
  deleteUser: (id: number) => void;
  editUser: (id: number) => void;
};

export function User({ email, password, id, deleteUser, editUser }: UserProp) {
  return <>
     <div className={'w-1/2 h-full mt-20 ml-10 border-1 border-black rounded-md hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'}>

    <div className="m-10">
    <p className="font-serif m-5">Title: {email}</p>
    <p className="font-serif m-5">Description: {password}</p>
    </div>
    <div>
      <button className="rounded text-xs px-3 py-2 border-2 text-red-600 box-shadow: 4.0px 8.0px 8.0px rgba(0,0,0,0.38) hover:bg-red-600 hover:text-red-100 duration-300" onClick={() => deleteUser(id)}>Delete</button>
      <button className="rounded text-xs font-medium px-4 py-2 border-2 float-right text-green-600 box-shadow: 4.0px 8.0px 8.0px rgba(0,0,0,0.38) hover:bg-green-600 hover:text-green-100 duration-300" onClick={() => editUser(id)}>Edit</button>
    </div>
  </div>
  </>;
}
