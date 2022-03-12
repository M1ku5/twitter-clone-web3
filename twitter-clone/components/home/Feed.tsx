import { BsStars } from "react-icons/bs"
import Post from "../Post"
import TweetBox from "./TweetBox"

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

//   interface Tweet {
//     author: TweetAuthor
//     tweet: string
//     timestamp: string
//   }
  
//   interface TweetAuthor {
//     name: string
//     walletAddress: string
//     profileImage: string
//     isProfileImageNft: boolean
//   }


const tweets = [{
    displayName: "daw",
    userName: "0x0000000000000000000000000000000",
    avatar: "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
    text: "adwdwa",
    isProfileImageNft: false,
    timestamp: "2020-02-20-01T12:00:00:000Z"
},{
    displayName: "daw",
    userName: "0x0000000000000000000000000000000",
    avatar: "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
    text: "adwdwa",
    isProfileImageNft: false,
    timestamp: "2020-02-20-01T12:00:00:000Z"
},{
    displayName: "daw",
    userName: "0x0000000000000000000000000000000",
    avatar: "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
    text: "adwdwa",
    isProfileImageNft: false,
    timestamp: "2020-02-20-01T12:00:00:000Z"
},{
    displayName: "daw",
    userName: "0x0000000000000000000000000000000",
    avatar: "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
    text: "adwdwa",
    isProfileImageNft: true,
    timestamp: "2020-02-20-01T12:00:00:000Z"
}]


function Feed(){
    return (
        <div className={`${style.wrapper}`}>
            <div className={`${style.header}`}>
                <div className={`${style.headerTitle}`}>Home</div>
                <BsStars />
            </div>
            {console.log(tweets)}
            <TweetBox />
            {tweets.map((tweet, index) => (
                <Post 
                key={index}
                displayName={tweet.displayName}
                userName={tweet.userName}
                avatar={tweet.avatar}
                text={tweet.text}
                isProfileImageNft={tweet.isProfileImageNft}
                timestamp={tweet.timestamp}
                />
            ))}
        </div>
    )
}

export default Feed