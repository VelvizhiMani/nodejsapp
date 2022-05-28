import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class OrginList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOrgin = this.deleteOrgin.bind(this);
    this.state = {
      orginlist:[],
  }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/orgin')
        .then(response => {
            this.setState({
              orginlist: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        })
}

deleteOrgin(id) {
  axios.delete('http://localhost:4000/orgin/' + id)
      .then((res) => {
          alert('Orgin successfully deleted!')
      }).catch((error) => {
          console.log(error)
      })
}
  render() {
    const {  orginlist } = this.state;
    return (
      <>
        <div class="content-wrapper">
          <section class="content-header">
            <h1>
              Dashboard
              <small>Control panel</small>
            </h1>
            <ol class="breadcrumb">
              <li><Link to="#"><i class="fa fa-dashboard"></i> Home</Link></li>
              <li class="active">Dashboard</li>
            </ol>
          </section>

          {/* <!-- Main content --> */}
          <section class="content">
            <div class="row">

              <div class="box">
                <div class="box-header">
                  <div class="col-md-6">
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>Product Country Orgin List</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/orginadd">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Add Country of Orgin</button></Link>
                    </div>
                </div>
                <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Orgin Name</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {orginlist &&
                      orginlist.map((items, index) => (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{items.orginname}</td>
                        <td>{items.status}</td>
                        <td style={{width:'10%' }}>
                          <button><Link to={"/orginedit/" + items._id}><i class="fa fa-edit (alias) text-blue"></i></Link></button> &nbsp;
                          <button onClick={ () => this.deleteOrgin(items._id)}><i class="fa fa-trash text-red"></i></button></td>
                      </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>S.no</th>
                        <th>Orgin Name</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
             
            </div>

          </section>
        </div>
      
      </>
    )
  }
}

export default OrginList;
