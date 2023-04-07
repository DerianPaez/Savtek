export async function post({ request }) {
  const data = await request.json()

  const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify'
  const requestBody = {
    secret: '6Ld4zEYlAAAAALipx7cckd6dM74UdTBwWiwEw1hq',
    response: data.recaptcha
  }

  const response = await fetch(recaptchaURL, {
    method: 'POST',
    body: JSON.stringify(requestBody)
  })

  const responseData = await response.json()

  return new Response(JSON.stringify(responseData), { status: 200 })
}
