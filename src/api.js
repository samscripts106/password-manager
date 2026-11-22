const API = 'http://localhost:5001/api' //API is the base URL of our express backend

//apiRequest utility builds the URL, attaches cookies and configures headers and then parses the response and checks HTTP status 

const apiRequest = async (endpoint, options = {}) => {
    //Making the HTTP req
    //If API is http://localhost:5001/api and endpoint is /auth/login, the final URL becomes http://localhost:5001/api/auth/login
    const response =  await fetch (`${API}${endpoint}`,{
        ...options, // This copies the properties of the options object into the fetch configuration
        credentials: 'include', //sends session cookies
        headers: {
            ...(options.body ? 
                { 'Content-Type': 'application/json' }:{} //identifies JSON req bodies
            ),
            ...options.headers
        }
    })

    const text = await response.text() //reads the server response

    //Parsing the response
    let data

    try{
        data = text? JSON.parse(text) : null // converts JSON into JS data 
    } catch {
        data = text
    }

    if(!response.ok){ // detects HTTP errors 
        throw new Error(data?.message || `Request failed: ${response.status}`)
    }

    return data // gives the response back to the component 
}

export default apiRequest //This gives us central base URL for all backend requests 