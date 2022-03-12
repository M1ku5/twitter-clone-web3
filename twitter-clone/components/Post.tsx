const style = {
    wrapper: `flex p-3 border-b border-[#38444d]`,
    profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
    postMain: `flex-1 px-4`,
    headerDetails: `flex items-center`,
    name: `font-bold mr-1`,
    verified: `text-[0.8rem]`,
    handleAndTimeAgo: `text-[#8899a6] ml-1`,
    tweet: `my-2`,
    image: `rounded-3xl`,
    footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
    footerIcon: `rounded-full text-lg p-2`,
  }

interface PostProps {
    displayName: string
    userName: string
    text: string
    avatar: string
    timestamp: string
    isProfileImageNft: Boolean | undefined
  }

const Post = ({
    displayName,
    userName,
    text,
    avatar,
    timestamp,
    isProfileImageNft
}: PostProps) => {
    return <div className={style.wrapper}>
        <div>
            {console.log(isProfileImageNft)}
            <img src={avatar} className={
            isProfileImageNft
              ? `${style.profileImage} smallHex`
              : style.profileImage
          }/>
        </div>
        <div className={style.postMain}>
            <div className="">
                <span></span>
            </div>
        </div>
    </div>
}   

export default Post