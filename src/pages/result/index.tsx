import PageTransition from '../../components/page-transition/PageTransition'
import { useMatch, useNavigate, useNavigationType } from 'react-router-dom'
import { useFormData } from '../../utils/useFormData'
import { useEffect } from 'react'
import Markdown from 'marked-react'

interface userAnswers {
  correct: string
  category: string
  type: boolean
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

function Result() {
  const { data } = useFormData<{ answers: userAnswers[] }>('answers')
  const navigate = useNavigate()
  const routerAction = useNavigationType()
  const isResultPage = !!useMatch('/result')

  function getNumberOfCorrect() {
    let a = 0
    data?.answers?.map((item) => {
      if (item.correct) {
        a += 1
      }
    })
    return a
  }
  useEffect(() => {
    if (routerAction === 'POP') {
      navigate('/')
    }
  }, [routerAction])

  return (
    <div className="py-5">
      <PageTransition show={isResultPage}>
        <p className="text-center mb-5 font-bold capitalize">
          you scored {getNumberOfCorrect()} / {data?.answers?.length}
        </p>
        <div className="flex flex-col space-y-5">
          {data?.answers?.map((item, index) => (
            <div className="p-8 border-2 rounded-lg flex flex-col space-y-4" key={index}>
              <Markdown>{item.question}</Markdown>
              <div className="text-center">
                {item.correct === item.correct_answer ? <p>correct ✅</p> : <p>wrong ❌</p>}
              </div>
            </div>
          ))}
          <button
            className="bg-green-500 p-5 rounded-md text-white font-bold"
            onClick={() => navigate('/')}
          >
            PLAY AGAIN?
          </button>
        </div>
      </PageTransition>
    </div>
  )
}

export default Result
