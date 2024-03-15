// import React, { useState, useEffect } from "react";
// import LoadingSpinner from "../LoaderSpinner";
// import "./LandingPage.css";
// import Animation from "./Animation";
// import { cities } from "../../data";
// import { useNavigate } from "react-router-dom";
// let id;


// export function LandingPage() {
//   const [isDraweropen, setisDraweropen] = useState(false);
//   const [isLoading, setisLoading] = useState(false);
//   const [query, setQuery] = useState("");
//   const [res, setRes] = useState([]);
//   const [login, setLogin] = useState(true);
//   const [number, setNumber] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState(false);
//   const [verificationId, setVerificationId] = useState("");
//   const [otp_valid, setOtp_valid] = useState("");
//   let navigate = useNavigate();
//   let API_KEY = "5bdc9bb5e105da7714d3b4fda20a88c6";

//   function check() {
//     let user = JSON.parse(localStorage.getItem("user_details"));
//     if (!query) {
//       document.querySelector(".trip1").style.display = "block";
//     } else if (user.name == "" || user.email == "" || user.number == "") {
//       alert(
//         "You can visit the restaurants page\nYou have to login to place orders"
//       );
//       navigate("/restaurants");
//     } else {
//       alert("Welcome to restaurant page");
//       navigate("/restaurants");
//     }
//   }

//   useEffect(() => {
//     if (!query) return;

//     let temp = document.querySelector(".trip1");
//     if (temp) temp.style.display = "none";
//     id = setTimeout(() => {
//       let temp = [];
//       let c = 0;
//       for (let i = 0; i < cities.length; i++) {
//         if (c === 5) break;
//         if (cities[i].toLowerCase().includes(query.toLowerCase())) {
//           temp.push(cities[i]);
//           c++;
//         }
//       }
//       setRes(temp);
//     }, 300);
//     return () => clearTimeout(id);
//   }, [query]);

//   function geoLocation() {
//     setisLoading(true);
//     navigator.geolocation.getCurrentPosition((success) => {
//       let { latitude, longitude } = success.coords;
//       fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${"5bdc9bb5e105da7714d3b4fda20a88c6"}&units=metric&lang=en`
//       )
//         .then((response) => response.json())
//         .then((name) => {
//           setTimeout(() => {
//             let fetch = `${name.city.name}, ${name.city.country}`;
//             setQuery(fetch);
//             setisLoading(false);
//           }, 1000);
//         })
//         .catch(() => {
//           setisLoading(false);
//           setQuery("");
//         });
//     });
//   }

//   let text = [
//     "Game night?",
//     "Cooking Gone Wrong?",
//     "Late night at office?",
//     "Movie marathon?",
//     "Unexpected guests?",
//     "Hungry?",
//   ];
//   const [change, setChange] = useState(text[0]);
//   useEffect(() => {
//     help();
//   }, [change]);
//   function help() {
//     var i = 0;
//     setInterval(() => {
//       if (i === 6) {
//         i = 0;
//       }
//       if (i < 6) {
//         setChange(text[i]);
//         i++;
//       }
//     }, 2000);
//   }

//   localStorage.setItem("Location", JSON.stringify(query));

//   useEffect(() => {
//     let id = JSON.parse(localStorage.getItem("verificationId"));
//     let user = JSON.parse(localStorage.getItem("user_details"));
//     if (
//       user.name == "" ||
//       user.email == "" ||
//       user.number == "" ||
//       id.verificationId == ""
//     ) {
//       let temp = {
//         name: name,
//         email: email,
//         number: number,
//       };
//       localStorage.setItem("user_details", JSON.stringify(temp));
//     }
//   }, [name, email, number]);



//   return (
    
     

//       <div
//         className="split"
//         onClick={() => {
//           document.querySelector(".suggestion").style.display = "none";
//         }}
//       >
//         <div className="left">
//           <div className="check0">
//             <div>
//               <img src="https://d1ye2ocuext585.cloudfront.net/images/s/Swiggy_Logo_9.png" />
//             </div>
//           </div>
//           <Animation />
//           <div className="trip" id="appending">
//             <div className="check">
//               <input
//                 className="rohit"
//                 id="inputt"
//                 type="text"
//                 placeholder="Enter your delivery location"
//                 autoFocus={true}
//                 spellCheck={false}
//                 onChange={(e) => setQuery(e.target.value)}
//                 value={isLoading ? "Fetching your current location..." : query}
//               />

//               <button className="posey" onClick={geoLocation}>
//                 <i className="far fa-location" /> Locate Me
//               </button>

