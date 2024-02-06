const BASE_URL =
	'https://mymuse-web-backend-e8bcbc24f043.herokuapp.com/order/pincode'
// const BASE_URL = 'https://retafy.fly.dev'

export function get(zipCode) {
	// const url = new URL(`${BASE_URL}/${zipCode}`)
    const url = `${BASE_URL}/${zipCode}`
    console.log(url, "---url ---")
	// Object.keys(queryParams).forEach((key) =>
	// 	url.searchParams.append(key, queryParams[key])
	// )
	return fetch(url, {
        method: 'GET',
      })
		.then(async (response) => {
			if (!response.ok) {
				// Throw an error with the status
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			return response.json()
		})
		.catch((error) => {
            
			throw error // Re-throw to handle it in calling function
		})
}