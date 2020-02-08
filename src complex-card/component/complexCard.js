import React, {Component} from 'react'


class ComplexCard extends Component{
    constructor(){
        super()
        this.state={
              name:'',
              month:'',
              number:'',
              year:''

        }
    }
     
    addName=(n)=>{
        n.preventDefault()
        this.setState({
           name: n.target.value
        })
    }
    addmonth=(m)=>{
        m.preventDefault()
        this.setState({
           month: m.target.value
        })
    }
    addyear=(y)=>{
        y.preventDefault()
        this.setState({
           year: y.target.value
        })
    }
    addNumber=(nb)=>{
        nb.preventDefault()
        this.setState({
           number: nb.target.value
        })
    }

    render(){
        return(
           <div className='complex-Card'>
               <div className="card">
                   <header>
                       <h2>Company Name</h2>
                       {/* <img src="https://cdn2.slidemodel.com/wp-content/uploads/2074-01-worldmap-connections-16x9-2.jpg" className="fond" /> */}
                   </header>
                   <main>
                       <img className='puc' src='https://static4.depositphotos.com/1003857/292/i/950/depositphotos_2922078-stock-photo-creditcard-chip.jpg'/>
                       <p className='num'>{this.state.number}</p>
                   </main>
                   <footer className='footer-card'>
                       <div><p className='name'>{this.state.name}</p></div>
                       
                       <div className='dateLogo'>
                           <span className='date'>{this.state.month}/{this.state.year}</span>
                           <img className='masdercard' src='https://www.mastercard.fr/content/dam/mccom/global/logos/logo-mastercard-mobile.svg'/>
                         
                       </div>
                       
                   </footer>
               </div>
               <form className="details">
                <label> My number: 
                    <input  type="text" maxLength="16" onChange={(nb)=>this.addNumber(nb)}/></label><br/>    
                    <label> My Name:
                     <input type="text" onChange={(n)=>this.addName(n)} maxLength="20"/><br/></label>
                     <label>Date:
                <input  type="text" maxLength="2" onChange={(m)=>this.addmonth(m)}/><br/>
                <input  type="text" maxLength="2" onChange={(y)=>this.addyear(y)}/>
                </label> 
               </form>
           </div>

        )
    }
}
export default ComplexCard 