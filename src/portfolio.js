/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anuj Ramatri",
  title: "Hi, I'm Anuj",
  subTitle: emoji(
    "A passionate advocate for sustainable living and founder of EcoFreaky, dedicated to making eco-friendly products accessible and affordable."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lyhWRzieMqqNgv_VREYpghX-yANTMsoP/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anujramatri",
  linkedin: "https://www.linkedin.com/in/anujramatri/",
  gmail: "ramatri.anuj@gmail.com",
  facebook: "https://www.facebook.com/anujramatri/",
  instagram: "https://www.instagram.com/anujramatri/",
  twitter: "https://x.com/anujramatri",
  youtube: "https://www.youtube.com/c/AnujRamatri",
  display: true
};


// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "PROMOTING SUSTAINABLE LIVING THROUGH INNOVATIVE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Founder of EcoFreaky, an e-commerce platform offering eco-friendly products in personal care, stationery, fashion, and home decor."
    ),
    emoji(
      "⚡ Founder of Small Box Office, focusing on creative media solutions."
    ),
    emoji(
      "⚡ Content creation and filmmaking to raise awareness about environmental issues and sustainable practices."
    )
  ],
  softwareSkills: [
    {
      skillName: "Filmmaking",
      fontAwesomeClassname: "fas fa-video"
    },
    {
      skillName: "Content Creation",
      fontAwesomeClassname: "fas fa-pencil-alt"
    },
    {
      skillName: "Social Media Management",
      fontAwesomeClassname: "fas fa-share-alt"
    },
    {
      skillName: "Entrepreneurship",
      fontAwesomeClassname: "fas fa-lightbulb"
    }
  ],
  display: true
};
// Education Section


