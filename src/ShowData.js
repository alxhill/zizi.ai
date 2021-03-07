import React from "react";

let songs = {
  fiveyears: {
    id: "fiveyears",
    name: "Five Years",
    artist: "David Bowie",
    performer: "ruby",
    youtube: {
      id: "IWm03wYBTbM",
      startTime: 0.0,
    },
  },
  iam: {
    id: "iam",
    name: "I Am What I Am",
    artist: "La Cage aux Folles",
    performer: "me",
    youtube: {
      id: "aB5JLA7A7No",
      startTime: 0.0,
    },
  },
  glass: {
    id: "glass",
    name: "Raise Your Glass",
    artist: "P!nk",
    performer: "lilly",
    youtube: {
      id: "XjVNlG5cZyQ",
      startTime: 0.0,
    },
  },
  mylife: {
    id: "mylife",
    name: "This Is My Life",
    artist: "Shirley Bassey",
    performer: "me",
    youtube: {
      id: "9NyxQYPk1RY",
      startTime: 0.0,
    },
  },
  nancy: {
    id: "nancy",
    name: "Nancy Boy",
    artist: "Placebo",
    performer: "ruby",
    youtube: {
      id: "PBxuq_eWW94",
      startTime: 0.0,
    },
  },
  mighty: {
    id: "mighty",
    name: "You Make Me Feel",
    artist: "Sylvester",
    performer: "chiyo",
    youtube: {
      id: "Ifr13Upytb4",
      startTime: 0.0,
    },
  },
  freedom: {
    id: "freedom",
    name: "Freedom! ’90",
    artist: "George Michael",
    performer: "mark",
    youtube: {
      id: "0-zqlgyUkd0",
      startTime: 0.0,
    },
  },
  sweetdreams: {
    id: "sweetdreams",
    name: "Sweet Dreams (Live)",
    artist: "Beyonce",
    performer: "cara",
    youtube: {
      id: "y0xL3RH3JOo",
      startTime: 0.0,
    },
  },
};

