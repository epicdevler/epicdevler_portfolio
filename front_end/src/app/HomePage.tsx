import {Component, useEffect} from "react";
import {getPortfolioData} from "../../sanity/utils/utils";

export class HomePage extends Component {


    componentDidMount() {
            getPortfolioData().then(
                (value) => {
                    // setWorkExperience(value)
                    console.log(value.works)
                    console.log(value.technologies)
                },
                (reason) => {
                    console.log(reason)
                }
            )
    }



    render() {
        return (
            <></>
        );
    }
}