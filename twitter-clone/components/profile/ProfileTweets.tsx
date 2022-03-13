import React from 'react';
import Post from '../Post';

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }
  const tweets = [{
    displayName: "daw",
    userName: "0x0000000000000000000000000000000",
    avatar: "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
    text: "adwdwa",
    isProfileImageNft: false,
    timestamp: "2020-02-20-01T12:00:00:000Z"
}, {
    displayName: "daw",
    userName: "0x0000000000000000000000000000000",
    avatar: "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
    text: "adwdwa",
    isProfileImageNft: false,
    timestamp: "2020-02-20-01T12:00:00:000Z"
}, {
    displayName: "daw",
    userName: "0x0000000000000000000000000000000",
    avatar: "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
    text: "adwdwa",
    isProfileImageNft: false,
    timestamp: "2020-02-20-01T12:00:00:000Z"
}, {
    displayName: "daw",
    userName: "0x0000000000000000000000000000000",
    avatar: "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
    text: "adwdwa",
    isProfileImageNft: true,
    timestamp: "2020-02-20-01T12:00:00:000Z"
}]

function ProfileTweets() {
    return (
        <div className={style.wrapper}>
            {tweets.map((tweet, index) => (
                <Post key={index} displayName={tweet.displayName} userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`} text={tweet.text} avatar={tweet.avatar} timestamp={tweet.timestamp} isProfileImageNft={tweet.isProfileImageNft} />
            ))}
        </div>
    );
}

export default ProfileTweets;