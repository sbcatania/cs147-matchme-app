export const COLORS = {
    GREEN: "#3D9A5F",
    BLUE: "#2D60B3",
    BLACK: "#2D60B3",
    MAGENTA: "#C70A72",
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    GRAY: "#C4C4C4",
    CLEAR: "rgba(0,0,0,0)",
  };

export const DATA = {
    POSTS: {
      1: {
        handle: "worldwildlifefund",
        caption: "Today Suyash explores the Sahara. Save the Animals Fundraiser.",
        image: require('../assets/Home/home.png'),
      },
      2: {
        handle: "worldwildlifefund",
        caption: "Today Suyash explores a newer landscape.",
        image: require('../assets/Home/home2.png'),
      },
      3: {
        handle: "malalafund",
        caption: "Malala addressing the UN Summit this morning. ",
        image: require('../assets/Home/home3.jpg')
      },
      4: {
        handle: "savethebees",
        caption: "It was a great day saving the bees from a giant hive. ",
        image: require('../assets/Home/home4.jpg')
      },
      5: {
        handle: "paloaltoshelter",
        caption: "earn about Finn's day in the life. Donate to make his life better.",
        image: require('../assets/Home/home5.jpg')
      }
    },
    PROFILES: {
      worldwildlifefund: {
        avatar: require('../assets/Home/wwflogo.png'),
        title: "Save the Animals",
        banner: require('../assets/Donation/moose.png'),
        name: "World Wildlife Fund",
        dates: "February 2022 - March 2023",
        about: "The Save the Animals campaign aims to ensure all animals have a habitat suited for their needs. Funds will go to conservation efforts worldwide."
        },
      malalafund: {
        avatar: require('../assets/Home/malala.jpg'),
        title: "Save the World",
        banner: require('../assets/Donation/moose.png'),
        name: "Malala Fund",
        dates: "February 2022 - March 2023",
        about: "Info here."
        },
      savethebees: {
        avatar: require('../assets/Home/bees.png'),
        title: "Protect Pollinators",
        banner: require('../assets/Donation/moose.png'),
        name: "Save the Bees",
        dates: "February 2022 - March 2023",
        about: "Info here."
        },
      paloaltoshelter: {
        avatar: require('../assets/Home/shelter.jpg'),
        title: "Save Palo Alto",
        banner: require('../assets/Donation/moose.png'),
        name: "Palo Alto Shelter",
        dates: "February 2022 - March 2023",
        about: "Info here."
        }
    },
    ACTIVITY: [
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
    MATCH_REQUESTS: [
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
    ],
    USERS: [
      {
        name: 'Brynn',
        avatar: require('../assets/Users/landay.jpeg'),
      },
      {
        name: 'Laura',
        avatar: require('../assets/Users/landay.jpeg'),
      },
      {
        name: 'Aidan',
        avatar: require('../assets/Users/landay.jpeg'),
      },
    ],
  };

export const IMAGES = {
    // Logos
    LOGO_WHITE     : require('../assets/Home/logowhite.png'),

    // Home screen
    LIKE_ICON      : require('../assets/Home/heart.png'),
    DISLIKE_ICON   : require('../assets/Home/xicon.png'),
    SHARE_ICON     : require('../assets/Home/share.png'),
    DONATE_ICON    : require('../assets/Navigation/donate.png'),

    // Other
    USER_ICON      : require('../assets/Icons/user.png'),
    DONATION_ARROW : require('../assets/Donation/arrow.png'),
    DONATION_SHARE : require('../assets/Donation/share.png'),
    DONATION_CHECK : require('../assets/Donation/check.png'),
    INBOX_CHECK    : require('../assets/Inbox/check.png'),    
  };
