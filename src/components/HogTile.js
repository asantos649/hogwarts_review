import React from 'react'


class HogTile extends React.Component{

    state={
        showDeets:false
    }

    formatName = (name) => {
        return name.toLowerCase().replace(/ /g,'_')
    }

    clickHandler = () => {
        this.setState({
            showDeets: !this.state.showDeets
        })
    }


    render(){
        return(
            <div className='ui eight wide column' onClick={this.clickHandler}>
                <div className='pigTile'>
                    <h4>{this.props.hog.name}</h4>
                    <img src={`/hog-imgs/${this.formatName(this.props.hog.name)}.jpg`}/>
                    {this.state.showDeets && 
                    <div>
                        <div>Specialty:{this.props.hog.specialty}</div>
                        <div>Weight:{this.props.hog.weight}</div>
                        <div>Greased?:{this.props.hog.greased.toString()}</div>
                        <div>Medal:{this.props.hog['highest medal achieved']}</div>
                    </div>}
                </div>
            </div>
        )
    }
}

export default HogTile