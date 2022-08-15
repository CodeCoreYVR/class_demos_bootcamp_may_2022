import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
    const [dateTime, setDateTime] = useState(new Date())

    useEffect(() => {
        console.log("like componentDidMount");
        const intervalId = setInterval(() => {
            setDateTime(new Date())
        }, 1000);
        return() => {
            console.log("like componentWillUnmount");
            clearInterval(intervalId)
        }
    }, [])

    return(
        <div>
            {dateTime.toLocaleString()}
        </div>
    )
}


// class CurrentDateTime extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             date: new Date()
//         }
//         console.log('1: constructor is fired')
//     }

//     componentDidMount(){
//         console.log('3: componentDidMount')
//         this.intervalId = setInterval(() => {
//             this.setState((state) => {
//                 return{
//                     date: new Date()
//                 }
//             })
//         }, 1000)
//     }

//     componentDidUpdate(){
//         console.log('4: componentDidUpdate')
//     }

//     componentWillUnmount(){
//         console.log('5: componentWillUnmount')
//         clearInterval(this.intervalId)
//     }

//     render(){
//         console.log('2: render fired')
//         return (
//             <div>
//                 {
//                     this.props.shouldShowTime ?
//                     this.state.date.toLocaleTimeString()
//                     :
//                     this.state.date.toLocaleDateString()
//                 }
//             </div>
//         )
//     }
// }

export default CurrentDateTime;
