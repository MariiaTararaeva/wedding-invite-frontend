// import { useGuestId } from "./hooks/useGuestId";

// const SignupForm = () => {
//   const { guestId, clearGuestId } = useGuestId();

//   const handleSignup = async () => {
//     const res = await fetch("/api/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password, guestId }),
//     });

//     if (res.ok) clearGuestId();
//   };
// };

// const guestId = localStorage.getItem("guestId");

// const signup = async () => {
//   const res = await fetch("/api/auth/signup", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       email: "maria@example.com",
//       password: "mySecret123",
//       guestId,
//     }),
//   });
//   const data = await res.json();

//   // 🎯 Optional cleanup
//   if (res.ok) {
//     localStorage.removeItem("guestId");
//   }
// };

// const login = async () => {
//   const guestId = localStorage.getItem("guestId");

//   const res = await fetch("/api/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       email: "maria@example.com",
//       password: "mySecret123",
//       guestId,
//     }),
//   });
//   const data = await res.json();

//   // 🎯 Optional cleanup
//   if (res.ok) {
//     localStorage.removeItem("guestId");
//   }
// };
