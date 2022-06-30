import { useQuery } from 'react-query'
import { fetchQuiz } from '../utils/api/quiz'

export function useQuiz() {
  const data = useQuery('quizzes', fetchQuiz, {
    refetchOnWindowFocus: false,
  })
  return data
}
