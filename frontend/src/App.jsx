import { useState } from 'react'
import './App.css'

// Game screens
const SCREENS = {
  HOME: 'home',
  PRE_REVEAL: 'pre-reveal',
  REVEAL: 'reveal',
  END: 'end'
}

function App() {
  // Game state
  const [screen, setScreen] = useState(SCREENS.HOME)
  const [totalPlayers, setTotalPlayers] = useState(5)
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(1)
  const [imposterIndex, setImposterIndex] = useState(null)
  const [selectedWord, setSelectedWord] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)

  // Fetch random word from backend
  const fetchRandomWord = async () => {
    setLoading(true)
    setError('')
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api/random-word'
      const response = await fetch(apiUrl)
      
      if (!response.ok) {
        throw new Error('Failed to fetch word from server')
      }
      
      const data = await response.json()
      return data.word
    } catch (err) {
      console.error('Error fetching word:', err)
      setError('Could not connect to server. Please try again.')
      return null
    } finally {
      setLoading(false)
    }
  }

  // Start new game
  const startGame = async () => {
    if (totalPlayers < 3) {
      setError('You need at least 3 players!')
      return
    }
    
    if (totalPlayers > 20) {
      setError('Maximum 20 players!')
      return
    }

    // Fetch word from backend
    const word = await fetchRandomWord()
    if (!word) return // Error already set in fetchRandomWord
    
    // Generate random imposter index (1 to totalPlayers)
    const randomImposter = Math.floor(Math.random() * totalPlayers) + 1
    
    // Set game state
    setSelectedWord(word)
    setImposterIndex(randomImposter)
    setCurrentPlayerIndex(1)
    setScreen(SCREENS.PRE_REVEAL)
  }

  // Reveal word for current player
  const revealWord = () => {
    setScreen(SCREENS.REVEAL)
  }

  // Move to next player
  const nextPlayer = () => {
    if (currentPlayerIndex < totalPlayers) {
      setCurrentPlayerIndex(currentPlayerIndex + 1)
      setScreen(SCREENS.PRE_REVEAL)
    } else {
      setScreen(SCREENS.END)
    }
  }

  // Reset game
  const newGame = () => {
    setScreen(SCREENS.HOME)
    setCurrentPlayerIndex(1)
    setImposterIndex(null)
    setSelectedWord('')
    setError('')
  }

  // Check if current player is imposter
  const isCurrentPlayerImposter = currentPlayerIndex === imposterIndex

  return (
    <div className="app-container">
      {/* SCREEN 1: Home / Setup */}
      {screen === SCREENS.HOME && (
        <>
          <button className="info-button" onClick={() => setShowModal(true)}>
            i
          </button>
          
          <div className="screen">
            <div className="logo">IMPOSTER</div>

            <div className="input-group">
              <label className="input-label" htmlFor="player-count">
                how many players?
              </label>
              <input
                id="player-count"
                type="number"
                min="3"
                max="20"
                value={totalPlayers}
                onChange={(e) => {
                  setTotalPlayers(parseInt(e.target.value) || 3)
                  setError('')
                }}
                className="input-field"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button 
              className="button" 
              onClick={startGame}
              disabled={loading}
            >
              {loading ? 'loading...' : 'start'}
            </button>
          </div>
        </>
      )}

      {/* SCREEN 2: Player Turn (Pre-Reveal) */}
      {screen === SCREENS.PRE_REVEAL && (
        <div className="screen">
          <div className="player-number">player {currentPlayerIndex}</div>
          
          <div className="instruction-text">
            ready? tap to see your word
          </div>

          <button className="button" onClick={revealWord}>
            reveal
          </button>

          <div className="warning-text">
            (no peeking 👀)
          </div>
        </div>
      )}

      {/* SCREEN 3: Player Reveal */}
      {screen === SCREENS.REVEAL && (
        <div className="screen">
          {isCurrentPlayerImposter ? (
            // Imposter reveal
            <>
              <div className="imposter-display">IMPOSTER</div>
              <div className="subtext">blend in...</div>
              <button className="button" onClick={nextPlayer}>
                next
              </button>
            </>
          ) : (
            // Normal player reveal
            <>
              <div className="word-label">the word is:</div>
              <div className="word-display">{selectedWord}</div>
              <button className="button" onClick={nextPlayer}>
                next
              </button>
            </>
          )}
        </div>
      )}

      {/* SCREEN 4: End / Ready */}
      {screen === SCREENS.END && (
        <div className="screen">
          <div className="end-text">everyone's ready</div>
          <div className="subtext">start guessing</div>
          <button className="button" onClick={newGame}>
            new game
          </button>
        </div>
      )}

      {/* Instructions Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h2>how to play</h2>
            <div className="modal-content">
              <p>• pass the phone around to see your role</p>
              <p className="indent"> one random player is the imposter</p>
              <p className="indent"> everyone else gets the same word</p>
              <p>• go in a circle twice and say one word </p>
              <p className="indent">- regular players: say an adjacent word, but don't be obvious</p>
              <p className="indent">- imposter: blend in and try to figure out the word</p>
              <p className="indent">- if imposter says the word, they lose</p>
              <p>• vote on who's the imposter</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

