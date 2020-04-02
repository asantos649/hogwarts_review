import React from 'react'
import hogs from "../porkers_data";
import HogTile from '../components/HogTile'

class HogContainer extends React.Component{

    state={
        greaseFilter:false,
        hogs: hogs,
        sort: 'name'
    }

    renderPigs = () => {

        //default pigs to render
        let pigsToRender = this.state.hogs

        //logic to filer greased
        if(this.state.greaseFilter){
            pigsToRender = this.state.hogs.filter (hog =>{
                return hog.greased
            })
        }

        //logic to sort
        pigsToRender.sort((a,b)=>{
            return a[this.state.sort] > b[this.state.sort] ? 1 : -1
        })

        //returning HogTile components for correct list of hogs
        return pigsToRender.map(hog=>(
            <HogTile key={hog.name} hog={hog}/>
        ))
    }

    filterHandler = () => {
        this.setState({
            greaseFilter: !this.state.greaseFilter,
        })
    }

    sortHandler = () => {
        if (this.state.sort === 'name'){
            this.setState({
                sort: 'weight'
            })
        } else if (this.state.sort === 'weight'){
            this.setState({
                sort: 'name'
            })
        }
        
    }


    render(){
        return(
            <div>
                <button onClick={this.filterHandler}>Filter Grease?</button>
                    <button onClick={this.sortHandler}>Sorted By: {this.state.sort}</button><br/><br/>
                <div className='ui grid container'>
                    {this.renderPigs()}
                </div>
            </div>
        )
    }
}

export default HogContainer