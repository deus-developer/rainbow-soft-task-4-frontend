import "./GeneratorOutput.less";

interface GeneratorProps {
    numbers: string
}


function GeneratorOutput(props: GeneratorProps) {
    return (
            <div id="numbersOutput">
                {props.numbers}
            </div>
        );
}
export default GeneratorOutput;
