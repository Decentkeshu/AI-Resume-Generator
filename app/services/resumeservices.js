const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const createuser = async(user, email, password, cpassword) => {
    const response = await fetch(`${BASE_URL}/api/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, email, password, cpassword }),
    });
    const data = await response.json();
    return { status: response.status, data };
}

export const loggedinuser = async(identifier, password) => {
    const response = await fetch(`${BASE_URL}/api/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password })
    });
    return response.json();
}