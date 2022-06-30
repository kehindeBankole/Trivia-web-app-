import { makeApiCall } from '.'
import { Quiz } from '../../types/quiz'

export async function fetchQuiz() {
  const data = await makeApiCall<{ results: Quiz[] }>(
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
  )
  return data
}
