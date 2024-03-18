import React, { Component } from 'react';
import axios from 'axios';
//Styles
import Button from '../Button';
//Components
import GetText from '../GetText';

//Functions
import UserFunctions from '../UserFunctions';

import {
    API_URL
  } from '../../config';
 
class ImageUploaderComponent extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            name:null,
            file: null,
            success: null,
            resultMessage: null
        }
        this.onFileChange = this.onFileChange.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }
 
    onFileChange(e) {
        this.setState({
            name: URL.createObjectURL(e.target.files[0]),
            file: e.target.files[0]
        })
    }
 
    uploadFile(){
        const formData =  new FormData();
        formData.append('image', this.state.file);
        formData.append('userHash', UserFunctions.getSessionHash());
        let url = API_URL+"imgUpload";
        axios.post(url, formData, { // Post the form data to url
        })
        .then(res => { // Upload Response
            console.log(res.data.results[0].resultMessage);
            this.setState({
                success: res.data.results[0].success,
                resultMessage: res.data.results[0].resultMessage
            })

            if(res.data.results[0].success == true) {
                window.location.reload(true);//Refresh is actually necessary
            }
        })
 
    }
 
    render() {
        let imgPreview;
        let resultMessage;

        if (this.state.name) {
            imgPreview = <img src={this.state.name} alt='Preview' />;
        }
        if (this.state.resultMessage) {
            resultMessage = this.state.resultMessage;
        }

        return (
            <div className="row">
                <div className="col-12">
                    <div className="form-group preview">
                        {<span className="successFalse">{resultMessage}</span>}
                    </div>

                    <form>
                        <div className="form-group">
                            <input type="file" name="image" className="form-control" onChange={this.onFileChange} />
                        </div>
                        <Button type="button" className="btn btn-primary btn-block" callback={this.uploadFile} text={<GetText textName='upload' />} />
                    </form>
                </div>
            </div>
            
        )
    }
}

export default ImageUploaderComponent;