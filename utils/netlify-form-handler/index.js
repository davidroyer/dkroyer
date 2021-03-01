export default async (formElement) => {
  const formData = new FormData(formElement)
  const body = new URLSearchParams(formData).toString()

  const submissionSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  }

  return await fetch('/', submissionSettings)
}
