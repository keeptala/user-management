import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { AiOutlineLogout } from 'react-icons/ai';

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <div className=" bg-blue-400">
      <div className=" h-16 px-8 flex items-center">
        <p className=" text-white font-bold flex-auto">
          User Management System
        </p>
        <div>
          {session && (
            <div className=" flex items-center sm:space-x-2 justify-end  ">
              <Image
                layout="fixed"
                title="click to sign out"
                height={"30"}
                width={"30"}
                src={session?.user.image}
                className=" rounded-full cursor-pointer"
              ></Image>
              <p className=" text-white font-bold ">{session?.user.name}</p>
              <div className=" flex justify-center items-center">
              <button onClick={signOut}>
                <AiOutlineLogout />
              </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
