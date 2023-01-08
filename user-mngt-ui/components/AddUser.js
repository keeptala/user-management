import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useState } from "react";
import UserList from "./UserList";

const AddUser = () => {
  const USER_BASE_URL = "http://localhost:8000/api/v1/users";

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({ ...user, [event.target.name]: value });
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const response = await fetch(USER_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("something went wrong!");
    }
    const _user = await response.json();
    setResponseUser(_user);
    reset(e);
  };

  const reset = (e) => {
    e.preventDefault();
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
    setIsOpen(false);
  };

  const [responseUser, setResponseUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" container mx-auto my-8">
        <div className=" h-12 ">
          <button
            onClick={openModal}
            className=" rounded bg-blue-400 text-white px-6 py-2 font-semibold hover:bg-blue-700"
          >
            AddUser
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={"fixed inset-0 z-10 overflow-y-auto"}
          onClose={closeModal}
        >
          <div className=" min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter={" ease-out  duration-300"}
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className=" inline-block w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className=" text-lg font-medium leading-6 text-gray-900"
                >
                  Add New User
                </Dialog.Title>
                <div className=" flex max-w-md max-auto">
                  <div className="py-2">
                    <div className=" h-14 my-4 ">
                      <label className=" block text-gray-600 text-sm font-normal">
                        First Name
                      </label>
                      <input
                        type={"text"}
                        name="firstName"
                        value={user.firstName}
                        onChange={(e) => handleChange(e)}
                        className=" h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="py-2">
                      <div className=" h-14 my-4 ">
                        <label className=" block text-gray-600 text-sm font-normal">
                          Last Name
                        </label>
                        <input
                          type={"text"}
                          name="lastName"
                          value={user.lastName}
                          onChange={(e) => handleChange(e)}
                          className=" h-10 w-96 border mt-2 px-2 py-2"
                        ></input>
                      </div>
                      <div className="py-2">
                        <div className=" h-14 my-4 ">
                          <label className=" block text-gray-600 text-sm font-normal">
                            Email Id
                          </label>
                          <input
                            type={"text"}
                            name="emailId"
                            value={user.emailId}
                            onChange={(e) => handleChange(e)}
                            className=" h-10 w-96 border mt-2 px-2 py-2"
                          ></input>
                        </div>
                        <div className=" h-14 my-4 space-x-4 py-4">
                          <button
                            onClick={saveUser}
                            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded"
                          >
                            save
                          </button>
                          <button
                            onClick={reset}
                            class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-5 border border-red-500 hover:border-transparent rounded"
                          >
                            close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <UserList user={responseUser} />
    </>
  );
};

export default AddUser;
