import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {DotsHorizontalIcon, HomeIcon} from "@heroicons/react/solid";
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from "@heroicons/react/outline";
export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
        {/*twitter Logo*/}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" ></Image>
        </div>


        {/* Menu*/}
        <div className="mt-4 mb-205 xl:items-start" >
            <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
            <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
            <SidebarMenuItem text="Massages" Icon={InboxIcon}/>
            <SidebarMenuItem text="BookMark" Icon={BookmarkIcon}/>
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
            <SidebarMenuItem text="Profile" Icon={UserIcon}/>
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>

        </div>


        {/*Button*/}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>



        {/*Mini-Profile*/}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start my-auto">
            <img src="https://avatars.githubusercontent.com/u/71052435?v=4" alt="user-img" className="h-10 w-10 rounded-full xl:mr-2" />
            <div className=" leading-5 hidden xl:inline">
              <h4 className="font-bold">Sahand Ghavidel</h4>
              <p className="text-gray-500">@codewithsahand</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8" />

        </div>


    </div>
  )
}
