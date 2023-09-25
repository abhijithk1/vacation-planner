export const signUpCall = async (email, password) => {
    const response = await fetch("http://127.0.0.1:8080/api/register",{
        method: 'POST',
        body: JSON.stringify({
            "username": email,
            "password": password,
        }),
        headers: {
            'Content-type': 'application/json',
         },
    })
    // .then((response) => response.json())
    // .then((data) => {
    //     // console.log("data : ", data)
    //     return data
    // })

    return response.json()
    // .catch((err) => console.log("error : ", err.message))
}