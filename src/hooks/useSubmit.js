import { useState } from 'react'
import { assistantAPI } from '../utilities/axios.js'

const method = "POST"
const url = "/thread"

const useSubmit = () => {

  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const submitForm = async (configObject) => {
    setResponse(null)
    setError("")
    setLoading(true)
    const { requestConfig } = configObject
    console.log(requestConfig)
    try {
      const res = await assistantAPI[method.toLowerCase()]( url, {
        ...requestConfig,
      })
      setResponse(res.data)
      return true
    } catch (err) {
      setError(err.message)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return { response, error, loading, submitForm }
}

export default useSubmit