//               <button onClick={check} id="changing" value="toogle_food">
//                 {isLoading ? <LoadingSpinner /> : "Find Food"}
//               </button>
//             </div>
//           </div>
//           <div className="trip1" style={{ display: query ? "" : "none" }}>
//             Please add your delivery location
//           </div>
//           <article
//             className="suggestion"
//             style={{
//               display: query ? "" : "none",
//             }}
//           >
//             {res.map((i, index) => (
//               <div
//                 key={index}
//                 style={{
//                   borderBottom:
//                     index === res.length - 1
                      // ? "0px"
//                       : "1px solid rgb(229, 229, 229)",
//                 }}
//                 className="show"
//               >
//                 <p
//                   className="city-name show city"
//                   onClick={() => {
//                     setQuery(i);
//                   }}
//                 >
//                   <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;{" "}
//                   {i}
//                 </p>
//               </div>
//             ))}
//           </article>
          
//         </div>

        
//       </div>

    
//   );
// }


import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import Animation from "./Animation";
import { cities } from "../../../data";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../LoaderSpinner";

export function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [res, setRes] = useState([]);
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const API_KEY = "5bdc9bb5e105da7714d3b4fda20a88c6";

  useEffect(() => {
    localStorage.setItem("Location", JSON.stringify(query));
  }, [query]);

  function check() {
    const user = JSON.parse(localStorage.getItem("user_details"));
    if (!query) {
      alert("Please add your delivery location");
    } else if (!user || !user.name || !user.email || !user.number) {
      alert(
        "You can visit the Medical-Store page"
        // \nYou have to login to place orders"
      );
      navigate("/restaurants");
    } else {
      alert("Welcome to the Medical-Store page");
      navigate("/restaurants");
    }
  }

  useEffect(() => {
    if (!query) return;

    const id = setTimeout(() => {
      let temp = [];
      let c = 0;
      for (let i = 0; i < cities.length; i++) {
        if (c === 5) break;
        if (cities[i].toLowerCase().includes(query.toLowerCase())) {
          temp.push(cities[i]);
          c++;
        }
      }
      setRes(temp);
    }, 300);
    return () => clearTimeout(id);
  }, [query]);

  function geoLocation() {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((success) => {
      const { latitude, longitude } = success.coords;
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${"5bdc9bb5e105da7714d3b4fda20a88c6"}&units=metric&lang=en`
      )
        .then((response) => response.json())
        .then((name) => {
          setTimeout(() => {
            const fetchedLocation = `${name.city.name}, ${name.city.country}`;
            setQuery(fetchedLocation);
            setIsLoading(false);
          }, 1000);
        })
        .catch(() => {
          setIsLoading(false);
          setQuery("");
        });
    });
  }


  let text = [
    "needy night?",
    "Speedy?",
    "Late night at office?",
    "Emergency",
    "Unexpected Thinking?",
    "Needy?",
  ];
  const [change, setChange] = useState(text[0]);
  useEffect(() => {
    help();
  }, [change]);
  function help() {
    var i = 0;
    setInterval(() => {
      if (i === 6) {
        i = 0;
      }
      if (i < 6) {
        setChange(text[i]);
        i++;
      }
    }, 2000);
  }

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("verificationId"));
    let user = JSON.parse(localStorage.getItem("user_details"));
    if (
      user &&
      (user.name === "" ||
        user.email === "" ||
        user.number === "" ||
        (id && id.verificationId === "")
      )
    ) {
      let temp = {
        name: name,
        email: email,
        number: number,
      };
      localStorage.setItem("user_details", JSON.stringify(temp));
    }
  }, [name, email, number]);
  

  return (
    <div className="split">
      <div className="left">
        <div className="check0">
          <div>
            <img src="https://logos-download.com/wp-content/uploads/2022/01/Zippy_Logo-1536x472.png" alt="Zippy Logo" />
          </div>
        </div>
        <Animation />
        <div className="trip" id="appending">
          <div className="check">
            <input
              className="rohit"
              id="inputt"
              type="text"
              placeholder="Enter your delivery location"
              autoFocus={true}
              spellCheck={false}
              onChange={(e) => setQuery(e.target.value)}
              value={isLoading ? "Fetching your current location..." : query}
            />
            <button className="posey" onClick={geoLocation}>
              <i className="far fa-location" /> Locate Me
            </button>
            <button onClick={check} id="changing" value="toogle_food">
              {isLoading ? <LoadingSpinner /> : "Find Med"}
            </button>
          </div>
        </div>
        <div className="trip1" style={{ display: query ? "" : "none" }}>
          Please add your delivery location
        </div>
        <article
          className="suggestion"
          style={{
            display: query ? "" : "none",
          }}
        >
          {res.map((i, index) => (
            <div
              key={index}
              style={{
                borderBottom:
                  index === res.length - 1
                    ? "0px"
                    : "1px solid rgb(229, 229, 229)",
              }}
              className="show"
            >
              <p
                className="city-name show city"
                onClick={() => {
                  setQuery(i);
                }}
              >
                <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;{" "}
                {i}
              </p>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}
