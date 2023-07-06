// import React, { useState, useEffect } from "react";

// function Login() {
//     const [blog, setBlog] = useState([]);
//     useEffect(() => {
//         fetch("http://localhost:9292/registered_members")
//             .then((response) => response.json())
//             .then((data) => {
//                 setBlog(data.blog);
//             });
//     }, []);
//     return (
//         <div>{blog?.map((user) => user.name)}</div>
//     )
// }

// export default Login