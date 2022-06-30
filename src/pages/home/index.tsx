import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col bg-blue items-center justify-center space-y-[4rem]">
        <h1 className="text-[2rem] font-bold text-center">welcome to the trivia challenge</h1>
        <h3 className="text-[1.3rem] font-bold text-center">
          you will be presented with 10 true or false questions
        </h3>
        <p>can you score 100%?</p>
        <button
          onClick={() => navigate('/quiz')}
          className="p-4 bg-red-500 rounded-md w-full text-white font-bold"
        >
          <span>begin</span>
        </button>
      </div>
    </div>
  )
}

export default Home
