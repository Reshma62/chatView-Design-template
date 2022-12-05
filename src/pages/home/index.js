import React,{useState} from 'react'
import SideBar from '../../components/SideBar';
import Search from '../../components/Search';
import GroupList from "../../components/GroupList";
import FriendRequst from "../../components/FriendRequst";
import Friends from "../../components/Friends";
import Mygroups from "../../components/Mygroups";
import UserList from "../../components/UserList";
import BlockUser from "../../components/BlockUser";


const Home = () => {
    let [verify, setVerify] = useState(true);
  return (
    <div className="flex justify-aee py-5 pl-5 box-border ">
      {verify ? (
        <>
          <div className="w-[180px]  bg-primary h-screen max-h-[930px] rounded-3xl">
            <SideBar />
          </div>
          <div className="w-[560px]">
            <Search />
            <GroupList />
            <FriendRequst />
          </div>
          <div className="w-[560px]">
            <Friends />
            <Mygroups />
          </div>
          <div className="w-[500px] ">
            <UserList />
            <BlockUser />
          </div>
        </>
      ) : (
        <div className="flex w-full h-screen justify-center items-center bg-primary">
          <h3 className="text-5xl bg-white text-primary text-center p-7  font-pop font-bold">
            please verify your mail
          </h3>
        </div>
      )}
    </div>
  );
}

export default Home