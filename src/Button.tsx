import useSound from 'use-sound';
import goyda from './assets/goyda.mp3'

export const Button = () => {
    const [play] = useSound(goyda)
    return (
        <button onClick={play}>
            ГОЙДА
        </button>
    )
}