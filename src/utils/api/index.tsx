import axios from 'axios'

export async function makeApiCall<T = any>(url: string): Promise<T> {
  try {
    const response = await axios({ url })
    return response.data
  } catch (error: any) {
    throw new Error(error)
  }
}
