import React, { Component, Fragment } from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';

class DatePicker extends Component {
    constructor() {
        super();
        this.state = {
            filterOptions: {
                startDate: new Date(),
                endDate: moment(new Date()).add(2, 'months'),
            },
        }
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
    }

    handleStartDateChange = date => {
        if (!date || date.toString() === "Invalid Date" || moment(date).format('MM-DD-YYYY') < moment(new Date()).format('MM-DD-YYYY')) return;

        const { filterOptions } = this.state;
        filterOptions.startDate = date;
        filterOptions.endDate = moment(date, 'MM-DD-YYYY').add(2, 'months');
        this.setState({ filterOptions });
        this.getCourseSearchData(filterOptions.searchText);
    };

    handleEndDateChange = (date, value) => {
        if (!date || date.toString() === "Invalid Date" || moment(date).format('MM-DD-YYYY') < moment(new Date()).format('MM-DD-YYYY')) return;
        const { filterOptions } = this.state;
        filterOptions.endDate = date;
        this.setState({ filterOptions });
        this.getCourseSearchData(filterOptions.searchText);
    };


    render() {
        const { filterOptions } = this.state;
        return (
            <Fragment>
                <h3 align="center">Demo of material ui Date Picker</h3>
                <div className="filterControls">
                    <div className="filterTitle">
                        <h3>Date</h3>
                    </div>
                    <div className="filterDate">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                allowKeyboardControl={false}
                                autoOk
                                disableToolbar
                                inputVariant="outlined"
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                label="Start Date"
                                name="startDate"
                                minDate={new Date()}
                                value={filterOptions.startDate}
                                onChange={this.handleStartDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardDatePicker
                                autoOk
                                disableToolbar
                                inputVariant="outlined"
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                label="End Date"
                                name="endDate"
                                autoCorrect
                                minDate={filterOptions.startDate}
                                value={filterOptions.endDate}
                                onChange={this.handleEndDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default (DatePicker)
