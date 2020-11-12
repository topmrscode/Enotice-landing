import API_BASE from './Base.js'


// SEND CONTACT MAIL
const contact = async(data) => {

    let response = await fetch(API_BASE + 'contact', {
        method: "POST",
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'      
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

// SEND DEMO MAIL
const requestDemo = async(data) => {

    let response = await fetch(API_BASE + 'request-demo', {
        method: "POST",
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'      
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}



export {
   contact,
   requestDemo
}