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
    POSTS     : require('../assets/Data/posts.json'),
    // DONATION_HISTORY: require('../assets/Data/donation-history.json'),
    // PROFILES  : './assets/Data/profile.json',
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

    // Profile images, key is handle
    PROFILE: {
        'worldwildlifefund' : require('../assets/Home/wwflogo.png'),
        'malalafund'        : require('../assets/Home/malala.jpg'),
        'savethebees'       : require('../assets/Home/bees.png'),
        'paloaltoshelter'   : require('../assets/Home/shelter.jpg'),
    },
    
}