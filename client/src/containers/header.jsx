import React from "react";
import {Jumbotron} from "reactstrap";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={' text-center'}>
                <Jumbotron className={'bg-light text-dark'}>
                    <h1 className="display-1">Texet TEST</h1>
                    <p className="lead">Проект разработан для тестирования разработчика компании <a href={'https://texel.graphics/ru/'} className={'text-dark font-weight-bold'} >TEXEL.GRAPHICS </a>.</p>
                    <em className="lead">Разработал разработчик <a href={'https://github.com/gennadysx'} className={'text-dark font-weight-bold'} >GennadySX</a>.</em>
                    <hr className="my-2"/>
                </Jumbotron>
            </div>
        )
    }
}