import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import EditUser from "./EditUser";

const User = ({ user, deleteUser }) => {
   const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <tr key={user.id}>
      <td className=" text-left px-6 py-4 whitespace-nowrap">
        <div className=" text-sm text-gray-500">{user.firstName}</div>
      </td>
      <td className=" text-left px-6 py-4 whitespace-nowrap">
        <div className=" text-sm text-gray-500"> {user.lastName} </div>
      </td>
      <td className=" text-left px-6 py-4 whitespace-nowrap">
        <div className=" text-sm text-gray-500"> {user.emailId} </div>
      </td>
      <td className=" px-6 py-4 whitespace-nowrap text-right">
        <a
          onClick={openModal}
          // onClick={(e, id) => editUser(e, user.id)}
          className=" text-indigo-600 hover:text-indigo-900 hover:cursor-pointer px-4"
        >
          <EditUser
            closeModal={closeModal}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          edit
        </a>
        <a
          onClick={(e, id) => deleteUser(e, user.id)}
          className=" text-red-600 hover:text-red-900 hover:cursor-pointer"
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default User;
