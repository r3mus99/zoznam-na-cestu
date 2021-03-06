import '../../App.css';
import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOn from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class SingleItem extends Component {

    handleChange = () => {
        this.props.onChange(this.props.id)
    };

    handleVisibility = () => {
        this.props.onVisibilityChange(this.props.id);
    };

    render() {
        let visibilityButton;
        if (!this.props.visible) {
            visibilityButton = <VisibilityOn />;
        } else {
            visibilityButton = <VisibilityOff />;
        }


        return (
            <div className="item">
                <Checkbox style={{ width: 'auto' }}
                    checked={this.props.checked}
                    onClick={this.handleChange}
                    disabled={!this.props.visible} />

                <Button
                    style={{ justifyContent: "left", width: '90%' }}
                    onClick={this.handleChange}
                    disabled={!this.props.visible}>
                    {this.props.label}
                </Button>

                <IconButton style={{ width: 'auto' }}
                    aria-label="hide"
                    className="grayIcon"
                    onClick={this.handleVisibility}>
                    {visibilityButton}
                </IconButton>

            </div>
        )
    }
}

export default SingleItem;