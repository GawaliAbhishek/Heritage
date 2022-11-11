import React from 'react'
import './User.css'

function User() {
    // const postDetail = (pics) => {
    //     setPicLoading(true);
    //     if (pics === undefined) {
    //       toast({
    //         title: "Please Select an Image!",
    //         status: "warning",
    //         duration: 5000,
    //         isClosable: true,
    //         position: "bottom",
    //       });
    //       return;
    //     }
    //     console.log(pics);
    //     if (pics.type === "image/jpeg" || pics.type === "image/png") {
    //       const data = new FormData();
    //       data.append("file", pics);
    //       data.append("upload_preset", "chat-app");
    //       data.append("cloud_name", "dnixu4d4g");
    //       fetch("https://api.cloudinary.com/v1_1/dnixu4d4g/image/upload", {
    //         method: "post",
    //         body: data,
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           setPic(data.url.toString());
    //           console.log(data.url.toString());
    //           setPicLoading(false);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //           setPicLoading(false);
    //         });
    //     } else {
    //       toast({
    //         title: "Please Select an Image!",
    //         status: "warning",
    //         duration: 5000,
    //         isClosable: true,
    //         position: "bottom",
    //       });
    //       setPicLoading(false);
    //       return;
    //     }
    //   };
    return (
        <>
            <div class="registration-form">
                <div>
                    <div class="registration-logo with-border">
                        <img src={require("./avatar.png")} id="img" alt="" />

                        <h1><b>Hands to preserve monuments</b></h1>
                    </div>

                    <div class="row">

                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" id="fname" name="fname" class="form-control item" placeholder="Name" required />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" id="lname" name="lname" class="form-control item" placeholder="History" required />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="number" id="npass" name="npass" class="form-control item" placeholder="Architecture" required />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" id="cpass" name="cpass" class="form-control item" placeholder="Interesting Facts" required />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="number" id="cpass" name="cpass" class="form-control item" placeholder="How to reach" required />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="number" id="cpass" name="cpass" class="form-control item" placeholder="Things to keep in mind while visiting this place" required />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" id="age" name="age" class="form-control item" placeholder="Location" required />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" id="bod" name="bod" class="form-control item" placeholder="Place to visit near" required />
                            </div>
                        </div>


                        <div class="col-md-6">
                            <div class="form-group">
                                <input
                                    type="file"
                                    p={1.5}
                                    accept="image/*"
                                    // onChange={(e) => postDetail(e.target.files[0])}
                                />
                            </div>
                        </div>
                    </div>

                    {/* <!-- <div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<input type="text" id="country" name="country" class="form-control item" placeholder="Applicant_ID" required/>
						</div>
					</div>
					 --> */}



                    <div class="row">
                        <div class="col-md-12" id="button">
                            <button type="submit" name="submit" class="btn btn-block login-button">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default User