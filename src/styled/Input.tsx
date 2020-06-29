import React, { PureComponent } from 'react'

interface Props extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, 
    HTMLInputElement> {
    label: string;
}

export class Input extends PureComponent<Props> {

    render() {
        const { label, ...inputProps } = this.props
        return (
            <div>
                <div>{label}</div>
                <div>
                    <input {...inputProps} />
                </div>
            </div>
        )
    }
}
