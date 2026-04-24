export type Tag =
  | "AR"
  | "VR"
  | "Multiplayer"
  | "Hypercasual"
  | "Educational"
  | "Casino";

export type PortfolioItem = {
  id: number;
  name: string;
  images: string[];
  videoUrl?: string;
  description?: string;
  playstore?: string;
  tags?: Tag[];
};
export const portfolioData: Omit<PortfolioItem, "id">[] = [
  {
    name: "Tarneeb Masters",
    videoUrl: "https://www.youtube.com/watch?v=sXrJRbCA7vE",
    playstore: "",
    description: `
                Tarneeb masters is a card game which is based on specific tarneeb rules.Play with your friends, or level up to compete with elite players and prove you’re a true Tarneeb Master
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li>Compete in different game rooms.</li>
        <li>Challenge your friends in private rooms</li>
        <li>Level up & Gain rank.</li>
        <li>Guest Modebr</li>
        <li>Bot System</li>
        <li>VIP Rooms</li>
        <li>VIP Subscriber</li>
        </ul>
        
        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Websockets</li>
            <li>RESTful APIs</li>
        </ul>`,
    // description: '<div>test < /div>',
    images: [
      "https://play-lh.googleusercontent.com/dvNkPA4JMhC1p0Oo4uwpmi5nLPB8iBFUII4J2c6_auRPJ2MMg-gQuc5ROkrcEGBO_vR1=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/Fzoa6tbBxYu28ylrfXTRLZGjRUjhioWU2y9eGHojUdJVeinWZRj8_dlnIrvNE8yk9lc=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/SCUshbHdmZpnGaMP3JMvCK2mwQxIWJ8EDiI9JQMoIhw0jWEY1jPKwkthdakXQS-IbtU=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/u7aocR9FjCoClsJJES90XH2Ko8U5Gh6-FFGxiutC5PPWpZYs7d6pSmdGBU_nMesbZ8n9=w2560-h1440-rw",
    ],
    tags: ["Multiplayer"],
  },
  {
    name: "Aramco F1 Paddock",
    videoUrl: "https://www.youtube.com/watch?v=ELJvmEYJHQU",
    playstore: "",

    description: `
         <strong>Description:</strong>
         <br/>
              Step into the world of Formula 1 with the Armco F1 Paddock, a cutting-edge AR experience crafted exclusively for Aramco’s F1 events. By scanning a detailed F1 car engine model, users can immerse themselves in various interactive scenarios. Whether you’re racing against time to collect vital information, testing your knowledge with question-and-answer challenges, making strategic choices, or watching a city spring to life around the engine, this AR project offers a dynamic and engaging way to experience the excitement of F1 racing. The experience is accessible in multiple languages, including Japanese, Traditional Chinese, Simplified Chinese, and English, ensuring a global reach. Powered by Vuforia, the project ensures accurate model tracking and a seamless user experience.
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li><strong>Interactive Scenarios:</strong> Engage in a variety of activities including races, Q&A sessions, strategic decision-making, and city augmentation around the engine.</li>
        <li><strong>AR Model Tracking:</strong> Utilizes Vuforia for precise tracking of the F1 car engine model.</li>
        <li><strong>Exclusive Design:</strong> Created specifically for Aramco’s F1 events, offering a unique experience tailored for racing enthusiasts.</li>
        <li><strong>Multilingual Support:</strong> Experience the project in Japanese, Traditional Chinese, Simplified Chinese, and English.</li>
        <li><strong>Immersive Experience:</strong> High-quality visuals and interactive elements bring the world of F1 to life in augmented reality.</li>
        <li><strong>Event Integration:</strong> Perfect for enhancing the atmosphere at F1 events, providing attendees with a memorable and engaging activity.</li>
    
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Vuforia</li>

        </ul>`,
    images: [
      "/assets/images/portfolio/paddock/1.png",
      "/assets/images/portfolio/paddock/2.png",
      "/assets/images/portfolio/paddock/3.png",
      // "/assets/images/portfolio/paddock/4.png",
      "/assets/images/portfolio/paddock/5.png",
    ],
    tags: ["AR"],
  },
  {
    name: "Markad Racing",
    videoUrl: "https://www.youtube.com/watch?v=S2rC8riOCvw",
    playstore: "",

    description: `
                Marked Racing is a multiplayer camel racing game in which you can buy/sell camels and feed them and get them ready for specific type of races.
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li>Multiplayer Camel Race</li>
        <li>Single Race Sessions</li>
        <li>Tournament Racing Mode</li>
        <li>Camel Equipment upgrades</li>
        <li>Camel Feeding & Cleanliness</li>
        <li>EZBA Upgrades</li>
        <li>Camel Food & Drinks</li>
	<li>Camel Medicines</li>
	<li>Camel Sell & Purchase</li>
	<li>Jockey, Saddle and Reins Upgrades</li>
	<li>Camel Training</li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Websockets</li>
            <li>RESTful APIs</li>
        </ul>`,
    images: [
      "https://play-lh.googleusercontent.com/XJmJNVRvlq4joVB7l60Nlbi59Ie63xsRlT-oWe_zisdP-HOPnD6qClYGx67x-pZdE5Q=w5120-h2880",
      "https://play-lh.googleusercontent.com/hYh5sF2YmECga0epmQCdIVZcYn7PKNQjiZ8jWXFoy81zRNrw4lAge-tqCeYVtCnyTIY=w5120-h2880",
      "https://play-lh.googleusercontent.com/GvTKj3NSQ9OvRDnt6k1KIj2VFPVeraEMUUoL1_QvDowsCzEElyUQiNjoqy-Dr1NCJRSV=w5120-h2880",
      "https://play-lh.googleusercontent.com/FxtZMpppWyv8BNzWvTVmam5U-MVpBUfG98ZzsPtZl8bigPgxA8A8_Ksompg2IjREDbxx=w5120-h2880",
    ],
    tags: ["Multiplayer"],
  },
  {
    name: "Battle Royale",
    videoUrl: "https://www.youtube.com/watch?v=iTLbKnchrcw",
    playstore: "",

    description: `
                Battle Royale is a multiplayer game designed on the principals of Clash Royal Game by Supercell. In Battle Royale we have multiple new cards and characters that can be used against your enemies. You can also fight with bot if there's no player available. 

        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li>Deck selection</li>
        <li>Shop</li>
        <li>1v1 Battle</li>
        <li>Player V Bot Battle</li>
        <li>Cards upgradation</li>
        <li>Profile Upgradation / XP system</li>
        <li>Login/Signup system</li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Photon Networking</li>
            <li>RESTful APIs</li>
        </ul>`,
    images: [
      "/assets/images/portfolio/battleroyal/1.png",
      "/assets/images/portfolio/battleroyal/2.png",
      "/assets/images/portfolio/battleroyal/3.png",
      "/assets/images/portfolio/battleroyal/4.png",
    ],
    tags: ["Multiplayer"],
  },
  {
    name: "Kynect Game",
    videoUrl: "https://www.youtube.com/watch?v=D01DCRnfjDI",
    playstore: "",

    description: `
                Kynect is a multiplayer education project in which students can be engaged using multiple features like mini games and scoring and reward system.  

        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li>Multiplayer</li>
        <li>Voice Chat </li>
        <li>Multiple Customisable Characters</li>
        <li>Multiple Customisable Companions</li>
        <li>Leaderboard</li>
        <li>Multiple Mini Games</li>
        <li>Dynamic Quiz System </li>
	<li>Watch lessons system </li>
	<li>Multiple Environments like jungle , village etc</li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Photon Networking</li>
	    <li>Photon Voice</li>
            <li>RESTful APIs</li>
        </ul>`,
    images: [
      "/assets/images/portfolio/kynect/1.jpg",
      "/assets/images/portfolio/kynect/2.jpg",
      "/assets/images/portfolio/kynect/3.jpg",
      "/assets/images/portfolio/kynect/4.jpg",
    ],
    tags: ["Educational"],
  },

  {
    name: "Kaizilla P2E Game",
    videoUrl: "https://www.youtube.com/watch?v=ppjloYKxIeg&feature=youtu.be",
    playstore: "",

    description: `
                Kaizilla is a play to earn game where user needs specific tokens and NFTs to enter the game. It’s an open world game where users can surf and play mini games and win rewards.   

        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li>Multiplayer</li>
        <li>Voice Chat </li>
        <li>NFTs as characters</li>
        <li>Team up</li>
        <li>Earn in tokens</li>
        <li>Multiple Mini Games</li>
        <li>Notifications System </li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Photon Networking</li>
	    <li>Photon Voice</li>
            <li>RESTful APIs</li>
        </ul>`,
    images: [
      "/assets/images/portfolio/kaizilla/1.png",
      "/assets/images/portfolio/kaizilla/2.png",
      "/assets/images/portfolio/kaizilla/3.png",
      "/assets/images/portfolio/kaizilla/4.png",
    ],
    tags: ["Multiplayer"],
  },
  // Speed Superhero Game is hidden for now.
  {
    name: "Parchisking Game",
    videoUrl: "https://youtu.be/S00TLA2y0bM",
    playstore: "",

    description: `
               Parchisking is a 3D Multiplayer Game somehow similar to ludo but with different rules. This game is built using Photon Fusion and player's progress and authentication system is connected with Backend via Restful APIs

        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li>Single Player With AI</li>
        <li>Multiplayer Social Lobby</li>
        <li>Multiplayer Ranked Lobby</li>
        <li>Invite Friends via Link</li>
        <li>Customized Pawns , dices and boards</li>
         <li>Deeplinking</li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Photon Fusion</li>
            <li>Restful APIs</li>

        </ul>`,
    images: [
      "/assets/images/portfolio/parchisking/2.jpg",
      "/assets/images/portfolio/parchisking/1.jpg",
      "/assets/images/portfolio/parchisking/3.jpg",
      "/assets/images/portfolio/parchisking/4.jpg",
      // "/assets/images/portfolio/parchisking/5.jpg",
    ],
    tags: ["Multiplayer"],
  },
  {
    name: "Boat Merge Game",
    videoUrl: "https://www.youtube.com/watch?v=meL7_JhmVsk",
    playstore: "",

    description: `
         <strong>Description:</strong>
         <br/>
              Boat Merge is an engaging and visually captivating mobile game where players merge identical boats to unlock more advanced vessels, build a powerful fleet, and collect rewards. With simple drag-and-drop mechanics, players can combine boats to discover new models, upgrade their fleet, and navigate through increasingly challenging levels. The game provides a relaxing yet strategic experience, perfect for casual players who enjoy merging and nautical-themed games.

        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li><strong>Simple Drag-and-Drop Mechanics:</strong> Intuitive controls for effortless gameplay.</li>
        <li><strong>Diverse Boat Collection:</strong> Discover and unlock a variety of boats with unique designs.</li>
        <li><strong>Upgradable Fleet:</strong> Enhance your boats to improve their performance and unlock special bonuses.</li>
        <li><strong>Reward System:</strong> Earn coins and rewards as you progress through levels.</li>
        <li><strong>Leaderboard:</strong> Compete with other players and climb the ranks.</li>
        <li><strong>Achievements:</strong> Unlock achievements to showcase your progress and skill.</li>                  
        <li><strong>Offline Earnings:</strong> Continue to earn rewards even when you're not actively playing.</li>
        <li><strong>Spin Wheel:</strong> Try your luck with the spin wheel to win extra rewards and bonuses.</li>
        <li><strong>Engaging Graphics:</strong> Vibrant visuals and smooth animations for an immersive experience.</li>
        <li><strong>Offline Play:</strong> Enjoy the game anytime, anywhere without needing an internet connection.</li>
            
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Firebase</li>

        </ul>`,
    images: [
      "/assets/images/portfolio/boatmerge/4.jpg",
      "/assets/images/portfolio/boatmerge/2.jpg",
      "/assets/images/portfolio/boatmerge/1.jpg",
      "/assets/images/portfolio/boatmerge/3.jpg",
      // "/assets/images/portfolio/parchisking/5.jpg",
    ],
    tags: ["Hypercasual"],
  },
  {
    name: "Drift Car Parking",
    videoUrl: "https://www.youtube.com/watch?v=JS9_MH3LoLQ",
    playstore: "",

    description: `
         <strong>Description:</strong>
         <br/>
              Imagine you're behind the wheel, drifting through the streets with just one goal: to park perfectly. In this hyper-casual car drift game, your car moves forward automatically, and it's up to you to control the drift and slide into the empty parking spots on either the left or right side. It's all about timing and precision—one wrong move, and you’ll miss your chance to park!<br/>
              With different environments like bustling city streets, sandy deserts, and the mysterious night, each level offers a new challenge. As you master your drifting skills, you'll climb the leaderboard, unlock achievements, and prove you’re the best drifter out there. Simple controls, addictive gameplay, and vibrant graphics make this game a must-play for anyone who loves a good driving challenge.
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li><strong>Intuitive Drift Controls:</strong> Simple swipe controls for smooth and precise drifting.</li>
        <li><strong>Varied Environments:</strong> Explore 3-4 different maps, including city, desert, and night settings.</li>
        <li><strong>Parking Challenges:</strong> Drift and park in the right spot to progress through levels.</li>
        <li><strong>Leaderboard:</strong> Compete with other players and see who can achieve the highest score.</li>
        <li><strong>Achievements:</strong> Unlock various achievements as you perfect your drifting and parking skills.</li>
        <li><strong>Hyper-Casual Gameplay:</strong> Quick and addictive gameplay that’s easy to pick up but hard to put down.</li>
        <li><strong>Vibrant Graphics:</strong> Enjoy detailed environments with crisp, colorful visuals.</li>
        <li><strong>Offline Play:</strong> Play anytime, anywhere, even without an internet connection.</li>
    
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Firebase</li>

        </ul>`,
    images: [
      "/assets/images/portfolio/cardrift/1.jpg",
      "/assets/images/portfolio/cardrift/2.jpg",
      "/assets/images/portfolio/cardrift/3.jpg",
      "/assets/images/portfolio/cardrift/4.jpg",
      // "/assets/images/portfolio/parchisking/5.jpg",
    ],
    tags: ["Hypercasual"],
  },
  {
    name: "Tap Fast",
    videoUrl: "https://www.youtube.com/watch?v=RF4ZHaYVCWw",
    playstore: "",

    description: `
         <strong>Description:</strong>
         <br/>
              Tap Fast is a time-based hypercasual game focused on reaction speed and precision. Players must tap buttons in the exact sequence shown on screen before the timer runs out. As the game progresses, the pace increases and the available time gets shorter, creating an intense challenge that rewards focus, memory, and quick decision-making.
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li><strong>Sequence-Based Tapping:</strong> Follow and tap the exact button order shown above.</li>
        <li><strong>Time Pressure Gameplay:</strong> Complete each sequence before the countdown ends.</li>
        <li><strong>Increasing Difficulty:</strong> The game gets faster over time with less room for error.</li>
        <li><strong>Hypercasual Design:</strong> Easy to learn controls with highly replayable gameplay.</li>
        <li><strong>Reaction and Focus Training:</strong> Improves hand-eye coordination and speed.</li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
        </ul>`,
    images: [
      "/assets/images/portfolio/tapfast/1.png",
      "/assets/images/portfolio/tapfast/2.png",
      "/assets/images/portfolio/tapfast/3.png",
      "/assets/images/portfolio/tapfast/4.png",
    ],
    tags: ["Hypercasual"],
  },
  {
    name: "Quess",
    videoUrl: "https://youtu.be/vytwOJVBlnY",
    playstore: "",

    description: `
         <strong>Description:</strong>
         <br/>
              Quess is a 4-player multiplayer chess game built on an extended chess board with custom rules and advanced gameplay systems. The game supports competitive online play, hotseat mode for local sessions, and private rooms for friend matches, offering a unique chess experience beyond traditional formats.
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li><strong>4-Player Chess Battles:</strong> Play strategic chess matches with up to four players.</li>
        <li><strong>Extended Chess Board:</strong> Includes a larger custom board layout for deeper gameplay.</li>
        <li><strong>Custom Rule System:</strong> Enhanced rule set designed for unique game flow and balance.</li>
        <li><strong>Hotseat Mode:</strong> Supports local turn-based play on a single device.</li>
        <li><strong>Private Rooms:</strong> Create and join private rooms to play with friends.</li>
        <li><strong>Multiplayer Matchmaking:</strong> Built for smooth online competitive sessions.</li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Photon PUN</li>
        </ul>`,
    images: [
      "/assets/images/portfolio/quess/1.png",
      "/assets/images/portfolio/quess/2.png",
      "/assets/images/portfolio/quess/3.png",
      "/assets/images/portfolio/quess/4.png",
    ],
    tags: ["Multiplayer"],
  },
  {
    name: "Checkers",
    videoUrl: "https://youtu.be/KcUEhDsmxXA",
    playstore: "",

    description: `
         <strong>Description:</strong>
         <br/>
              Checkers is a 4-player multiplayer checkers game featuring an extended board and custom rules for richer strategic gameplay. Similar to Quess, it supports online matches, hotseat sessions, and private room play, delivering a social and competitive board-game experience.
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li><strong>4-Player Checkers Matches:</strong> Compete with up to four players in each game.</li>
        <li><strong>Extended Board Design:</strong> Larger board configuration for expanded tactics.</li>
        <li><strong>Custom Rule System:</strong> Tailored gameplay rules for a unique checkers experience.</li>
        <li><strong>Hotseat Mode:</strong> Local multiplayer support on the same device.</li>
        <li><strong>Private Rooms:</strong> Host and join private games with friends.</li>
        <li><strong>Realtime Multiplayer:</strong> Online connectivity for smooth competitive play.</li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Photon PUN</li>
        </ul>`,
    images: ["/assets/images/portfolio/quess/1.png"],
    tags: ["Multiplayer"],
  },
  {
    name: "Backgammon",
    videoUrl: "https://youtu.be/r86Kj73jY4Y",
    playstore: "",

    description: `
         <strong>Description:</strong>
         <br/>
              Backgammon is a 4-player multiplayer board game with a custom board design and custom rules to create a fresh gameplay style. Like Quess, it includes online multiplayer, hotseat support, and private rooms, making it ideal for both casual and competitive players.
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li><strong>4-Player Backgammon:</strong> Engage in multiplayer matches with four participants.</li>
        <li><strong>Custom Board Setup:</strong> Designed with a unique board layout and interactions.</li>
        <li><strong>Custom Rule Variants:</strong> Rule adjustments for deeper and more dynamic strategy.</li>
        <li><strong>Hotseat Mode:</strong> Play locally with pass-and-play mechanics.</li>
        <li><strong>Private Rooms:</strong> Create private lobbies for friend-only matches.</li>
        <li><strong>Online Multiplayer:</strong> Reliable networking for live competitive games.</li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Photon PUN</li>
        </ul>`,
    images: [
      "/assets/images/portfolio/backgammon/1.png",
      "/assets/images/portfolio/backgammon/2.png",
      "/assets/images/portfolio/backgammon/3.png",
      "/assets/images/portfolio/backgammon/4.png",
    ],
    tags: ["Multiplayer"],
  },
  {
    name: "Killer Pool",
    videoUrl: "https://www.youtube.com/watch?v=v6yhu-Z4rH0",
    playstore: "",

    description: `
         <strong>Description:</strong>
         <br/>
              Killer Pool is a multiplayer pool game developed with competitive online gameplay at its core. Built using Photon Fusion, it supports realtime match sessions and includes crypto wallet integrations where players can participate using real money, creating a high-stakes and skill-based experience.
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li><strong>Realtime Multiplayer Pool:</strong> Play live online pool matches against other players.</li>
        <li><strong>Photon Fusion Networking:</strong> Smooth and responsive multiplayer gameplay architecture.</li>
        <li><strong>Crypto Wallet Integration:</strong> Wallet connection support for player transactions.</li>
        <li><strong>Real Money Gameplay:</strong> Competitive sessions where real money can be used to play.</li>
        <li><strong>Competitive Match Flow:</strong> Built for skill-based play and high engagement.</li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>Photon Fusion</li>
        </ul>`,
    images: [
      "/assets/images/portfolio/killerpool/1.png",
      "/assets/images/portfolio/killerpool/2.png",
      "/assets/images/portfolio/killerpool/3.png",
      "/assets/images/portfolio/killerpool/4.png",
    ],
    tags: ["Multiplayer", "Casino"],
  },
  {
    name: "VR Car",
    videoUrl: "https://www.youtube.com/watch?v=Z3jBOqQpG24",
    playstore: "",

    description: `
         <strong>Description:</strong>
         <br/>
              VR Car is a demonstration project focused on car sensor visualization and 3D graph-based data understanding in virtual reality. The experience presents practical knowledge through interactive scenes and ends with a question-based assessment to validate user understanding.
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li><strong>Car Sensor Demonstrations:</strong> Showcases key sensor concepts in an immersive VR setup.</li>
        <li><strong>3D Graph Visualizations:</strong> Displays data and behavior using interactive spatial graphs.</li>
        <li><strong>Knowledge Demonstration Flow:</strong> Structured as a practical learning-oriented experience.</li>
        <li><strong>Final Question Round:</strong> Includes end-of-session questions to check user understanding.</li>
        <li><strong>Meta Quest Support:</strong> Designed for Meta Quest 2 and Meta Quest 3.</li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
        </ul>`,
    images: [
      "/assets/images/portfolio/vrcar/1.png",
      "/assets/images/portfolio/vrcar/2.png",
      "/assets/images/portfolio/vrcar/3.png",
      "/assets/images/portfolio/vrcar/4.png",
    ],
    tags: ["VR", "Educational"],
  },
  {
    name: "Fire fighters StormStick",
    videoUrl: "https://youtube.com/shorts/hsRo84LWtP8",
    playstore: "",

    description: `
         <strong>Description:</strong>
         <br/>
              Fire fighters StormStick is a VR training project that teaches firefighters how to use a storm stick after fire drills or real incident scenarios. Built as a focused training simulation and completed in just two days, the project delivers a practical and immersive learning workflow for field readiness.
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li><strong>Storm Stick Usage Training:</strong> Guided VR practice for correct storm stick handling.</li>
        <li><strong>Firefighter Drill Context:</strong> Training designed for post-drill and real-experience preparation.</li>
        <li><strong>Scenario-Based Learning:</strong> Practical interaction flow to improve operational confidence.</li>
        <li><strong>Immersive VR Delivery:</strong> Built for realistic engagement in virtual training spaces.</li>
        <li><strong>Fast Development Cycle:</strong> Complete training project delivered in 2 days.</li>
        <li><strong>Meta Quest Support:</strong> Runs on Meta Quest 2 and Meta Quest 3.</li>
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
        </ul>`,
    images: [
      "/assets/images/portfolio/vrstormstick/1.png",
      "/assets/images/portfolio/vrstormstick/2.png",
      "/assets/images/portfolio/vrstormstick/3.png",
      "/assets/images/portfolio/vrstormstick/4.png",
    ],
    tags: ["VR", "Educational"],
  },
  {
    name: "Brandweer Training",
    videoUrl: "https://www.youtube.com/watch?v=F16Bbyb9QNQ",
    playstore: "",

    description: `
         <strong>Description:</strong>
         <br/>
              Brandweer Training is a highly immersive VR simulation developed for Oculus Quest 2 and 3, designed to train firefighters in realistic emergency scenarios. This virtual reality experience includes three detailed fire trucks and over 20 different scenarios, each meticulously crafted to replicate real-world firefighting situations. Firefighters engage in hands-on training by performing essential tasks such as pressing buttons, connecting hoses, checking gauges, and deploying ladders. Through this VR training, firefighters can hone their skills and prepare for actual emergencies in a safe, controlled environment.
        <br/>
        <br/>
        <strong>Features:</strong>
        <ul>
        <li><strong>Realistic Firefighting Scenarios:</strong> Over 20 detailed scenarios that mimic real-life emergency situations.</li>
        <li><strong>Interactive Training Tasks:</strong> Perform essential tasks like pressing buttons, connecting pipes, checking gauges, and operating ladders.</li>
        <li><strong>Three Fire Trucks:</strong> Train with three fully equipped fire trucks, each with unique features and functionalities.</li>
        <li><strong>Virtual Reality Immersion:</strong> Experience the intensity of firefighting in a safe, immersive VR environment using Oculus Quest 2 and 3.</li>
        <li><strong>Comprehensive Skill Development:</strong> Enhance critical firefighting skills through realistic, scenario-based training.</li>
        <li><strong>Safe Learning Environment:</strong> Allows firefighters to practice and perfect their responses without the risks of real-world emergencies.</li>
    
        </ul>

        <strong>Technologies Stacks:</strong>
        <ul>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>AutoHand</li>

        </ul>`,
    images: [
      "/assets/images/portfolio/brandweer/1.png",
      "/assets/images/portfolio/brandweer/2.png",
      "/assets/images/portfolio/brandweer/3.png",
      "/assets/images/portfolio/brandweer/4.png",
      // "/assets/images/portfolio/brandweer/5.png",
    ],
    tags: ["VR"],
  },
  {
    name: "Star Burst Slot Game",
    videoUrl: "https://youtu.be/VDUXaYVppug",
    playstore: "",

    description: `
       <strong>Description:</strong>
        <br/>
        Star Burst - Slot Game is a single-player slot machine experience inspired by classic casino gameplay with enhanced control options. The game is designed to provide a fair yet customizable random outcome, allowing players to adjust winning probabilities for testing and balancing purposes. It also features the iconic Star Burst mechanic, along with an Autoplay system that can be configured to stop under specific conditions, giving players greater flexibility.
        <br/>
        <br/>
        <strong>Features:</strong>
      <ul>
        <li><strong>Single Player Slot Experience:</strong> Classic casino-inspired gameplay designed for engaging solo play.</li>
        <li><strong>Adjustable Winning Probability:</strong> Developers can fine-tune win rates for balancing and testing.</li>
        <li><strong>Star Burst Feature:</strong> Special mechanic that increases excitement and reward potential.</li>
        <li><strong>Autoplay System:</strong> Players can enable auto-spins with customizable stop conditions.</li>
        <li><strong>Randomized Gameplay:</strong> Every spin is fully random, ensuring a fair experience.</li>
      </ul>

      <strong>Technologies Stacks:</strong>
    <ul>
      <li>Unity Engine</li>
      <li>C#</li>
    </ul>`,
    images: [
      "/assets/images/portfolio/starburst/1.jpg",
      "/assets/images/portfolio/starburst/2.jpg",
      "/assets/images/portfolio/starburst/3.jpg",
      "/assets/images/portfolio/starburst/4.jpg",
      // "/assets/images/portfolio/brandweer/5.png",
    ],
    tags: ["Casino"],
  },
];

export const portfolioDataWithId: PortfolioItem[] = portfolioData.map(
  (item, index) => ({
    ...item,
    id: index + 1,
  })
);
