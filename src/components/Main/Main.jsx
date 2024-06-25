import {useContext} from 'react'
import './Main.css'
import {icons} from '../../assets/icons'
import {Context} from '../../context/Context';

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={icons.user} alt=""/>
        </div>
        <div className='main-container'>

            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello, I am Gemini</span></p>
                <p>How can I help you today ?</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <p>Suggest beautiful places to visit.</p>
                    <img src={icons.compass} alt=""/>
                </div>
                <div className='card'>
                    <p>What is urban planning ?</p>
                    <img src={icons.bulb} alt=""/>
                </div>
                <div className='card'>
                    <p>How to build team work ?</p>
                    <img src={icons.team} alt=""/>
                </div>
                <div className='card'>
                    <p>Improve the readability of the following code.</p>
                    <img src={icons.code} alt=""/>
                </div>
            </div>
            </>
            :
            <div className='result'>
                <div className="result-title">
                    <img src={icons.user} alt=""/>
                    <p>
                        {recentPrompt}
                    </p>
                </div>
                <div className="result-data">
                    <img src={icons.gemini} alt=""/>
                    {loading ?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
            }

            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={icons.gallery} alt="gallery" />
                        <img src={icons.mic} alt="mic" />
                        {input?
                        <img onClick={()=>onSent()} src={icons.send} alt="send" />
                        : null
                        }
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its response. Your privacy & Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main