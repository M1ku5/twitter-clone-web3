import { useRouter } from "next/router"
import { Dispatch, SetStateAction } from "react"
import { IconType } from "react-icons/lib"
import Sidebar from "./Sidebar"

const style = {
    wrapper: `w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
    iconContainer: `text-xl mr-4`,
    textGeneral: `font-medium`,
    textActive: `font-bold`
}

interface SidebarOptionProp {
    text: String
    Icon: IconType
    isActive?: Boolean
    setSelected?: Dispatch<SetStateAction<String>>
    redirect?: URL | String
}

function SidebarOption({ text, Icon, isActive, setSelected, redirect }: SidebarOptionProp) {
    const router = useRouter()
    return (
        <div className={style.wrapper}
        onClick={()=> {
            setSelected(text)
            router.push(redirect)
        }}
        >
            <div className={style.iconContainer}>
                <Icon />
            </div>
            <div className={`${isActive ? style.textActive : style.textGeneral}`}>
                {text}
            </div>
        </div>
    )
}

export default SidebarOption