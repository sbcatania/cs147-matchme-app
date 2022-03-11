
export const COLORS = {
    GREEN: "#3D9A5F",
    BLUE: "#2D60B3",
    BLACK: "#2D60B3",
    MAGENTA: "#C70A72",
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    GRAY: "#C4C4C4",
    CLEAR: "rgba(0,0,0,0)",
    BROWN: '#A6613A',
    YELLOW: '#FDD015',
    LIGHTBLUE: '#4CB3ED',
    PURPLE: '#8739A7',
    RED: '#A80900',
    ORANGE: '#FF823D',
  };

export const DATA = {
    POSTS: {
      0: {
        handle: "worldwildlifefund",
        caption: "Today Suyash explores the Sahara. Save the Animals Fundraiser.",
        image: require('./assets/Home/home.png'),
        capImg: require('./assets/Home/caption1.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/wildlife1.MP4',
      },
      1: {
        handle: "worldwildlifefund",
        caption: "Today Suyash explores the Sahara. Save the Animals Fundraiser.",
        image: require('./assets/Home/home.png'),
        capImg: require('./assets/Home/caption1.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/wildlife1.MP4',
      },
      2: {
        handle: "worldwildlifefund",
        caption: "Today Suyash explores a newer landscape.",
        image: require('./assets/Home/home2.png'),
        capImg: require('./assets/Home/caption2.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/wildlife2.MP4',
      },
      3: {
        handle: "malalafund",
        caption: "Malala addressing the UN Summit this morning. ",
        image: require('./assets/Home/home3.jpg'),
        capImg: require('./assets/Home/caption3.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/malala1.MP4',
      },
      4: {
        handle: "savethebees",
        caption: "It was a great day saving the bees from a giant hive. ",
        image: require('./assets/Home/home4.jpg'),
        capImg: require('./assets/Home/caption4.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/bees1.mov',
      },
      5: {
        handle: "paloaltoshelter",
        caption: "Learn about Finn's day in the life. Donate to make his life better.",
        image: require('./assets/Home/home5.jpg'),
        capImg: require('./assets/Home/caption5.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/dogs1.MP4',
      },
      6: {
        handle: "paloaltoshelter",
        caption: "Learn about Finn's day in the life. Donate to make his life better.",
        image: require('./assets/Home/home5.jpg'),
        capImg: require('./assets/Home/caption5.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/dogs1.MP4',
      },
    },
    PROFILES: {
      worldwildlifefund: {
        avatar: require('./assets/Home/wwflogo.png'),
        title: "Save the Animals",
        banner: require('./assets/Donation/moose.png'),
        name: "World Wildlife Fund",
        dates: "February 2022 - March 2023",
        about: "The Save the Animals campaign aims to ensure all animals have a habitat suited for their needs. Funds will go to conservation efforts worldwide."
        },
      malalafund: {
        avatar: require('./assets/Home/malala.jpg'),
        title: "Save the World",
        banner: require('./assets/Donation/moose.png'),
        name: "Malala Fund",
        dates: "February 2022 - March 2023",
        about: "Info here."
        },
      savethebees: {
        avatar: require('./assets/Home/bees.png'),
        title: "Protect Pollinators",
        banner: require('./assets/Donation/moose.png'),
        name: "Save the Bees",
        dates: "February 2022 - March 2023",
        about: "Info here."
        },
      paloaltoshelter: {
        avatar: require('./assets/Home/shelter.jpg'),
        title: "Save Our Dogs",
        banner: require('./assets/Donation/moose.png'),
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
        userName: "Khuyen L",
        cause: "Stanford",
        amount: "$5,000"
      },
      {
        id: 3,
        userName: "Katherine G",
        cause: "MTL",
        amount: "$0.00"
      }
    ],
    MATCH_REQUESTS: [
      {
        id: 1,
        userName: "James L",
        cause: "Code in Place",
        avatar: require("./assets/Users/landay.jpeg"),
        content: "Hiya Pablo! TAs normally get involved in this Stanford-started org democratizing CS. Could be up your alley ;)",
        amount: "$5"
      },
      {
        id: 2,
        userName: "Jennifer M",
        cause: "Save the Animals",
        avatar: require("./assets/Users/avatar-1.png"),
        content: "I know you care about endangered animals, so I think this is an organization you'd love!",
        amount: "$20"
      },
      {
        id: 3,
        userName: "Malaysia J",
        cause: "Protect Pollinators",
        avatar: require("./assets/Users/avatar-2.png"),
        content: "I just found out that bees are falling in numbers every year. They're so important! Hope you'll match 🙃❤️",
        amount: "$500"
      },
      {
        id: 4,
        userName: "Taayden G",
        cause: "Palo Alto Shelter",
        avatar: require("./assets/Users/avatar-5.png"),
        content: "There are so many issues going on even in our local community. Palo Alto Shelter is doing great work.",
        amount: "$35"
      }
    ],
    USERS: [
      {
        name: 'Jennifer M',
        avatar: require('./assets/Users/avatar-1.png'),
      },
      {
        name: 'Malaysia J',
        avatar: require('./assets/Users/avatar-2.png'),
      },
      {
        name: 'Taayden G',
        avatar: require('./assets/Users/avatar-5.png'),
      },
    ],
    SEARCH_DATA: [
      {
        id: 1,
        name: "World Wildlife Fund",
        details: "@worldwildlifefund"
      },
      {
        id: 2,
        name: "Malala Fund",
        details: "@malalafund"
      },
      {
        id: 3,
        name: "Save the Bees",
        details: "@savethebees"
      },
      {
        id: 4,
        name: "Palo Alto Shelter",
        details: "@paloaltoshelter"
      },
    ],
  };

export const IMAGES = {
    // Logos
    LOGO_WHITE     : require('./assets/Home/logowhite.png'),

    // Home screen
    LIKE_ICON      : require('./assets/Home/heart.png'),
    DISLIKE_ICON   : require('./assets/Home/xicon.png'),
    SHARE_ICON     : require('./assets/Home/share.png'),
    DONATE_ICON    : require('./assets/Navigation/donate.png'),

    // Non-profit
    REWARD_BAR     : require('./assets/Nonprofit/reward-bar.png'),

    // Other
    USER_ICON      : require('./assets/Icons/user.png'),
    DONATION_ARROW : require('./assets/Donation/arrow.png'),
    DONATION_SWIPE : require('./assets/Donation/swipe-up-arrow.png'),
    DONATION_SHARE : require('./assets/Donation/share.png'),
    DONATION_CHECK : require('./assets/Donation/check.png'),
    INBOX_CHECK    : require('./assets/Inbox/check.png'),    
  };

export const VIDEOS = [
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/wildlife1.MP4',
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/wildlife2.MP4',
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/malala1.MP4',
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/bees1.mov',
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/dogs1.MP4',
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/dogs1.MP4',
];
