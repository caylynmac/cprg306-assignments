"use client";

import { useState } from "react";
import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page(){

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
	async function handleSignIn(){
		try {
			await gitHubSignIn();
		} catch (error) {
			console.log(error);
		}
	}

	async function handleSignOut(){
		try {
			await firebaseSignOut();
		} catch (error) {
			console.log(error);
		}
    }
    const buttonStyle = "text-lg m-4 bg-green-100 text-green-300 p-3 rounded-lg";


return (
    <main className = "bg-green-300 h-screen px-4">
      <header>
        <h1 className="text-3xl">Home</h1>
      </header>
      {user ? (
        // user logged in
        <div>
          <p>Welcome {user.displayName}</p>
          <Link className= {buttonStyle} href="/week-8/shopping-list">View your shopping list</Link>
		  <button onClick={handleSignOut} className={buttonStyle}>Sign Out</button>
        </div>
      ) : (
        // user not logged in
        <div>
          <button onClick={handleSignIn} className={buttonStyle}>Log in</button>
        </div>
      )}
    </main>
  );

    
}