import React from "react";
import './styles/App.scss';
import Header from "./containers/header";
import FormAPI from "./components/Form";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="container ">
                   <FormAPI />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
