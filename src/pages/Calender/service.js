const submitVacation = async (title, descp, startDate, endDate) => {
  const token = JSON.parse(localStorage.getItem('token'))
  console.log("token: ", token);
  const response = await fetch("http://127.0.0.1:8080/api/user/add", {
    method: "POST",
    body: JSON.stringify({
      "title": title,
      "description": descp,
      "fromDate": startDate,
      "endDate": endDate,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json()
};

export {
  submitVacation
}
