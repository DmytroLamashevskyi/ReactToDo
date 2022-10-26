import React, {Component} from 'react'

export default class List extends Component { 

	render() {
	return (
			<ul className="list-group my-3">
			{
				this.props.items.map((value,index)=>{
					return (
						<React.Fragment key={index}>
							<li className="list-group-item form-group">
								<div className="col">
									<label className="form-control" >{value}</label> 
							    </div>
							    <div className="col  my-1">
							      <button onClick={()=>{this.props.deleteItem(index)}} type="button" className="btn btn-danger btn-sm" >X</button>
							    </div>  
							</li> 

						</React.Fragment>
					)
				})
			  
			}
			</ul>
	)}

}