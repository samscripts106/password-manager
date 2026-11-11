import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import PasswordForm from './PasswordForm'
import PasswordCard from './PasswordCard'

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [website, setWebsite] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [editIndex, setEditIndex] = useState(null) //null means we are adding a new password
    const [searchTerm, setSearchTerm] = useState("");

    //The function passed to useState runs only during the initial state setup, not on every render (Lazy initialisation)
    const [passwords, setPasswords] = useState(()=>{
        const savedPasswords = localStorage.getItem("passwords"); //retreives the saved string
        return savedPasswords? JSON.parse(savedPasswords):[]; //JSON.parse() converts that string back into a JS array
    }); //saved credentials
    
    useEffect(()=>{
        localStorage.setItem("passwords", JSON.stringify(passwords)); //"passwords" is a new key we're creating in LocalStrorage (Like a label on the storage box)
        //passwords is the actual data put into the box
    }, [passwords]);


    const savePassword = () => {
        if(website.trim() === "" || username.trim() === "" || password.trim() === ""){
            alert("Please fill in all fields!");
            return;
        }

        const newPassword = {
            website: website,
            username: username,
            password: password
        }

        if(editIndex === null){
            //Adding a new password
            setPasswords([...passwords, newPassword]); //append the newPassword in the passowrds array 
            //... spread operator copies existing elements into the new array
        }else{
            //Update an existing password
            const updatedPasswords = [...passwords];

            updatedPasswords[editIndex] = newPassword;

            setPasswords(updatedPasswords);
            setEditIndex(null);
        } 
        
        //Clear the input fields 
        setWebsite("")
        setUsername("")
        setPassword("")
    };

    const handleDelete = (index) =>{
        const updatedPasswords = passwords.filter((item,i)=> i!==index); //.filter() creates a new array 
        setPasswords(updatedPasswords); //we set our password array to the new array 

        if(editIndex == index){ //Deleting the password you're currently editing: Cancel editing and clear the fomr
            setEditIndex(null);
            setWebsite("");
            setUsername("");
            setPassword("");
        }else if (editIndex != null && editIndex>index){ //Deleting an entry before the one you're editing: Decrease editIndex by 1 because the indexes shifted 
            setEditIndex(editIndex-1);
        }
    };

    const handleEdit = (index) => {
        setWebsite(passwords[index].website);
        setUsername(passwords[index].username);
        setPassword(passwords[index].password);

        setEditIndex(index);
    }

    const filteredPasswords = passwords.filter((item)=>
        item.website.toLowerCase().includes(searchTerm.toLowerCase())
        //.filter() checks every PW obj 
        //toLowerCase() makes the search case insensitive 
        //.includes() checks whether the website contains the search text 
    );

  return (
    <>
        <div className="fixed inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

        <main className='px-2 py-4 mt-8'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-gray-200 text-3xl font-bold'>Welcome to PassVault</h1>
                <h3 className='text-lg text-gray-400 mt-3'>Your passwords, securedly stored at one place</h3>
            </div>

            <PasswordForm
                website={website}
                setWebsite={setWebsite}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                editIndex={editIndex}
                savePassword={savePassword}
                setEditIndex={setEditIndex}
            />

            <section className="mt-10 mx-auto max-w-2xl">
            <div className='flex items-center justify-between mb-4'>
                <h2 className="text-xl font-semibold text-white mb-4">
                    Your Saved Passwords
                </h2>

                <input type="text" placeholder="Search websites..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className="w-64 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none focus:border-purple-500 placeholder:text-gray-500"/>
            </div>

            <div className='flex flex-col gap-4'>
                {filteredPasswords.length > 0 ? (
                    filteredPasswords.map((item, index) => (
                        <PasswordCard
                            key={index}
                            item={item}
                            index={passwords.indexOf(item)}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-400 py-6">
                        No passwords found.
                    </p>
                )}
            </div>
        </section>
        </main>
        
    </>
  )
}

export default Manager
