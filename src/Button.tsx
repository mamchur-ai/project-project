import useSound from 'use-sound';
import goyda from './assets/goyda.mp3'

export const Button = () => {
    const [play] = useSound(goyda, {html5: true})
    return (
        <button className='btn'  onClick={() => play()}>
            ГОЙДА
        </button>
    )
}