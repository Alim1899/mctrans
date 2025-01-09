import "./App.css";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;

//||||||||||||||       SAVE FILE ||||||||||
// function saveToFile(data) {
//   const blob = new Blob([data], { type: "text/plain" }); // Adjust MIME type if needed
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = "mctrans.txt"; // File name for download
//   link.click();
//   URL.revokeObjectURL(link.href); // Clean up URL object
// }

//||||||||||||||       PRICES    ||||||||||||||||||\
// async function getPrice(endpoint, data) {
//   const response = await fetch(`${BASE_URL}/${endpoint}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded", // Adjust if a different content type is used
//     },
//     body: new URLSearchParams(data), // Pass the data dynamically
//   });
//   const res = await response.text(); // Return the response text for further processing
//   return res;
// }

// useEffect(() => {
//   getPrice("data2.php", {
//     auc_id: 1,
//     city_id: 7,
//   }).then((res) => console.log(res));
// }, []);

// copart.forEach((el) => {
//   el.cities.forEach(async (city) => {
//     if (city.value)
//       await getPrice("data2.php", {
//         auc_id: 1,
//         city_id: city.value,
//       }).then((result) =>
//         console.log(
//           (city.price = result.replace(/<\/?ul>|<\/?li>|<\/?p>/g, "").trim())
//         )
//       );
//   });
// });
// setTimeout(() => {
//   saveToFile(JSON.stringify(copart));
// }, 5000);

// ||||||||||||||     STATES ||||||||||
// useEffect(() => {
//   async function postData(endpoint, data) {
//     const response = await fetch(`${BASE_URL}/${endpoint}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams(data),
//     })
//     return response.text();
//   }

//   async function fetchStatesAndCities() {
//     try {
//       // Step 1: Fetch states
//       const stateResponse = await postData("getState.php", { auc_id: 31 });
//       const states = Array.from(
//         stateResponse.matchAll(/<option value="([^"]*)">([^<]*)<\/option>/g)
//       )
//         .map((match) => ({
//           value: match[1],
//           text: match[2],
//         }))
//         .sort((a, b) => {
//           if (a.value === "") return -1;
//           if (b.value === "") return 1;
//           return a - b;
//         });

//       setRetrievedStates(states);
//       //  saveToFile(JSON.stringify(states, null, 2));
//     } catch (error) {
//       console.error("Error fetching states or cities:", error);
//     }
//   }

//   fetchStatesAndCities();
// }, []);

// ||||||||||||||     Cities      ||||||||||

// useEffect(() => {
//   async function getCity(endpoint, data) {
//     const response = await fetch(`${BASE_URL}/${endpoint}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded", // Adjust if a different content type is used
//       },
//       body: new URLSearchParams(data), // Pass the data dynamically
//     });
//     const res = await response.text(); // Return the response text for further processing
//     return res;
//   }

//   if (retrievedStates.length) {
//     retrievedStates.forEach(async (state, i = 0) => {
//       if (state.value) {
//         const result = await getCity("city.php", {
//           auc_id: 1,
//           state_id: Number(state.value),
//         });
//         const cities = Array.from(
//           result.matchAll(/<option value="([^"]*)">([^<]*)<\/option>/g)
//         )
//           .map((match) => ({
//             value: match[1],
//             text: match[2],
//           }))
//           .sort((a, b) => {
//             if (a.value === "") return -1;
//             if (b.value === "") return 1;
//             return a - b;
//           });

//         state.cities = cities;
//       } else state.cities = [];
//       i++;
//       if (i === 50) setCityLoaded(true);

//     });
//   }
// }, [retrievedStates]);
