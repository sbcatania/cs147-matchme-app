
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
        handle: "malalafund",
        caption: "Malala takes YOUR questions about supporting education!",
        image: require('./assets/Home/home3.jpg'),
        capImg: require('./assets/Home/caption3.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/malala1.MP4',
      },
      2: {
        handle: "paloaltoshelter",
        caption: "Learn about Finn's day in the life. Donate to make his life better.",
        image: require('./assets/Home/home5.jpg'),
        capImg: require('./assets/Home/caption5.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/dogs1.MP4',
      },
      3: {
        handle: "worldwildlifefund",
        caption: "Today, we unpack how animals will protect our climate.",
        image: require('./assets/Home/home.png'),
        capImg: require('./assets/Home/caption1.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/wildlife1.MP4',
      },
      4: {
        handle: "savethebees",
        caption: "It was a great day saving the bees from a giant hive.",
        image: require('./assets/Home/home4.jpg'),
        capImg: require('./assets/Home/caption4.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/bees1.mov',
      },
      5: {
        handle: "worldwildlifefund",
        caption: "Animals that live under water are a vital part of our planet.",
        image: require('./assets/Home/home2.png'),
        capImg: require('./assets/Home/caption2.png'),
        video: 'https://sbcatania.github.io/cs147-matchme-app/assets/Home/wildlife2.MP4',
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
        title: "Save Ocean Wildlife",
        banner: require('./assets/Donation/wildlife_banner.png'),
        name: "World Wildlife Fund",
        dates: "February 2022 - March 2023",
        feed: require('./assets/Profile/wildlife_feed.png'),
        about: "Oceans provide life to millions of animals every year. Save the animals fund to help save the ocean's most vulnerable species.",
        },
      malalafund: {
        avatar: require('./assets/Home/malala.jpg'),
        title: "Save the World",
        banner: require('./assets/Donation/malala_banner.png'),
        name: "Malala Fund",
        dates: "February 2022 - March 2023",
        feed: require('./assets/Profile/malala_feed.png'),
        about: "We're raising money to support education for young women globally."
        },
      savethebees: {
        avatar: require('./assets/Home/bees.png'),
        title: "Protect Pollinators",
        banner: require('./assets/Donation/bees_banner.png'),
        name: "Save the Bees",
        dates: "February 2022 - March 2023",
        feed: require('./assets/Profile/bees_feed.png'),
        about: "Bees have an outsided imact on our planet! Donate to protect them and everything they do for our plants!"
        },
      paloaltoshelter: {
        avatar: require('./assets/Home/shelter.jpg'),
        title: "Save Our Dogs",
        banner: require('./assets/Donation/dogs_banner.png'),
        name: "Palo Alto Shelter",
        dates: "February 2022 - March 2023",
        feed: require('./assets/Profile/dogs_feed.png'),
        about: "Did you know it costs nearly $1000 to get a dog to a new home? Donate to help us find a home for our furry friends!"
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
        cause: "Goodwill",
        amount: "$5,000"
      },
      {
        id: 3,
        userName: "Katherine G",
        cause: "SPLC",
        amount: "$10"
      },
      {
        id: 4,
        userName: "Cat D",
        cause: "ACLU",
        amount: "$5"
      },
      {
        id: 5,
        userName: "Kristina I",
        cause: "NAACP",
        amount: "$3"
      },
      {
        id: 6,
        userName: "Taylor L",
        cause: "HRW",
        amount: "$3"
      },
      {
        id: 7,
        userName: "Shana H",
        cause: "Amnesty Intl.",
        amount: "$1"
      },
      {
        id: 8,
        userName: "Jianna S",
        cause: "World Vision",
        amount: "$4"
      },
      {
        id: 9,
        userName: "Morgan Z",
        cause: "Mayo Clinic",
        amount: "$5"
      },
      {
        id: 10,
        userName: "Emily Y",
        cause: "Planned Parenthood",
        amount: "$1"
      },
      {
        id: 11,
        userName: "YuYu Lin",
        cause: "United Way",
        amount: "$2"
      },
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
        content: "I just found out that bees are falling in numbers every year. They're so important! Hope you'll match ??????????",
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
    SEARCH: [
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
    INBOX_X        : require('./assets/Inbox/x.png'),    
  };

export const VIDEOS = [
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/malala1.MP4',
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/dogs1.MP4',
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/wildlife1.MP4',
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/bees1.mov',
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/wildlife2.MP4',
  'https://sbcatania.github.io/cs147-matchme-app/assets/Home/dogs1.MP4',
];
