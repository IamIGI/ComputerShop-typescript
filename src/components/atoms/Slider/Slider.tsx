import { Input } from './Slider.style';

interface SliderProps {
    max: number;
    value: number;
    handleValue: (arg0: string) => void;
}

const Slider = ({ max, value, handleValue }: SliderProps) => {
    const getBackgroundSize = () => {
        return {
            backgroundSize: `${(value * 100) / max}% 100%`,
        };
    };
    return (
        <Input
            type="range"
            min="0"
            max={max}
            onChange={(e) => handleValue(e.target.value)}
            style={getBackgroundSize()}
            value={value}
        />
    );
};

export default Slider;
