import { Component } from "react";
import './GeneratorForm.less';


type GeneratorFormProps = {
    onSubmit: React.FormEventHandler<HTMLFormElement>
    onChange: React.ChangeEventHandler<HTMLInputElement>
    countNumbers: string
    countThreads: string
    locked: boolean
}

class GeneratorForm extends Component<GeneratorFormProps> {
    constructor(props: GeneratorFormProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="FormField">
                    <input
                        name="countNumbers"
                        type="number"
                        value={this.props.countNumbers}
                        min={1}
                        max={2147483647}
                        required
                        placeholder="Кол-во чисел:"
                        onChange={this.props.onChange} />
                </div>
                <div className="FormField">
                    <input
                        name="countThreads"
                        type="number"
                        value={this.props.countThreads}
                        min={1}
                        max={8}
                        required
                        placeholder="Кол-во потоков:"
                        onChange={this.props.onChange} />
                </div>
                <button className="GenerateButton" disabled={this.props.locked}>Сгенерировать</button>
            </form>
        );
    }
}

export default GeneratorForm;
