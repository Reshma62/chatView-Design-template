import React,{useState} from 'react'
import SideBar from '../../components/SideBar';
import Search from '../../components/Search';
import GroupList from "../../components/GroupList";
import FriendList from "../../components/FriendList";
import Friends from "../../components/Friends";
import Mygroups from "../../components/Mygroups";
import UserList from "../../components/UserList";
import BlockUser from "../../components/BlockUser";


const Home = () => {
    let [verify, setVerify] = useState(true);
  return (
    <div className="flex justify-around py-5 box-border ">
      {verify ? (
        <>
          <div className="w-[220px] bg-primary h-screen max-h-[930px] rounded-3xl">
            <SideBar />
          </div>
          <div className="w-[540px]">
            <Search />
            <GroupList />
            <FriendList />
          </div>
          <div className="w-[460px]">
            <Friends />
            <Mygroups />
          </div>
          <div className="w-[460px] ">
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