const Gallery = () => {
  const data = [
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/435946186_122102655686266533_3594640317059543184_n.jpg?stp=dst-jpg_s720x720&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IMAzXnCxTn0Ab4sUimJ&_nc_ht=scontent.fccj6-1.fna&oh=00_AfB2UzdRfBVyAO1jMxnmF1P1xSez8sSO_fSTKUv_L4vsQg&oe=6616C640",
    },
    {
      imageLink:
        "https://scontent.fcok10-4.fna.fbcdn.net/v/t39.30808-6/435975667_122102654348266533_4365449880654075834_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yf3LOYaa4dwAb7dh3l1&_nc_ht=scontent.fcok10-4.fna&oh=00_AfCiKaDWXezXebHppQNBSRqW5RojECYe2LEHTZNs-Sb86A&oe=6616D1D0",
    },
    {
      imageLink:
        "https://scontent.fcok10-4.fna.fbcdn.net/v/t39.30808-6/436617527_122102684474266533_2050693614442843294_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0gW9wPpWcfsAb6qCZGO&_nc_ht=scontent.fcok10-4.fna&oh=00_AfCUPZJ26beKcAPyTv_L6VpnXRRcKmjYuof36gfXXyU8Nw&oe=6616EDB8",
    },
    {
      imageLink:
        "https://scontent.fcok10-1.fna.fbcdn.net/v/t39.30808-6/435967413_122102685110266533_1888300411269566090_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MdDfGisojlgAb5L1S2Q&_nc_ht=scontent.fcok10-1.fna&oh=00_AfC0h7VOBUhoK_hLXYgWnBs-Q48Ho4ctH8nK0VqC0Q_Ccg&oe=6616C749",
    },
    {
      imageLink:
        "https://scontent.fccj6-2.fna.fbcdn.net/v/t31.18172-8/665744_381367785270803_719472389_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D8VnhqeN164Ab4osQ7e&_nc_ht=scontent.fccj6-2.fna&oh=00_AfC6791wELiZLnOx50ZmJwkBZmXLt-Bvt238K4T4LZEqXw&oe=6638C1B5",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t31.18172-8/415837_359452197462362_1818286521_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=g8tJ1sohtaYAb7utZxx&_nc_ht=scontent.fccj6-1.fna&oh=00_AfAYTclZMcF2eksHxmOeiMytDLoA4GXRBHEyAOP2Wy_k_g&oe=6638C552",
    },
    {
      imageLink:
        "https://scontent.fccj6-2.fna.fbcdn.net/v/t39.30808-6/253864400_6467720489968805_8759142222549106235_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NqufCFSBFxAAb7mQMSh&_nc_ht=scontent.fccj6-2.fna&oh=00_AfDMTbQHpPNbHBA0VhOcvE0hzfxdDbz2uNv-qHEJrgaKGw&oe=66173707",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/254108210_6467720093302178_7516092169854842640_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QBHLwE8MvQQAb5QM51S&_nc_ht=scontent.fccj6-1.fna&oh=00_AfD079AFq_0b4DUxhXGpsPPgy4Vu0yKBTW6f9DnqxpBKpQ&oe=66174778",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/252224022_6467718613302326_3975779683849002676_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5KXxA75WbO8Ab4Px2ZO&_nc_ht=scontent.fccj6-1.fna&oh=00_AfAr-9Lga6X0uJF7TKgeS6AkPoyWf7118WYmvZZsPmVDIw&oe=66171F38",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/254496082_6467719396635581_1929522679731330914_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Iu1YQdzFt-AAb5OsqXC&_nc_ht=scontent.fccj6-1.fna&oh=00_AfDjLx4HTWTYdoviZ8Im8KcfCs-tpiAp3Hk6HH8ot32r-Q&oe=66172654",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/255020308_6467718443302343_2597951189028658706_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-iNkeQsCArQAb5iMjwK&_nc_ht=scontent.fccj6-1.fna&oh=00_AfBl7mXC6xrsfoCl4ZYIEUcVzWputMrkh8qnX1M-xzpQKA&oe=6617429C",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/252346884_6467718219969032_7153339773297021356_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BBgPJC0k5wQAb4ETk9s&_nc_ht=scontent.fccj6-1.fna&oh=00_AfDK2f2M_O5PVP8_zMdM7mSvjmDu-m3f67KootKC08pdbg&oe=661750AF",
    },
    {
      imageLink:
        "https://scontent.fccj6-2.fna.fbcdn.net/v/t39.30808-6/254162639_6467717986635722_3457843370353160312_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QDUV5AwfMyIAb7fG7yN&_nc_ht=scontent.fccj6-2.fna&oh=00_AfB5duKJy5LWWuwUB-FtWXo0PRtpZOCB9O8dlIZdespFhQ&oe=6617411E",
    },
    {
      imageLink:
        "https://scontent.fccj6-2.fna.fbcdn.net/v/t39.30808-6/252463291_6467717726635748_3411953418808161828_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=o6xhCvJDwWQAb43SmfE&_nc_oc=AdjxFok_4PxdF0X00v8TrfeJ40XU13L-rUC9cUnD0NaLympebrVGXGP-rt7qi24uEFPqT2ePv-pZv89t1i3HoR-Y&_nc_ht=scontent.fccj6-2.fna&oh=00_AfDYMpUVaN1mGuwTPDuFsFjEi8LObpbsF3UkxDQLBlPaSg&oe=66171E1A",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/252928131_6467717459969108_8778949375871770344_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hfQObcgzZMcAb5zXqli&_nc_ht=scontent.fccj6-1.fna&oh=00_AfB4d5TaAK4HViQ4TalIwQUc1yC-9L6-FDK2IeDVlIZHvg&oe=66174350",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/252060194_6467717203302467_2060127905804381828_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XPESIVmJ3ucAb6lDFyD&_nc_ht=scontent.fccj6-1.fna&oh=00_AfAPdczmgxNaqwYYJjAOF610NII8TJMhFMGSHpuokVFIfw&oe=661741A6",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/254032019_6467716949969159_325765651846514109_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8sjY5795eNkAb6i8NBN&_nc_ht=scontent.fccj6-1.fna&oh=00_AfAfPS15Xp-ZkywPZ4Gy0F5UvyfzfemJZy_UQwi91i8f_w&oe=661740EB",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/254235260_6467716659969188_2884346731944843503_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LtqYPFnclioAb6mQNak&_nc_ht=scontent.fccj6-1.fna&oh=00_AfAq_Tg_rmkoBY-WsGsOH9xDbTsZV-hrQto2sKSl-GPyBA&oe=66172ACF",
    },
    {
      imageLink:
        "https://scontent.fccj6-2.fna.fbcdn.net/v/t39.30808-6/254068240_6467716486635872_8354420037210375201_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MoG3JRvKkJMAb5mgA8s&_nc_ht=scontent.fccj6-2.fna&oh=00_AfDUb_WA7eeLp58dx0LtJeYpIkwWvCdVCPv0Cc-Y5rl1IQ&oe=66174D27",
    },
    {
      imageLink:
        "https://scontent.fccj6-2.fna.fbcdn.net/v/t39.30808-6/254950989_6467716259969228_401032161311474874_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PZo8cFzCPikAb6bEzse&_nc_ht=scontent.fccj6-2.fna&oh=00_AfDj_CyUpvlCJBNWxCWNENv5j7177hcgH3HB2IPg_vLi8g&oe=66173290",
    },

    {
      imageLink:
        "https://scontent.fccj6-2.fna.fbcdn.net/v/t39.30808-6/251921190_6467716089969245_984468173206619850_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5Qo_BcQ1tAAAb4Mlqgl&_nc_ht=scontent.fccj6-2.fna&oh=00_AfDcc2e42YocZ-8cmHvT6H1erCf6Fd-RZedCswxK4tMmig&oe=66172FF4",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/254575163_6467715359969318_1652143419894381178_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RrtX3B-y2MkAb5wS73S&_nc_ht=scontent.fccj6-1.fna&oh=00_AfCx_jDOJgXY8LXigQ_wSF2DTw-93Ni7kB7jPIAPtkga7g&oe=66173C27",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/251929832_6467714819969372_2770223639234421804_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bY2VP3Xw2CQAb64ZQXt&_nc_ht=scontent.fccj6-1.fna&oh=00_AfDPC5J7WIv3bVO8vDhDFMut4SE_bONvjs9m2Jfem34yCA&oe=6617508F",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/254267362_6467714619969392_5556171518306833372_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=i6VQ72r_PhMAb4O9ESn&_nc_oc=AdjdvbrOL5u0jjMAAF_AFC1E_wnxJSlXLUu0ZZxIrzowFCsHsxDf3sQ5j2_VYUe_0J5Em85aaHWtzpFcaTuvvAQu&_nc_ht=scontent.fccj6-1.fna&oh=00_AfCE0XrtJ2HvzhG5U0GUFVD-n067191kCOrehdXiEKSUpA&oe=6617395B",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/252761187_6467715089969345_3927865793640611685_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J1PEFcOLpHUAb7eZ1xC&_nc_ht=scontent.fccj6-1.fna&oh=00_AfAuKv71DEV_Sie8DBb-6LIAhN83HjyVlLyY4DPIpJPEkA&oe=66174E1E",
    },
    {
      imageLink:
        "https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/251865971_6467719196635601_2079861710568775926_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RV0UPIC58X4Ab6TUyTJ&_nc_ht=scontent.fccj6-1.fna&oh=00_AfATM7aCLYlYDNgpQquEjjAWBZcXOh7aeRfI4BsYRIF19w&oe=661741AC",
    },
    {
      imageLink:
        "https://scontent.fccj6-2.fna.fbcdn.net/v/t39.30808-6/254150550_6467718949968959_6657334375186985076_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jh-YBkynM2EAb4_SqaE&_nc_oc=Adi3JiA45zy7UJHL13D97Wiy63BKzmwBSiBnOpBqUS4b7wlv54lwSbO_EV2-6Ia0PcpISajw7QPHxppP1sw3DOh_&_nc_ht=scontent.fccj6-2.fna&oh=00_AfA4QAMdLmEWZkDcNN3CdltByVZPAZTFid76EJDhoo3GRA&oe=66173279",
    },
    {
      imageLink: "",
    },
    {
      imageLink: "",
    },
  ];
  return (
    <div className="mt-10 mb-5 mr-5 ml-5 ">
      <div>
        <h1 className="text-3xl lg:text-5xl mb-10 flex items-center justify-center font-semibold leading-normal text-amber-500 underline hover:text-amber-400 text-center">
          Gallery
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-full w-full max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
