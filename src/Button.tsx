import useSound from 'use-sound';
import goyda from './assets/goyda.mp3'

export const Button = () => {
    const [play] = useSound(goyda)
    return (
        <button className='btn'  onClick={() => play()}>
            ГОЙДА
        </button>
    )
}