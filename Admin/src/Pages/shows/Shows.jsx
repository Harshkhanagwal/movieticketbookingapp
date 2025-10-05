import React, { useState } from 'react'

//icons
import { MdDescription, MdOutlineAddToQueue } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import MovieList from '../../components/showList/showList';

const Shows = () => {
  const [popup, setPopup] = useState(false)
  const [data, setData] = useState([
    {
      title: "Play Dirty",
      overview: "Expert thief Parker gets a shot at a major heist, but to pull it off he and his team must outsmart a South American dictator, the New York mob, and the world's richest man.",
      poster_path: "/ovZ0zq0NwRghtWI1oLaM0lWuoEw.jpg",
      cinima: "INOX, Mumbai",
      cinima_locaton: "Mumbai",
      show_date: "29 october 2026",
      show_time: "Morning Show",
      show_screen: "Screen 2"
    },
    {
      title: "The Fantastic 4: First Steps",
      overview: "Against the vibrant backdrop of a 1960s-inspired, retro-futuristic world, Marvel's First Family is forced to balance their roles as heroes with the strength of their family bond, while defending Earth from a ravenous space god called Galactus and his enigmatic Herald, Silver Surfer.",
      poster_path: "/cm8TNGBGG0aBfWj0LgrESHv8tir.jpg",
      cinima: "PVR Icon, Mumbai",
      cinima_locaton: "Mumbai",
      show_date: "25 October 2025",
      show_time: "Evening Show",
      show_screen: "Screen 4"
    },
    {
      title: "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
      overview: "The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro, Nezuko, and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins.",
      poster_path: "/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
      cinima: "INOX Megaplex, Bengaluru",
      cinima_locaton: "Bengaluru",
      show_date: "26 October 2025",
      show_time: "Night Show",
      show_screen: "Screen 2"
    },
    {
      title: "Primitive War",
      overview: "During the Vietnam War, a recon unit ventures to an isolated jungle valley to uncover the fate of a missing platoon. They soon find themselves in a fight for their lives against an unexpected enemy — prehistoric dinosaurs.",
      poster_path: "/nWBqU5YXmDVJWWEDJ4u3ZSseNVL.jpg",
      cinima: "Cinepolis Grand, Noida",
      cinima_locaton: "Noida",
      show_date: "27 October 2025",
      show_time: "Afternoon Show",
      show_screen: "Screen 5"
    },
    {
      title: "Mantis",
      overview: "Mantis, an ace assassin, returns to the contract killer industry after a hiatus, encountering his trainee friend Jae-yi and a retired legendary killer Dok-go, who now runs the organization.",
      poster_path: "/xS9bbciDC5lHPgl79SrPyzxKAXL.jpg",
      cinima: "Carnival Silver City, Pune",
      cinima_locaton: "Pune",
      show_date: "28 October 2025",
      show_time: "Evening Show",
      show_screen: "Screen 1"
    },
    {
      title: "Marco",
      overview: "The adoptive son of the Adattu family, Marco, sets off on a ruthless quest for vengeance after his brother is brutally murdered, finding only betrayal, loss and unimaginable brutality at every step.",
      poster_path: "/2bBopOIy9Rgl4Nd8MX7iSCCmpDp.jpg",
      cinima: "Miraj Gold, Hyderabad",
      cinima_locaton: "Hyderabad",
      show_date: "29 October 2025",
      show_time: "Morning Show",
      show_screen: "Screen 3"
    },
    {
      title: "War of the Worlds",
      overview: "Will Radford is a top analyst for Homeland Security who tracks potential threats through a mass surveillance program, until one day an attack by an unknown entity leads him to question whether the government is hiding something from him... and from the rest of the world.",
      poster_path: "/yvirUYrva23IudARHn3mMGVxWqM.jpg",
      cinima: "Wave CineHub, Delhi",
      cinima_locaton: "Delhi",
      show_date: "30 October 2025",
      show_time: "Night Show",
      show_screen: "Screen 5"
    },
    {
      title: "Prisoner of War",
      overview: "British RAF Wing Commander James Wright is captured by the Japanese during WWII and forced to fight in brutal hand-to-hand combat. The Japanese soldiers get more than they bargained for when Wright’s years of martial arts training in Hong Kong prove him to be a formidable opponent.",
      poster_path: "/1XET89sjRm9mUuHXhGIlKTNd5uD.jpg",
      cinima: "DT Starplex, Gurugram",
      cinima_locaton: "Gurugram",
      show_date: "31 October 2025",
      show_time: "Evening Show",
      show_screen: "Screen 2"
    },
    {
      title: "Django Undisputed",
      overview: "Determined to exact his justice, Django faces dangerous challenges and bloody clashes to restore order in a territory dominated by lawlessness and injustice.",
      poster_path: "/porcUhC4jqFt72TaxbjOQo2lTzL.jpg",
      cinima: "SPI Luxe Theatre, Chennai",
      cinima_locaton: "Chennai",
      show_date: "1 November 2025",
      show_time: "Afternoon Show",
      show_screen: "Screen 4"
    },
    {
      title: "The Conjuring: Last Rites",
      overview: "Paranormal investigators Ed and Lorraine Warren take on one last terrifying case involving mysterious entities they must confront.",
      poster_path: "/umvkcIb0XAk486TEmx1V5aVzhbm.jpg",
      cinima: "Mukta A2 Vision, Jaipur",
      cinima_locaton: "Jaipur",
      show_date: "2 November 2025",
      show_time: "Night Show",
      show_screen: "Screen 1"
    },
    {
      title: "Assassin",
      overview: "",
      poster_path: "/fLRCNUz3MsnC0MdhaWpw3hp4Eye.jpg",
      cinima: "SRS CineWorld, Lucknow",
      cinima_locaton: "Lucknow",
      show_date: "3 November 2025",
      show_time: "Evening Show",
      show_screen: "Screen 3"
    },
    {
      title: "One Battle After Another",
      overview: "Washed-up revolutionary Bob exists in a state of stoned paranoia, surviving off-grid with his spirited, self-reliant daughter, Willa. When his evil nemesis resurfaces after 16 years and she goes missing, the former radical scrambles to find her, father and daughter both battling the consequences of his past.",
      poster_path: "/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg",
      cinima: "INOX Galaxy, Chandigarh",
      cinima_locaton: "Chandigarh",
      show_date: "5 November 2025",
      show_time: "Matinee",
      show_screen: "Screen 2"
    },
    {
      title: "Valiant One",
      overview: "With tensions between North and South Korea, a US helicopter crashes on the North side. The survivors must work together to protect a civilian tech specialist and find their way out without the help of US military support.",
      poster_path: "/sT8Z14RDCAd6szzxzWFAU4xcMwg.jpg",
      cinima: "Carnival Vision, Surat",
      cinima_locaton: "Surat",
      show_date: "6 November 2025",
      show_time: "Morning Show",
      show_screen: "Screen 5"
    },
    {
      title: "The Man in My Basement",
      overview: "Down on his luck, Charles Blakey agrees to rent his basement to a mysterious stranger, unaware he may be letting in a force much darker than he imagined.",
      poster_path: "/1zpeH8wOrM8p2TTAmBetwhe2BIx.jpg",
      cinima: "PVR Superplex, Kolkata",
      cinima_locaton: "Kolkata",
      show_date: "7 November 2025",
      show_time: "Afternoon Show",
      show_screen: "Screen 1"
    },
    {
      title: "Superman",
      overview: "Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.",
      poster_path: "/wPLysNDLffQLOVebZQCbXJEv6E6.jpg",
      cinima: "INOX Crystal, Indore",
      cinima_locaton: "Indore",
      show_date: "8 November 2025",
      show_time: "Evening Show",
      show_screen: "Screen 4"
    },
    {
      title: "KPop Demon Hunters",
      overview: "When K-pop superstars Rumi, Mira and Zoey aren't selling out stadiums, they're using their secret powers to protect their fans from supernatural threats.",
      poster_path: "/22AouvwlhlXbe3nrFcjzL24bvWH.jpg",
      cinima: "Cinepolis Infinity, Kochi",
      cinima_locaton: "Kochi",
      show_date: "9 November 2025",
      show_time: "Matinee",
      show_screen: "Screen 3"
    },
    {
      title: "Holy Night: Demon Hunters",
      overview: "When a devil-worshipping criminal network plunges Seoul into chaos, the police turn to Holy Night—a trio of supernatural demon hunters—to restore order and defeat the rising evil.",
      poster_path: "/v3Mo77Qjp6pctpD4eJaNT6kFRSB.jpg",
      cinima: "Miraj Elite, Bhopal",
      cinima_locaton: "Bhopal",
      show_date: "10 November 2025",
      show_time: "Night Show",
      show_screen: "Screen 2"
    },
    {
      title: "Weapons",
      overview: "When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance.",
      poster_path: "/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg",
      cinima: "Wave Platinum, Ahmedabad",
      cinima_locaton: "Ahmedabad",
      show_date: "11 November 2025",
      show_time: "Evening Show",
      show_screen: "Screen 5"
    },
    {
      title: "Nobody 2",
      overview: "Former assassin Hutch Mansell takes his family on a nostalgic vacation to a small-town theme park, only to be pulled back into violence when they clash with a corrupt operator, a crooked sheriff, and a ruthless crime boss.",
      poster_path: "/xGLoqM9peusKQeuwlSw2Qlhx740.jpg",
      cinima: "PVR Luxe, Nagpur",
      cinima_locaton: "Nagpur",
      show_date: "12 November 2025",
      show_time: "Afternoon Show",
      show_screen: "Screen 1"
    },
    {
      title: "The Lost Bus",
      overview: "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
      poster_path: "/zpygCOYY1DPBkeUsrrznLRN5js5.jpg",
      cinima: "INOX City Square, Patna",
      cinima_locaton: "Patna",
      show_date: "13 November 2025",
      show_time: "Evening Show",
      show_screen: "Screen 4"
    }
  ])

  return (
    <>
      <div className="page-header">
        <h1>Manage Shows</h1>
        <button onClick={() => setPopup(!popup)}>
          <MdOutlineAddToQueue className='app-icon' /> Add New Show
        </button>

        {
          popup && (
            <div className="popuparea">
              <div className="popupbox">
                <div className="popupheader">
                  <h3>Add New Show</h3>
                  <IoClose onClick={() => setPopup(!popup)} className='app-icon popup-close-btn' />
                </div>

                <form className='add-show-form'>
                  <select name="movies" >
                    <option value="" disabled selected> Select movie </option>
                    <option value="Movie 1">Movie 1</option>
                    <option value="Movie 2">Movie 2</option>
                    <option value="Movie 3">Movie 3</option>
                    <option value="Movie 4">Movie 4</option>
                    <option value="Movie 5">Movie 5</option>
                  </select>

                  <select name="theater" >
                    <option value="" disabled selected> Select theater </option>
                    <option value="Theater 1">Theater 1</option>
                    <option value="Theater 2">Theater 2</option>
                    <option value="Theater 3">Theater 3</option>
                    <option value="Theater 4">Theater 4</option>
                    <option value="Theater 5">Theater 5</option>
                  </select>
                  <select name="screen" >
                    <option value="" disabled selected>Select Screen</option>
                    <option value="Screen 1">Screen 1</option>
                    <option value="Screen 2">Screen 2</option>
                    <option value="Screen 3">Screen 3</option>
                  </select>

                  <div className="show-timings">
                    <label>
                      <input type="radio" name="showtime" value="morning" /> Morning Show
                    </label>
                    <label>
                      <input type="radio" name="showtime" value="afternoon" /> Afternoon Show
                    </label>
                    <label>
                      <input type="radio" name="showtime" value="night" /> Night Show
                    </label>
                  </div>

                  <button type="submit"> Submit </button>
                </form>
              </div>
            </div>
          )

        }
      </div>

      <MovieList data={data} />
    </>

  )
}

export default Shows
