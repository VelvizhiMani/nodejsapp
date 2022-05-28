import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CategoryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cat_type: '',
        category_name: '',
        url: '',
        cat_img: '',
        imagealt:'',
        vedio:'',
        vedioalt:'',
        metatitle:'',
        metakeyword:'',
        metadesc:'',
  }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/category/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              url: response.data.url, 
              category_name: response.data.category_name, 
              cat_type: response.data.cat_type, 
              cat_img: response.data.cat_img, 
              imagealt: response.data.imagealt, 
              vedio: response.data.vedio, 
              vedioalt: response.data.vedioalt, 
              metatitle: response.data.metatitle, 
              metakeyword: response.data.metakeyword, 
              metadesc: response.data.metadesc, 	
              status: response.data.status, 	
              timestamp: response.data.timestamp, 	
             });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  render() {
    return (
      <>
        {/* <!-- Content Wrapper. Contains page content --> */}
        <div class="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
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
              <div class="col-md-12">
                <div class="box box-primary">
                  <div class="box-header with-border">
                    <div class="col-md-6">
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>View Category</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/categorylist">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Category List</button></Link>
                    </div>
                  </div>
                  <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th class="bg-green text-center" colSpan={4}>View Category</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="bg-gray">Category Type</th>
                            <td >{this.state.cat_type}</td>
                            <th class="bg-gray">Category Name</th>
                            <td>{this.state.category_name}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Category Image</th>
                            <td ><img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+this.state.cat_img} alt="drugcarts"/></td>
                            <th class="bg-gray">Image Alt Tag</th>
                            <td>{this.state.imagealt}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Video Upload</th>
                            <td ><img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+this.state.vedio} alt="drugcarts"/></td>
                            <th class="bg-gray">Vedio Alt Tag</th>
                            <td>{this.state.vedioalt}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">URL</th>
                            <td >{this.state.url}</td>
                            <th class="bg-gray">Status</th>
                            <td>{this.state.status}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Meta Title</th>
                            <td colSpan={3}>{this.state.metatitle}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Meta Keyword</th>
                            <td colSpan={3}>{this.state.metakeyword}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Meta Description</th>
                            <td colSpan={3}>{this.state.metadesc}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Timestamp</th>
                            <td colSpan={3}>{this.state.timestamp}</td>
                        </tr>
                      </tbody>
                    <tfoot>
                    </tfoot>
                  </table>
                </div>
                   
                </div>
              </div>

            </div>

          </section>
        </div>
      </>
    )
  }
}

export default CategoryView;
