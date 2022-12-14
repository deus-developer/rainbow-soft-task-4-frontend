import { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import GeneratorForm from "./GeneratorForm"
import GeneratorOutput from "./GeneratorOutput"


type GeneratorBlockState = {
    countNumbers: string
    countThreads: string
    ws: W3CWebSocket | null
    numbers: string
    locked: boolean
}


export class GeneratorBlock extends Component<{}, GeneratorBlockState> {
    constructor(props: any) {
        super(props);
        this.state = {
            countNumbers: "",
            countThreads: "",
            ws: null,
            numbers: "",
            locked: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { target: {name, value} } = event;
        
        // @ts-ignore
        this.setState({ [name]: value })
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        const params = new URLSearchParams({
            "countNumbers": this.state.countNumbers,
            "countThreads": this.state.countThreads
        });
        const url = "ws://127.0.0.1:8080/generator?" + params.toString();

        if (this.state.ws) { this.state.ws.close(); } // Закрываем оставлийся старый веб сокет

        const ws = new W3CWebSocket(url);

        this.setState({
            ws: ws,
            numbers: "",
            locked: true
        })

        // Обновляем состояние при получении нового числа
        ws.onmessage = (event) => {
            this.setState((state) => {
                return {
                    numbers: state.numbers + " " + event.data
                }
            })
        }

        // Разблокируем кнопку генерации, когда все числа с сервера дошли
        ws.onclose = () => {
            this.setState({locked: false})
        }
    }

    render() {
        return (
            <div className="Content">
                <GeneratorForm 
                    onSubmit={this.handleSubmit} 
                    onChange={this.handleInputChange}
                    countNumbers={this.state.countNumbers}
                    countThreads={this.state.countThreads} 
                    locked={this.state.locked} />
                <GeneratorOutput numbers={this.state.numbers} />
            </div>
        )
    }
}
