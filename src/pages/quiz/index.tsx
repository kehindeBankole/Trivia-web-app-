import { useEffect, useState } from 'react'
import { useQuiz } from '../../data/quiz'
import Markdown from 'marked-react'
import { useMatch, useNavigate } from 'react-router-dom'
import { useFormData } from '../../utils/useFormData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import PageTransition from '../../components/page-transition/PageTransition'

function Quiz() {
  const { data, isLoading, error } = useQuiz()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<any>([])
  const navigate = useNavigate()
  const update = useFormData('answers', { answers: [] })
  const isQuizPage = !!useMatch('/quiz')

  function selectAnswer(answer: string) {
    if (data?.results) {
      setAnswers((prev: any) => [
        ...prev,
        {
          ...data.results[current],
          correct:
            data?.results[current].correct_answer.toLocaleLowerCase() ===
              answer.toLocaleLowerCase() && answer,
        },
      ])
      if (current === data?.results?.length - 1) {
        setTimeout(() => navigate('/result'), 0)
        return
      }
      setCurrent((prev) => (prev += 1))
    }
  }
  useEffect(() => {
    update?.edit({ answers })
  }, [answers])

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <PageTransition show={isQuizPage}>
          <div className="flex flex-col items-center justify-center space-y-6">
            <b>{data?.results[current].category}</b>
            <div className="border-2 rounded-md py-16 px-5 w-full">
              <span className="text-center">
                <Markdown>{data?.results[current].question}</Markdown>
              </span>
            </div>
            <p>
              {current + 1} of {data?.results.length}
            </p>
            <div className="flex justify-between w-full space-x-5">
              <button
                className="bg-green-500 p-5 w-1/2 font-bold text-white"
                onClick={() => selectAnswer('True')}
              >
                <span>true</span>
              </button>
              <button
                className="bg-red-500 p-5 w-1/2 font-bold text-white"
                onClick={() => selectAnswer('False')}
              >
                <span>false</span>
              </button>
            </div>
          </div>
        </PageTransition>
      )}
    </div>
  )
}

export default Quiz