const educationInfo = {
  display: false, // Set to true if you want to display your education details
  schools: [
    {
      schoolName: "St. John's School",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "High School Diploma",
      duration: "Year - Year",
      desc: "Description of your time at the school.",
      descBullets: ["Achievement 1", "Achievement 2"]
    }
    // Add more schools as needed
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set to true to show Proficiency Section
  experience: [
    {
      Stack: "Graphic Design", // Expertise in graphic design
      progressPercentage: "90%" // High proficiency
    },
    {
      Stack: "Motion Design", // Experience in motion design
      progressPercentage: "85%" // High proficiency
    },
    {
      Stack: "Film Editing", // Skills in film editing
      progressPercentage: "80%" // Significant proficiency
    },
    {
      Stack: "Screenwriting", // Experience in screenwriting
      progressPercentage: "75%" // Considerable proficiency
    },
    {
      Stack: "Frontend Development", // Knowledge in frontend development
      progressPercentage: "70%" // Solid proficiency
    },
    {
      Stack: "Business Development", // Experience as a founder and business owner
      progressPercentage: "85%" // High proficiency
    }
  ],
  displayCodersrank: false // Set to false as coding platforms aren't the primary focus
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Founder",
      company: "Small Box Office",
      companylogo: require("./assets/images/sboLogo.webp"), // Replace with actual logo path
      date: "Apr 2023 – Present",
      desc: "Leading a dynamic team to create engaging, tailored content for brands. Focus on video production, content creation, and social media management.",
      descBullets: [
        "Spearheaded innovative storytelling projects",
        "Helped brands connect through impactful media content"
      ]
    },
    {
      role: "Chief Executive Officer",
      company: "EcoFreaky",
      companylogo: require("./assets/images/ecofreakyLogo.avif"), // Replace with actual logo path
      date: "Jan 2022 – Present",
      desc: "Overseeing operations and growth of EcoFreaky, a sustainability-focused initiative."
    },
    {
      role: "Film Director",
      company: "Purani Dili Talkies",
      companylogo: require("./assets/images/pdtLogo.jpeg"), // Replace with actual logo path
      date: "May 2015 – Feb 2023",
      desc: "Directed and produced films with a deep cultural and social impact for over 7 years."
    },
    {
      role: "Film Director",
      company: "Freelance",
      companylogo: require("./assets/images/freelanceLogo.webp"), // Replace with actual logo path
      date: "Mar 2015 – May 2015",
      desc: "Directed independent projects for various clients and platforms."
    },
    {
      role: "Associate Creative Director",
      company: "Locus Design",
      companylogo: require("./assets/images/freelanceLogo.webp"), // Replace with actual logo path
      date: "Jun 2013 – May 2015",
      desc: "Led creative direction and storytelling strategy for design projects."
    },
    {
      role: "Film Director",
      company: "Freelance",
      companylogo: require("./assets/images/freelanceLogo.webp"),
      date: "Feb 2013 – Jun 2013",
      desc: "Worked independently on film direction and production."
    },
    {
      role: "Assistant Film Director",
      company: "Xebec Films",
      companylogo: require("./assets/images/freelanceLogo.webp"), // Replace with actual logo path
      date: "Jan 2011 – Feb 2013",
      desc: "Assisted in the direction and production of various film projects."
    },
    {
      role: "Editor in Chief",
      company: "XPLOIT News",
      companylogo: require("./assets/images/freelanceLogo.webp"), // Replace with actual logo path
      date: "Mar 2010 – Dec 2010",
      desc: "Monitored and edited footage from multiple feeds for corporate films."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "STARTUPS AND COMPANIES WHERE I'VE CONTRIBUTED TO TECHNOLOGY AND SUSTAINABILITY",
  projects: [
    {
      image: require("./assets/images/ecofreakyLogo.avif"), // Replace with actual logo path
      projectName: "EcoFreaky",
      projectDesc: "Founded an e-commerce platform offering eco-friendly products to promote sustainable living.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.ecofreaky.com/"
        }
      ]
    },
    {
      image: require("./assets/images/sboLogo.webp"), // Replace with actual logo path
      projectName: "Small Box Office",
      projectDesc: "Established a creative digital agency specializing in video production, content creation, and social media management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.smallboxoffice.com/"
        }
      ]
    },
    {
      image: require("./assets/images/pdtLogo.jpeg"), // Replace with actual logo path
      projectName: "Purani Dili Talkies",
      projectDesc: "Directed and produced over 150 films, including documentaries, short films, web series, and corporate films.",
      footerLink: [
        {
          name: "Visit YouTube Channel",
          url: "https://www.youtube.com/c/AnujRamatri"
        }
      ]
    },
    {
      image: require("./assets/images/sboLogo.webp"), // Replace with actual logo path
      projectName: "Packmate",
      projectDesc: "Collaborated with a startup creating eco-friendly products like notebooks from recycled paper.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://www.youtube.com/watch?v=6DLhCP4uU78"
        }
      ]
    },
    {
      image: require("./assets/images/sboLogo.webp"), // Replace with actual logo path
      projectName: "Code Effort",
      projectDesc: "Highlighted the initiative of recycling cigarette butts into useful products through a dedicated film project.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://www.linkedin.com/posts/anujramatri_filmmaking-innovation-inspiration-activity-7213548232243650560-kIKF"
        }
      ]
    }
    // Add more projects as needed
  ],
  display: true // Set false to hide this section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Recognitions 🏆"),
  subtitle: "Notable awards and recognitions I've received for my contributions to sustainability and content creation.",

  achievementsCards: [
    {
      title: "RAD Creators Award - Sustainability Champion",
      subtitle: "Honored as the Sustainability Champion at the inaugural RAD Creators Awards for promoting environmental sustainability through engaging content.",
      image: require("./assets/images/radLogo.webp"), // Replace with actual logo path
      imageAlt: "RAD Creators Award Logo",
      footerLink: [
        {
          name: "Announcement Video",
          url: "https://www.instagram.com/radcreatorawards/reel/DBqgM_CJiJV/"
        },
        {
          name: "My Instagram Post",
          url: "https://www.instagram.com/anujramatri/p/DBWL8EyodLx/"
        }
      ]
    },
    {
      title: "National Creators Award Nominee - Green Champion",
      subtitle: "Nominated in the Green Champions category at the National Creators Award by MyGov India for contributions to environmental awareness.",
      image: require("./assets/images/nationalaward.jpeg"), // Replace with actual logo path
      imageAlt: "National Creators Award Logo",
      footerLink: [
        {
          name: "LinkedIn Announcement",
          url: "https://www.linkedin.com/posts/anujramatri_nationalcreatorsaward-greenchampion-inspiration-activity-7174430043731894273-ZmIE"
        },
        {
          name: "Instagram Post",
          url: "https://www.instagram.com/anujramatri/p/C4TRa6BI6xK/"
        }
      ]
    },
    {
      title: "TEDx Speaker",
      subtitle: "Invited to speak at TEDx to share insights on environmental issues and advocate for sustainable practices.",
      image: require("./assets/images/tedxlogo.jpeg"), // Replace with actual logo path
      imageAlt: "TEDx Logo",
      footerLink: [
        {
          name: "LinkedIn Post",
          url: "https://www.linkedin.com/posts/anujramatri_environment-tedx-activity-7013455942469988352-Ju_z"
        }
      ]
    },
    {
      title: "Forbes India Digital Star",
      subtitle: "Recognized by Forbes India as a Digital Star for advocating sustainable living and founding EcoFreaky, an e-commerce platform for eco-friendly products.",
      image: require("./assets/images/forbesLogo.png"), // Replace with actual logo path
      imageAlt: "Forbes India Logo",
      footerLink: [
        {
          name: "Forbes Profile",
          url: "https://www.forbesindia.com/lists/2024-digital-stars/profile/anuj-ramatri/100"
        }
      ]
    }
    // Add more achievements as needed
  ],
  display: true // Set false to hide this section
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing insights and tips on sustainable living and eco-friendly practices.",
  displayMediumBlogs: false, // Set to false to display hardcoded blogs
  blogs: [
    {
      url: "https://www.ecofreaky.com/blogs/news/how-plastic-usage-decreases-the-average-human-life",
      title: "How Plastic Usage Decreases the Average Human Life",
      description: "Exploring the detrimental impact of plastic on health and the environment, and advocating for reduced usage."
    },
    {
      url: "https://www.ecofreaky.com/blogs/news/eco-friendly-festivities-how-to-celebrate-indian-festivals-sustainably",
      title: "Eco-Friendly Festivities: How to Celebrate Indian Festivals Sustainably",
      description: "Guidelines on adopting eco-conscious practices during Indian festivals to protect our planet."
    },
    {
      url: "https://www.ecofreaky.com/blogs/news/the-hidden-environmental-cost-of-plastic-how-you-can-reduce-it",
      title: "The Hidden Environmental Cost of Plastic & How You Can Reduce It",
      description: "Unveiling the environmental impact of plastic and offering strategies for reduction."
    },
    {
      url: "https://www.ecofreaky.com/blogs/news/how-to-transition-to-a-zero-waste-lifestyle-a-beginners-guide",
      title: "How to Transition to a Zero-Waste Lifestyle: A Beginner's Guide",
      description: "A comprehensive guide for beginners on adopting a zero-waste lifestyle."
    },
    {
      url: "https://www.ecofreaky.com/blogs/news/sustainable-living-made-easy-a-guide-to-ecofreakys-organic-bamboo-products",
      title: "Sustainable Living Made Easy: A Guide to EcoFreaky's Organic Bamboo Products",
      description: "Introducing EcoFreaky's organic bamboo products as a step towards sustainable living."
    }
    // Additional blogs can be added here
  ],
  display: true // Set to false to hide this section
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("I love to share my knowledge and experiences on sustainability and filmmaking."),

  talks: [
    {
      title: "TEDxBHISKanpur Talk on Environmental Awareness",
      subtitle: "Spoke about the importance of environmental conservation and sustainable practices at TEDxBHISKanpur.",
      slides_url: "", // Add if available
      event_url: "https://www.ted.com/tedx/events/52532"
    },
    {
      title: "Young Entrepreneurs' Summit 2024",
      subtitle: "Delivered a session on eco-entrepreneurship and founding EcoFreaky at the Young Entrepreneurs' Summit 2024.",
      slides_url: "", // Add if available
      event_url: "https://www.instagram.com/yefujjain/p/DDJWGAVT5GC/"
    },
    {
      title: "EcoBricks - A Solution To Plastic Pollution",
      subtitle: "Presented a live session on utilizing EcoBricks to combat plastic pollution.",
      slides_url: "", // Add if available
      event_url: "https://m.youtube.com/live/lNgAW4VRcKo?pp=QAFIAQ%3D%3D"
    }
    // Add more talks as needed
  ],
  display: true // Set false to hide this section
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I love discussing sustainability and eco-friendly practices.",

  // Embed links to your podcast appearances
  podcast: [
    "https://www.youtube.com/embed/h1SUgqL73BU", // Carry Poop Bag And Save Mountains | Anuj Ramatri
    "https://www.youtube.com/embed/N1eZQIhqGik", // This Machine Extracts Water From Air | Anuj Ramatri
    "https://www.youtube.com/embed/j_W_Xe4gujA"  // Be Responsible Save Our Soil For A Better Future | Anuj Ramatri
  ],
  display: true // Set false to hide this section
};

// Resume Section
const resumeSection = {
  title: "Portfolio",
  subtitle: "Feel free to download my portfolio",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+91-8595048869", // Replace with your actual phone number
  email_address: "anuj.ramatri@gmail.com" // Replace with your actual email address
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
