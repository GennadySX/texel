/**
 * Project texel-front
 * @author GennadySX on 18/07/2020
 */

import React from "react";
import {Col, Row, Button, Form as FormStrap, FormGroup, Label, Input, Alert} from 'reactstrap';
import axios from 'axios'
import {API} from "../constants/API";
import Loading from "./Loading";

export default class FormAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params: null,
            results: [],
            submit: false
        }
    }


    componentDidMount() {
        this.getParams()
    }


    getParams() {
        axios.get(API.config).then(res => {
            res.status === 200 && res.data ? this.setState({params: res.data.params}, () => console.log('state params data: ', this.state.params)) : console.log('data didn`t get from api')
        })
    }


    submit(e) {
        e.preventDefault()
        this.setState({submit: true})
        const {input_text, input_num} = this.state
        if (input_num && input_text) {
            axios.post(API.run, this.state).then(res =>
                res.data ? this.setState({results: [...this.state.results, res.data.text]}) : console.log('state', res.data))
        }
    }


    render() {
        const {params, results} = this.state
        return (
            <div className="row justify-content-center">
                {params ?
                    <FormStrap onSubmit={(e) => this.submit(e)} className={''}>
                        <Row form>
                            {params.map((input, index) =>
                                <Col md={12} key={index}>
                                    <FormGroup>
                                        <Label for={input.name}>{input.title}</Label>
                                        {input.type === 'select' ?
                                            <Input
                                                invalid={this.state.submit && !this.state[input.name] || this.state[input.name] === null}
                                                type={input.type} name={input.name} id={input.name}
                                                onChange={(e) => this.setState({[input.name]: e.target.value})}
                                            >
                                                <option value={''} selected>Выберите значение</option>
                                                {input.items.map((item, indexChild) =>
                                                    <option key={indexChild} value={item.value}>{item.title}</option>
                                                )}

                                            </Input>
                                            : <Input
                                                invalid={this.state.submit && !this.state[input.name]}
                                                type={input.type} name={input.name} id={input.name}
                                                onChange={(e) => this.setState({[input.name]: e.target.value})}
                                            />
                                        }
                                    </FormGroup>
                                </Col>
                            )}
                        </Row>
                        <Row form>
                            <Col md={12} className={'text-center'}>
                                <Button type={'submit'} className={'btn-success'}>Запустить</Button>
                            </Col>
                        </Row>
                    </FormStrap>
                    : <Loading/>
                }

                {results &&
                <div className={'mt-3'}>
                    {results.map((rs, index) =>
                        <Alert color="primary" key={index}>
                            {rs}
                        </Alert>
                    )}
                </div>
                }
            </div>
        );
    }
}


