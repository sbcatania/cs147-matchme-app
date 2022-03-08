export const COLORS = {
    GREEN: "#3D9A5F",
    BLUE: "#2D60B3",
    BLACK: "#2D60B3",
    MAGENTA: "#C70A72",
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    GRAY: "#C4C4C4"
  };

export const DATA = {
    POSTS          : require('../assets/Data/posts.json'),
    PROFILES       : require('../assets/Data/profiles.json'),
    ACTIVITY       : [
      {
        id: 1,
        userName: "Pablo O",
        cause: "YMCA",
        amount: "$5"
      },
      {
        id: 2,
        userName: "Pablo Oooooooo",
        cause: "Stanford",
        amount: "$5,000"
      },
      {
        id: 3,
        userName: "O Pablo",
        cause: "MTL",
        amount: "$0.00"
      }
    ],
    MATCH_REQUESTS : [
      {
        id: 1,
        userName: "James L",
        cause: "Code in Place",
        avatar: require("../assets/Users/landay.jpeg"),
        content: "Hiya Pablo! TAs normally get involved in this Stanford-started org democratizing CS. Could be up your alley ;)",
        amount: "$5"
      },
      {
        id: 2,
        userName: "James James",
        cause: "Homework Factory",
        avatar: require("../assets/Users/landay.jpeg"),
        content: "I like giving homework so I think you should support this cause",
        amount: "$500,000"
      },
      {
        id: 3,
        userName: "Landay",
        cause: "Hall of Shame",
        avatar: require("../assets/Users/landay.jpeg"),
        content: "Match here so they can make their site not hall of shame",
        amount: "$100"
      }
    ]
  };

export const IMAGES = {
    // Home images
    LIKE_ICON     : require('../assets/Home/heart.png'),
    DISLIKE_ICON  : require('../assets/Home/xicon.png'),
    SHARE_ICON    : require('../assets/Home/share.png'),
    DONATE_ICON   : require('../assets/Navigation/donate.png'),
    
    // Feed images, key is the post number
    HOME: {
        1: require('../assets/Home/home.png'),
        2: require('../assets/Home/home2.png'),
        3: require('../assets/Home/home3.jpg'),
        4: require('../assets/Home/home4.jpg'),
        5: require('../assets/Home/home5.jpg'),
    },
    
    // Profile images of non-profit pages, key is nonprofit handle
    PROFILE: {
        'worldwildlifefund' : require('../assets/Home/wwflogo.png'),
        'malalafund'        : require('../assets/Home/malala.jpg'),
        'savethebees'       : require('../assets/Home/bees.png'),
        'paloaltoshelter'   : require('../assets/Home/shelter.jpg'),
    },
    
    // Banner images of non-profits, key is nonprofit handle
    BANNER: {
        'worldwildlifefund' : require('../assets/Donation/moose.png'),
        'malalafund'        : require('../assets/Donation/moose.png'),
        'savethebees'       : require('../assets/Donation/moose.png'),
        'paloaltoshelter'   : require('../assets/Donation/moose.png'),
    },
    
    // Profile images of donors, key is donor handle
    DONORS: {
        'james'   : require('../assets/Users/landay.jpeg'),
        // 'pablo'   : require('../assets/Users/landay.jpg'),
    },
    
  };
