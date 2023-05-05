import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Sign } from "crypto";

const Signup = () => {
    
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

    initializeApp(firebaseConfig);

    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const userInfo = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log("User registered successfully:", userInfo.user);
        } catch (error) {
          console.error("Error registering user:", error);
        }
      };
    
  

    return(
        <div>
            <h1>Sign up </h1>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="email">Email</label>
                <input 
                id="email"
                type="email"
                onChange={(e) = > setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input 
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
        
    )
}

export default Signup