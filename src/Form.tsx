

import { ChangeEvent, useEffect, useState } from "react";

type FormProps = {
  addUser: (user: { title: string; description: string }) => void;
  editForm: { id: number; title: string; description: string } | null;
  updateForm: (id: number, updatedUser: { title: string; description: string }) => void;
};

export default function Form({ addUser, editForm, updateForm }: FormProps) {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editForm) {
      updateForm(editForm.id, input);
    } else {
      addUser(input);
    }
    setInput({ title: "", description: "" });
  };

  useEffect(() => {
    if (editForm) setInput(editForm);
  }, [editForm]);

  return (
    <div className="m-auto w-1/3 mt-16 h-2/3 border-1 border-black shadow-2xl rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-6">
          <div className="">
            <label htmlFor="title" className="font-sans font-semibold mr-5">
              Title:
            </label>
            <textarea
              className="font-sans w-full sm:w-auto border-b border-black hover:bg-slate-100"
              id="title"
              name="title"
              placeholder="Enter title..."
              value={input.title}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="text-center mb-6">
          <div className="">
            <label htmlFor="description" className="font-sans font-semibold mr-5">
              Description:
            </label>
            <textarea
              className="font-sans w-full sm:w-auto mr-16 relative left-4 border-b border-black hover:bg-slate-100"
              id="description"
              name="description"
              placeholder="Enter description..."
              value={input.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="px-4 py-2 mt-4 bg-gray-600 text-white font-semibold rounded hover:bg-black relative bottom-5 h-12 w-32" type="submit">
            {editForm ? "Edit" : "Submit"} User
          </button>
        </div>
      </form>
    </div>
  );
}
