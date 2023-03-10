import {AiFillHome, AiFillSetting} from 'react-icons/ai'
import {MdInventory2, MdOutlineInventory, MdFeedback} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

interface LinkType {
    name: string,
    link: string,
    icon?: IconType
}

export const LINKS: LinkType[] = [
    {name: "Home", link: "/", icon:AiFillHome },
    {name: "Inventory", link: "/inventory", icon:MdInventory2 },
    {name: "Orders", link: "/orders", icon:MdOutlineInventory },
    {name: "Customers", link: "/customers", icon:FiUsers },
    {name: "Feedbacks", link: "/feedbacks", icon:MdFeedback },
    {name: "Settings", link: "/settings", icon:AiFillSetting },
    {name: "Profile", link: "/profile", icon:FaUserCircle },
]