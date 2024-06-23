import React from "react";
import { Button, Table, Form, Modal } from "react-bootstrap";

class EspacosControl extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: 0,
            nomeEspaco: '',
            capacidadeMaxima: '',
            tempoMaximo: '',
            textoInstrucoes: '',
            diasDeFuncionamento: '',
            horarioFuncionamento: {
                inicio: {
                    hours: '',
                    minutes: ''
                },
                fim: {
                    hours: '',
                    minutes: ''
                }
            },
            espacos: [],
            modalAberta: false
        }
    }

    componentDidMount(){
        this.buscarEspaco();
    }

    buscarEspaco = () => {
        fetch("https://condo.loca.lt/espaco")
            .then(resposta => resposta.json())
            .then(dados => {                   
                this.setState({ espacos: dados });
            })
            .catch(error => {
                console.error('Erro ao buscar espaços:', error);
            });
    }

    deletarEspaco = (id) => {
        fetch("https://condo.loca.lt/espaco/" + id, { method: 'DELETE' })
            .then(resposta => {
                if (resposta.ok) {
                    this.buscarEspaco();
                }      
            })
    }

    carregarEspaco = (id) => {
        fetch("https://condo.loca.lt/espaco/" + id, { method: 'GET' })
            .then(resposta => resposta.json())
            .then(espaco => {
                this.setState({
                    id: espaco.id,
                    nomeEspaco: espaco.nomeEspaco,
                    capacidadeMaxima: espaco.capacidadeMaxima,
                    tempoMaximo: espaco.tempoMaximo,
                    textoInstrucoes: espaco.textoInstrucoes,
                    diasDeFuncionamento: espaco.diasDeFuncionamento,
                    horarioFuncionamento: espaco.horarioFuncionamento,
                    modalAberta: true
                })
            })
    }

    cadastraEspaco = (espaco) => {
        fetch("https://condo.loca.lt/espaco/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(espaco)
        })
            .then(resposta => {
                if (resposta.ok) {
                    this.buscarEspaco();
                    this.fecharModal();
                } else {
                    alert('Não foi possível adicionar espaço')
                }
            })
    }

    atualizarEspaco = (espaco) => {
        fetch("https://condo.loca.lt/espaco/" + espaco.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(espaco)
        })
            .then(resposta => {
                if (resposta.ok) {
                    this.buscarEspaco();
                    this.fecharModal();
                } else {
                    alert('Não foi possível atualizar espaço')
                }
            })
    }

    atualizarNomeEspaco = (e) => {
        this.setState({
            nomeEspaco: e.target.value
        })
    }

    atualizarCapacidadeMaxima = (e) => {
        this.setState({
            capacidadeMaxima: e.target.value
        })
    }

    atualizarTempoMaximo = (e) => {
        this.setState({
            tempoMaximo: e.target.value
        })
    }

    atualizarTextoInstrucoes = (e) => {
        this.setState({
            textoInstrucoes: e.target.value
        })
    }

    atualizarDiasDeFuncionamento = (e) => {
        this.setState({
            diasDeFuncionamento: e.target.value
        })
    }

    atualizarHorarioInicio = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            horarioFuncionamento: {
                ...prevState.horarioFuncionamento,
                inicio: {
                    ...prevState.horarioFuncionamento.inicio,
                    [name]: value
                }
            }
        }));
    }

    atualizarHorarioFim = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            horarioFuncionamento: {
                ...prevState.horarioFuncionamento,
                fim: {
                    ...prevState.horarioFuncionamento.fim,
                    [name]: value
                }
            }
        }));
    }

    submit = () => {
        const espaco = {
            nomeEspaco: this.state.nomeEspaco,
            capacidadeMaxima: this.state.capacidadeMaxima,
            tempoMaximo: this.state.tempoMaximo,
            textoInstrucoes: this.state.textoInstrucoes,
            diasDeFuncionamento: this.state.diasDeFuncionamento,
            horarioFuncionamento: this.state.horarioFuncionamento
        }

        if (this.state.id === 0) {
            this.cadastraEspaco(espaco);
        } else {
            espaco.id = this.state.id;
            this.atualizarEspaco(espaco);
        }
    }

    reset = () => {
        this.setState({
            id: 0,
            nomeEspaco: '',
            capacidadeMaxima: '',
            tempoMaximo: '',
            textoInstrucoes: '',
            diasDeFuncionamento: '',
            horarioFuncionamento: {
                inicio: {
                    hours: '',
                    minutes: ''
                },
                fim: {
                    hours: '',
                    minutes: ''
                }
            },
        })
    }

    abrirModal = () => {
        this.setState({ modalAberta: true });
    }

    fecharModal = () => {
        this.setState({ modalAberta: false });
        this.reset();
    }

    render(){
        return (
            <div style={{ height: '90vh', overflow: 'auto' }}>
                
                <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Espaço</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" value={this.state.id} readOnly={true}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Espaço</Form.Label>
                                <Form.Control type="text" placeholder="Espaço" value={this.state.nomeEspaco} onChange={this.atualizarNomeEspaco} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Capacidade</Form.Label>
                                <Form.Control type="text" placeholder="Capacidade" value={this.state.capacidadeMaxima} onChange={this.atualizarCapacidadeMaxima} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tempo Limite (Em minutos)</Form.Label>
                                <Form.Control type="text" placeholder="Ex: 60, 120, 180..." value={this.state.tempoMaximo} onChange={this.atualizarTempoMaximo} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Instruções</Form.Label>
                                <Form.Control type="text" placeholder="É permitido..." value={this.state.textoInstrucoes} onChange={this.atualizarTextoInstrucoes} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Funcionamento</Form.Label>
                                <Form.Control type="text" placeholder="Somente números: 0,1,2,3,4,5,6" value={this.state.diasDeFuncionamento} onChange={this.atualizarDiasDeFuncionamento} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formHorarioInicio">
                                <Form.Label>Horário de Início</Form.Label>
                                <Form.Control type="number" placeholder="Horas" name="hours" value={this.state.horarioFuncionamento.inicio.hours} onChange={this.atualizarHorarioInicio} />
                                <Form.Control type="number" placeholder="Minutos" name="minutes" value={this.state.horarioFuncionamento.inicio.minutes} onChange={this.atualizarHorarioInicio} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formHorarioFim">
                                <Form.Label>Horário de Fim</Form.Label>
                                <Form.Control type="number" placeholder="Horas" name="hours" value={this.state.horarioFuncionamento.fim.hours} onChange={this.atualizarHorarioFim} />
                                <Form.Control type="number" placeholder="Minutos" name="minutes" value={this.state.horarioFuncionamento.fim.minutes} onChange={this.atualizarHorarioFim} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.fecharModal}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={this.submit}>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome do Espaço</th>
                                <th>Capacidade Máxima</th>
                                <th>Tempo Máximo</th>
                                <th>Instruções</th>
                                <th>Funcionamento</th>
                                <th>Horário</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.espacos.map((espaco) => (
                                <tr key={espaco.id}>
                                    <td>{espaco.nomeEspaco}</td>
                                    <td>{espaco.capacidadeMaxima}</td>
                                    <td>{espaco.tempoMaximo}</td>
                                    <td>{espaco.textoInstrucoes}</td>
                                    <td>{espaco.diasDeFuncionamento}</td>
                                    <td>{`${espaco.horarioFuncionamento.inicio.hours}:${espaco.horarioFuncionamento.inicio.minutes} - ${espaco.horarioFuncionamento.fim.hours}:${espaco.horarioFuncionamento.fim.minutes}`}</td>
                                    <td>
                                        <Button variant="secondary" onClick={() => this.carregarEspaco(espaco.id)}>Atualizar</Button>
                                        <Button variant="danger" onClick={() => this.deletarEspaco(espaco.id)}>Excluir</Button>
                                        <Button variant="info">Marcar Manutenção</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default EspacosControl;
