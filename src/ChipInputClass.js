import React, { Component } from 'react';
import ChipInput from 'material-ui-chip-input';

class ChipInputClass extends Component {
    constructor() {
        super();
        this.state = {
            sessionData: {
                language: [],
                sessionTags: [],
                numberOfJoineesEnrolled: 0
            }
        }

        this.addChip = this.addChip.bind(this);
        this.removeChip = this.removeChip.bind(this);
    }
    componentDidMount = () => {
        this.getTimeZoneCategories();
        this.getSessionDetail();
    }

    addChip = (value, name) => {
        const { sessionData } = this.state;
        sessionData[name].push(value.charAt(0).toUpperCase() + value.slice(1));
        this.setState({ sessionData });
    };
    removeChip = (chip, index, name) => {
        const { sessionData } = this.state;
        sessionData[name].splice(index, 1);
        this.setState({ sessionData });
    };

    render() {
        const { sessionData, numberOfJoineesEnrolled } = this.state;      
        return ( 
        <div className="row">
        <div className="col-lg-6  col-md-6 col-sm-12">
            <div className="form-group padleft">
                <label htmlFor="uname1">Languages Used During Class</label>
                <div className="form-control commonInputField">
                    <ChipInput
                        value={sessionData.language}
                        onAdd={value => this.addChip(value, "language")}
                        onDelete={(chip, index) => this.removeChip(chip, index, "language")}
                        variant="outlined"
                        allowDuplicates={false}
                        newChipKeyCodes={[9, 13, 187, 188]}
                        disabled={numberOfJoineesEnrolled > 0 ? true : false}
                    />
                </div>
                {/* {this.validator.message('Language', sessionData.language, 'required')} */}
            </div>
        </div>
        <div className="col-lg-6  col-md-6 col-sm-12">
            <div className="form-group padRight">
                <label htmlFor="uname1">Session Description Tags</label>
                <div className="form-control commonInputField">
                    <ChipInput
                        value={sessionData.sessionTags}
                        onAdd={value => this.addChip(value, "sessionTags")}
                        onDelete={(chip, index) => this.removeChip(chip, index, "sessionTags")}
                        variant="outlined"
                        allowDuplicates={false}
                        disabled={numberOfJoineesEnrolled > 0 ? true : false}
                        newChipKeyCodes={[9, 13, 187, 188]}
                    />
                </div>
                {/* {this.validator.message('Session description tags', sessionData.sessionTags, 'required')} */}
            </div>
        </div>
    </div>
        )
    }
}

export default (ChipInputClass)
