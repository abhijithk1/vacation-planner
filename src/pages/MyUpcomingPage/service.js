export const listMyUpcomingVacations = async () => {
    const token = JSON.parse(localStorage.getItem('token'))
    console.log("token: ", token);
    const response = await fetch("http://127.0.0.1:8080/api/user/list/upcoming", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json()
  };