let performers = {
  amalgam: {
    id: "amalgam",
    name: "Zizi",
    insta: "zizidrag",
    bio: "The ‘Zizi’ character was created by simultaneously training on images of all of the performers. Not knowing how to differentiate between the bodies, the result is an amalgamation, a ‘queering’ of the data.",
    n: 0
  },
  me: {
    id: "me",
    name: "Me",
    insta: "methedragqueen",
    bio: ["This is Me...Notorious Narcissist. Glamour Clown. Professional Idiot.",<br></br>,"Once known across the world as Meth, 2020 saw the rebirth of this ridiculous drag queen as Me. She’s performed across Europe (Berlin, Helsinki, Reykjavik, Stockholm, Zagreb) and America (New York, San Francisco, Philadelphia, Austin, LA) and calls London her home.",<br></br>,"A master of lip sync with an aesthetic best viewed through a pair of sunglasses, Me is one of the top Drag artists the UK has to offer."],
    n: 9
  },
  cara: {
    id: "cara",
    name: "Cara Melle",
    insta: "tastemycaramelle",
    bio: "Sweet, Salty and Sticky if you’re nasty. Cara Melle is an international drag diva extraordinaire and renowned Beyoncé impersonator.",
    n: 2
  },
  pussi: {
    id: "pussi",
    name: "Oedipussi Rex",
    insta: "Oedipussi.rex",
    bio: "Oedi is a beardy drag barbarian, with acts as wildly inconsistent as the Gods themselves. When not stomping around and yelling incoherently at passing geese, he can usually be found creating mighty bits of facial hair from stuff found in a skip. Oedi also runs Phantasmaglorious- a monthly queer cabaret Gameshow at Matchstick Piehouse (Deptford).",
    n: 10
  },
  chiyo: {
    id: "chiyo",
    name: "CHIYO",
    insta: "PrinxChiyo",
    bio: "The Prinx of Provocation. Sexual Freedom Award's 'PERFORMER OF THE YEAR' and the first Trans finalist for Mr Gay England.",
    n: 3
  },
  tete: {
    id: "tete",
    name: "Tete Bang",
    insta: "tete_bang",
    bio: ["Tete Bang. Star of ", <a target='_blank' rel="noopener noreferrer" href='https://www.channel4.com/programmes/drag-sos'>Drag SOS. </a>," Queer Qween and Ambassador of Love and Equality.  ", <a target='_blank' rel="noopener noreferrer" href='https://www.tetebang.co.uk/'>tetebang.co.uk</a>],
    n: 13
  },
  ruby: {
    id: "ruby",
    name: "Ruby Wednesday",
    insta: "mxrubywednesday",
    bio: "Award-winning international artist, Ruby Wednesday, is currently completing a conceptual album of original music whilst co-directing a brand new cabaret event. They are using Patreon as a platform to create and connect with the community with their music, writing whilst professionally reading Tarot and teaching others the ways of the cards.",
    n: 11
  },
  sister: {
    id: "sister",
    name: "Sister Sister",
    insta: "officialsistersister",
    bio: ["RuPaul's Drag Race UK, Season 2.",<br />, "Sister Sister is a visual spectacle and comedy queen residing in Liverpool, where the river Mersey runs... (because if it walked it would get stuck talking to her)."],
    n: 12
  },
  lilly: {
    id: "lilly",
    name: "Lilly SnatchDragon",
    insta: "lillysnatch",
    bio: ["Lilly SnatchDragon is an international, award - winning drag queen, burlesque artist and compere. Her approach to how the West stereotypes S.E Asian women won her 'Best Newcomer' at the London Cabaret Awards in 2015.  She has been in the Top 15 ‘UK Burlesque Performers’ since 2015, including No. 1 in 2017 and No. 3 in 2018.  Lilly is currently #5 in the world and #5 in the UK for 2019. She is also one of the founders of sell-out show ‘LADS’ and of renowned all-Asian cabaret collective ‘The Bitten Peach’. ",<a className="instagram" target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/bittenpeachuk'>@bittenpeachuk</a>],
    n: 5
  },
  luke: {
    id: "luke",
    name: "Luke Slyka",
    insta: "LukeSlyka",
    bio: "Similar to hitting randomise on a character creation screen is pretty much the aesthetic to my looks. A Clubkid Drag Thing.",
    n: 6
  },
  bolly: {
    id: "bolly",
    name: "Bolly-Illusion ",
    insta: "bolly_illusion",
    bio: "The Glorys Reigning Lipsync 1000 Winner. A performance artist who isn't afraid to embrace their male and female energy and show this through dance.",
    n: 1
  },
  mark: {
    id: "mark",
    name: "Mark Anthony",
    insta: "markanthony.dragking",
    bio: ["Mark has been performing in the UK and internationally for nearly four years and is the current Mr Boylesque UK. A man on a mission to challenge the status quo, he is the first Drag King and trans performer to hold the Mr Boylesque title worldwide and to win renowned Not Another Drag Competition. Known for smooth vocals, comical lip-syncs, sexy strips and occasionally a cello, this king can pull almost anything out of his rhinestoned utility belt. ", <a target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/channel/UCX78ZNHPZg-PbAfjDKZ1mGA?view_as=subscriber'>Youtube</a>],
    n: 8
  },
  dakota: {
    id: "dakota",
    name: "Dakota",
    insta: "dakota.schiffer",
    bio: "The 60s fashion doll herself, Dakota is a transfeminine drag fashion girl stuck in 1967 and loves to sew garments, style hair and perform! (Pronouns she/they)",
    n: 4
  },
  mahatma: {
    id: "mahatma",
    name: "Mahatma Khandi",
    insta: "mahatmakhandi",
    bio: "Mahatma Khandi as sweet and spicy as the curry sauce at McDonalds, Coined by her inner circle of voices in her head as the all knowing auntie that brings the 'good' potato salad to the BBQ, she thinks she’s Haute couture but she’s more like Haute mess. She believes in the power of equality and stupidity, to describe her in three words would be reductive (right madonna) but she’s Fabuslaysian, she’s Fashion, and she’s hella Fanny.",
    n: 7
  },
};

export default {
  songs: songs,
  performers: performers,
};
