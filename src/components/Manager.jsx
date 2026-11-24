import { useState } from 'react'
import { useEffect } from 'react'
import PasswordForm from './PasswordForm'
import PasswordCard from './PasswordCard'
import apiRequest from '../api'

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [website, setWebsite] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [editId, setEditId] = useState(null) //null means we are adding a new password
    const [searchTerm, setSearchTerm] = useState("");

    const [passwords, setPasswords] = useState([]); //passwords starts empty coz we havent fetched anything yet
    const [loading, setLoading] = useState(true); // loading tells us whether the backend req is still in progress
    const [fetchError, setFetchError] = useState(""); 
    const [saving, setSaving] = useState(false);
    const [deletingId, setDeletingId] = useState(null); 
    const [feedback, setFeedback] = useState({
        message: "", // text to display
        type: "" //to distinguish success from error and style the msg accordingly
    });

    // useEffect runs when the Manager mounts
    useEffect(() => {
        const fetchPasswords = async () => {
            try{
                const data = await apiRequest('/passwords'); // sends a GET req to the backend

                const formattedPasswords = data.passwords.map(item => ({ //data.passwords contains the returned array
                    ...item,
                    id: item._id // we map our mongoDB's _id to our frontend's id
                }));

                setPasswords(formattedPasswords); // updates React state triggering a re-render
            } catch (error) {
                console.error('Failed to fetch passwords:', error.message);

                setFetchError(error.message || 'Failed to load passwords. Please try again.'); 
            } finally {
                setLoading(false);
            }
        };

        fetchPasswords();
    }, [])

    useEffect(() => {
        if (!feedback.message) return;

        const timer = setTimeout(() => {
            setFeedback({ message: "", type: "" });
        }, 3000);

        return () => clearTimeout(timer);
    }, [feedback]);

    const savePassword = async () => {
        setFeedback({message: "", type: ""});
        
        if (saving) return; // prevents repeated submissions

        if(website.trim() === "" || username.trim() === "" || password.trim() === ""){
            setFeedback({
                message: "Please fill in all fields!",
                type: "error"
            });
            return;
        }

        setSaving(true); // runs only after validation POST or PUT is in progress

        try {
            if(editId === null){
                // Add a new password 
                const data = await apiRequest('/passwords', {
                method: 'POST',
                body: JSON.stringify({
                    website,
                    username,
                    password
                })
                });

                const newPassword = {
                    id: data.passwordId,
                    website,
                    username,
                    password
                }
                setPasswords(prev => [...prev, newPassword]);

            }else{
                // Update an existing password
                await apiRequest(`/passwords/${editId}`,{
                    method: 'PUT',
                    body: JSON.stringify({
                        website,
                        username,
                        password
                    })
                });

                setPasswords(prev =>
                    prev.map(item => 
                        item.id === editId ? {...item, website, username, password}:item
                    )
                );
            }

            setFeedback({
                message: editId===null? "Password saved successfully!" : "Password updated successfully!",
                type: "success"
            });

            setEditId(null);
            setWebsite("");
            setUsername("");
            setPassword("");
        } catch (error) {
            setFeedback({
                message: error.message,
                type: "error"
            });
        } finally {
            setSaving(false); // after the password is finally saved we toggle the saving to false
        }
    };

    const handleDelete = async (id) =>{
        if(deletingId === id) return; // the delete button of that particular card gets disabled when the delete function is ongoing
        setFeedback({message: "", type: ""});
        setDeletingId(id); // update the deletingId to the id of the card we wanna delete

        try {
            await apiRequest(`/passwords/${id}`, {
                method: 'DELETE'
            });

            setPasswords(prev => prev.filter (item => item.id !== id));

            setFeedback({
                message: "Password deleted successfully!",
                type: "success"
            });

            if(editId === id){
                setEditId(null);
                setWebsite("");
                setUsername("");
                setPassword("");
            }
        } catch (error) {
            setFeedback({
                message: error.message,
                type: "error"
            });
        } finally {
            setDeletingId(null); 
        }
    };

    const handleEdit = (id) => {
        const item = passwords.find(item => item.id === id); //searches for the entry using unique ID

        if(!item) return;

        setWebsite(item.website);
        setUsername(item.username);
        setPassword(item.password);
        setEditId(id);
    };

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
                editId={editId}
                savePassword={savePassword}
                setEditId={setEditId}
                saving={saving}
            />

            {/* feedback message display */}
            {feedback.message && (
                <div
                    role="status"
                    className={`mx-auto mt-4 max-w-2xl rounded-lg border px-4 py-3 text-sm ${
                        feedback.type === "success"
                            ? "border-green-500/30 bg-green-500/10 text-green-400"
                            : "border-red-500/30 bg-red-500/10 text-red-400"
                    }`}
                >
                    {feedback.message}
                </div>
            )}

            <section className="mt-10 mx-auto max-w-2xl">
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4'>
                <h2 className="text-xl font-semibold text-white mb-4">
                    Your Saved Passwords
                </h2>

                <input type="text" placeholder="Search websites..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className="w-full sm:w-64 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none focus:border-purple-500 placeholder:text-gray-500"/>
            </div>

            <div className='flex flex-col gap-4'>
                {loading ? (
                    //GET req in progress
                    <p className="text-center text-gray-400 py-6"> 
                        Loading passwords... 
                    </p>
                ) : fetchError? (
                    //GET req fails
                    <p className='text-center text-red-400 py-6'>
                        {fetchError}
                    </p>
                ) : passwords.length === 0 ? (
                    //No saved passwords 
                    <p className='text-center text-gray-400 py-6'>
                        Your vault is empty. Add your first password!
                    </p>
                ) : filteredPasswords.length === 0 ? (
                    //Search has no matches
                    <p className='text-center text-gray-400 py-6'>
                        No matching passwords found.
                    </p>
                ) : (
                    filteredPasswords.map((item) => (
                        <PasswordCard
                            key={item.id}
                            item={item}
                            id={item.id}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                            deletingId={deletingId}
                        />
                    ))
                )}
            </div>
        </section>
        </main>
        
    </>
  )
}

export default Manager
